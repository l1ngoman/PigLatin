import React, { Component } from 'react';
import './App.css';
import App from './App.js'
import PigHat from './images/pigHat.jpg'
 class Display extends Component {
  render() {
    console.log(this.props);
     return (
       <div id="biggest">
      <div id="background">
          <div className="App">
              <header className="header">
                <h1>LEARN Pig Latin</h1>
                <hr/>
                <p className="subTitle">
                  Convert English to Pig Latin. Pig Latin is a pseudo language constructed from a simple set of rules (see below).
                </p>
                <br/><br/>
              </header>
               <main>
                <textarea type="text" className="textField"  onChange={this.props.store}/>
                <br/><br/>
                <button className="section" onClick={this.props.translate}>Translate</button>
                <br/><br/>
                <p className="textField">{this.props.text}</p>
              </main>
          </div>
      </div>
      </div>
    );
  }
}
 export default Display;
