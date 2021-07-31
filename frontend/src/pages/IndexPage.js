import React from 'react';
import '../styling/index-page.css';
import { Link } from 'react-router-dom';

function IndexPage() {
  return (
    <>
    <div id={'index-container'}>
    <div id="animation"></div>
      <div className={'spacer'} />
      <div className={'content'}>
        <div>
          <h1 id="title">Traffic Jam</h1>
        </div>
        <div className="startBtnContainer">
          <Link to="/start">
            <button className="startScreenBtn">
              Start
            </button>
          </Link>
          <Link to="/join">
            <button className="startScreenBtn">
              Join
            </button>
          </Link>
        </div>
      </div>
      <div className={'spacer'} />
    </div>
    </>
  );
}

export default IndexPage;
