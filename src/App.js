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
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
    this.calculateWater = this.calculateWater.bind(this)
  }

  onStepsChange = (value) => {
    this.setState({steps:value.target.value});
    this.calculateWater()
  };
  onHeartChange = (value) => {
 /*   console.log("1=",value)
    console.log("2=",value.target)
    console.log("3=",value.target.value)*/
    this.setState({heart:value.target.value});
    this.calculateWater()
  };
  onTempChange = (value) => {
    this.setState({temperature:value.target.value});
    this.calculateWater()
  };
 calculateWater(){
   let water = 1.5;
    if(this.state.temperature > 20){
      const nbSup20 = this.state.temperature - 20
      const nbLiterToAdd = 0.02 * nbSup20;
      water = water + nbLiterToAdd;
    }

    if (this.state.heart > 120) {
      const nbHeartBeatSup = this.state.heart - 120;
      const nbLiterToAdd = 0.0008 * nbHeartBeatSup
      water = water + nbLiterToAdd
      console.log('waterHeart', water)
    }

    if (this.state.steps > 10000) {
      const nbHeartBeatSup = this.state.steps - 10000;
      const nbLiterToAdd = 0.00002 * nbHeartBeatSup
      water = water + nbLiterToAdd
    }
    this.setState({
      water
    })
  }
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

/*@Adama
tu peux mettre tout le code dans le render() principal mais si c'est long il est préférable de le decomposer en des subrender() et leur faire appel dans le principal
On parle du meme fichier jsx 
que ce soit app ou autre ce sont tous des composants react qui possedent une methode render()  donc c'est faisable pour tout composan*/
