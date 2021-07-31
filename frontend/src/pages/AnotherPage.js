import React from 'react';
import { makeStyles } from '@material-ui/core';
import '../styling/index.css';
import InfoStats from '../components/TrafficPage/InfoStats';
import Button from '@material-ui/core/Button';

function startBreak() {
  document.body.style = 'background: #bb1e10;';
  console.log("test")
}

function finishBreak() {
  document.body.style = 'background: #33a532;';
}

function AnotherPage() {

  return (
    <div>
      <h1>Room Number: #28123</h1>
      <InfoStats/>
      <br/>
      <div className="three-lights">
        <button class="red" onClick={startBreak}></button>
        <span class="yellow"></span>
        <button class="green" onClick={finishBreak}></button>
      </div>
    </div>

  );
}

export default AnotherPage;
