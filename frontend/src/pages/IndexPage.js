import React from 'react';
import '../styling/index.css';
import Button from '../components/Button';
import exampleCall from '../api/exampleCall';
import { Link } from 'react-router-dom';

function showAlert() {
  alert('You just clicked the button!');
}

async function callServer() {
  const response = await exampleCall();
  if (response.success) {
    alert(`Server says: ${JSON.stringify(response.data)}`);
  } else {
    alert(`Server had an error: ${JSON.stringify(response.error)}`);
  }
}

function IndexPage() {
  return (
    <div id={'index-container'}>
      <div className={'spacer'} />
      <div className={'content'}>
        <h1>Traffic Jam</h1>
        <Link to="/another">
          <button className="styledBtn">Start</button>
        </Link>
        <Link to="/another">
          <button className="styledBtn">Join</button>
        </Link>
      </div>
      <div className={'spacer'} />
    </div>
  );
}

export default IndexPage;