import React from 'react';
import '../styling/index-page.css';
import { Link } from 'react-router-dom';

function IndexPage() {
  return (
    <>
    <div id={'index-container'}>
      <div id="animation"></div>
        <div>
          <h1 id="title">Traffic Jam</h1>
        </div>
        <div className="startBtnContainer">
          <Link to="/start" className="links">
            <button type="button" className="startScreenBtn">
              Start
            </button>
          </Link>
          <Link to="/join" className="links">
            <button className="startScreenBtn">
              Join
            </button>
          </Link>
        </div>
    </div>
    </>
  );
}

export default IndexPage;
