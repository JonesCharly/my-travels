import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import logo from "./logo.svg"
import Travel from "./Travel"
import Quote from "./Quote";
import Quotes from "./citation"
import Travels from "./Travels"
import Lamp from "./Lamp"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      on: true
    };
  }

  workClick = () => {
    this.setState({ on: !this.state.on });
    console.log(this.state);
    };

  render() {
    let working = this.state.on ? "work" : "notWork";

    return (
      <div className="App">
        <div>
            <img src={logo}  className= {working} alt="logo" />
            <p>Does Homer Work ?</p>
            <button 
            // className={working}
            onClick={this.workClick}
            >{working}</button>
        </div>
      </div>
    );
  }
}

export default App;


// PAST QUEST //
{/* <Lamp />
<Lamp on />
equal to <Lamp on={true} /> */}
{/* <Travels></Travels> */}
{/* <header className="App-header">
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

