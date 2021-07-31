import React from 'react';
import '../styling/start-page.css';
import { Link } from 'react-router-dom';

function IndexPage() {
  return (
    <div id={'index-container'}>
      <div className={'spacer'} />
      <div className={'content'}>
        <div id="title">
          <h1>Traffic Jam</h1>
        </div>
        <div className="startBtnContainer">
          <Link to="/another">
            <button className="startScreenBtn">
              Start
            </button>
          </Link>
          <Link to="/another">
            <button className="startScreenBtn">
              Join
            </button>
          </Link>
        </div>
      </div>
      <div className={'spacer'} />
    </div>
  );
}

export default IndexPage;
