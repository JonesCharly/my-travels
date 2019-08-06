import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";


import Travel from "./Travel"
import Quote from "./Quote";
import Quotes from "./citation"
import Travels from "./Travels"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travels></Travels>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header> */}
        {/* <Quotes
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quotes
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        /> */}
        {/* <Travel
        destination="Paris"
        country="France"
        distance="0km"
        />
        <Travel
        destination="Bordeaux"
        country="France"
        distance="630km"
        /> */}
        {/* <Quotes> </Quotes> */}
      </div>
    );
  }
}

export default App;
