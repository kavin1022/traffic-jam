import React from 'react';
import '../styling/index.css';
import Button from '../components/Button';
import InfoStats from '../components/TrafficPage/InfoStats';

function startBreak() {
  document.body.style = 'background: #bb1e10;';
}

function finishBreak() {
  document.body.style = 'background: #33a532;';
}

function AnotherPage() {

  return (
    <div>
      <h1>Traffic-Jam</h1>
      <InfoStats/>
      <div>
        <Button buttonText={"Break Time"} clickAction={startBreak} />
        <Button buttonText={"Finish Break"} clickAction={finishBreak} />
      </div>
    </div>

  );
}

export default AnotherPage;
