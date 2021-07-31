import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import '../styling/index.css';
import InfoStats from '../components/TrafficPage/InfoStats';
import Button from '@material-ui/core/Button';

function AnotherPage() {

  const [message, SetMessge] = useState("Work Away!");

  function startBreak() {
    document.body.style = 'background: #bb1e10;';
    SetMessge("Time to break!");
  }
  
  function finishBreak() {
    document.body.style = 'background: #33a532;';
    SetMessge("Work Away!");
  }

  return (
    <div>
      <h1>Room Number: #28123</h1>
      <InfoStats/>
      <br/>
      <p>{message}</p>
      <div className="three-lights">
        <button class="red" onClick={startBreak}></button>
        <span class="yellow"></span>
        <button class="green" onClick={finishBreak}></button>
      </div>
    </div>

  );
}

export default AnotherPage;
