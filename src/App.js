import React from 'react';
import './App.css';
import Steps from './components/Steps/Steps'
const tempMin = -20;
const tempMax = 20;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;
export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <p>heartMin : {heartMin}</p>
            <p>tempMin : {tempMin}</p>
            <p>stepsMin : {stepsMin}</p>
            <Steps/>
        </div>
      </div>
    );
  }
}

export default App;