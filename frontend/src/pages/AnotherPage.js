import { useState, useEffect } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import '../styling/index.css';
import InfoStats from '../components/TrafficPage/InfoStats';
import Button from '@material-ui/core/Button';

function AnotherPage() {
  const [message, SetMessge] = useState("Click the green button to start!");
  const [background, setBackground] = useState();

  const red = () => {
    document.body.style='background: #ff3838;'
    SetMessge("Time to break!");
  }

  const yellow = () => {
    document.body.style='background: #fdbe5e;'
    SetMessge("You have three seconds to save your file!");
  }

  const green = () => {
    document.body.style='background: #65e98c;'
    SetMessge("Work Away!");
  }

  function startBreak() {
    /* Sets background colour to yellow for five seconds before changing to red*/
    setBackground(yellow);
    setTimeout(() => {
      setBackground(red)
    }, 2000); 
    
  }
  
  function finishBreak() {
    setBackground(green);

  }

  return (
    <div>
      <h1>Room Number: #28123</h1>
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
