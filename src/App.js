import React from 'react';
import './App.css';
import Box from './components/Box/Box'
import './styles/global.css'
const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    };
  };

  onStepsChange = (value) => {
    this.setState({steps:value.target.value})
  };
  onHeartChange = (value) => {
 /*   console.log("1=",value)
    console.log("2=",value.target)
    console.log("3=",value.target.value)*/
    this.setState({heart:value.target.value})
  };
  onTempChange = (value) => {
    this.setState({temperature:value.target.value})
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <p>Heart : {heartMin}</p>
            <p>Temperature : {tempMin}</p>
            <p>Steps : {stepsMin}</p>
        </div>
        <div className="row">
          <Box icon={"local_drink"} color={"#3A85FF"} value={1.5} unit={"L"}/>
          <Box icon={"directions_walk"} color={"black"} value={this.state.steps} unit={"steps"} min={stepsMin} max={stepsMax} onChange={this.onStepsChange}/>
          <Box icon={"favorite"} color={"red"} value={this.state.heart} unit={"bpm"} min={heartMin} max={heartMax} onChange={this.onHeartChange}/>
          <Box icon={"wb_sunny"} color={"yellow"} value={this.state.temperature} unit={"°C"} min={tempMin} max={tempMax} onChange={this.onTempChange}/>
        </div>
      </div>
    );
  };
};

export default App;