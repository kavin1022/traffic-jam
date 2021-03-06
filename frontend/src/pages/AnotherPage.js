import { useState, useEffect } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import '../styling/index.css';
import InfoStats from '../components/TrafficPage/InfoStats';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function AnotherPage() {
  const [message, SetMessge] = useState("Click the green button to start!");
  const [background, setBackground] = useState();
  const [backgroundText, setBackgroundText] = useState();

  const red = () => {
    document.body.style='background: #a52929;'
    setBackgroundText("red");
    SetMessge("Time to break!");
  }

  const yellow = () => {
    document.body.style='background: #fdbe5e;'
    setBackgroundText("yellow");
    SetMessge("You have three seconds to save your file!");
  }

  const green = () => {
      document.body.style='background: #5db871;'
      setBackgroundText("green");
      SetMessge("Work Away!");
  }

  function startBreak() {
    /* Sets background colour to yellow for five seconds before changing to red*/
    if (backgroundText !== "red"){
      setBackground(yellow);
      setTimeout(() => {
        setBackground(red)
      }, 2000); 
    }
    
  }
  
  function finishBreak() {
    if (backgroundText !== "yellow"){
      setBackground(green);
    }
  }

  return (
    <div>
      
      <Button component={Link} to="/" variant="contained" color="primary" id="return-button">Return to Home</Button>

      <div id="top-div">
        <h1 id="room-number">Room Number: #28123</h1>
      </div>
      <InfoStats/>
      <br/>
      <p id="message">{message}</p>
      <div className="three-lights">
        <button className="red" onClick={startBreak}></button>
        <span className="yellow"></span>
        <button className="green" onClick={finishBreak}></button>
      </div>
    </div>

  );
}

export default AnotherPage;
