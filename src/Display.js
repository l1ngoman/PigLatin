import React, { Component } from 'react';
import './App.css';
import App from './App.js'

class Display extends Component {
  render() {
    console.log(this.props);

    return (
      <div id="wholePage">
          <div className="App">
              <input onChange={this.props.store} className="userForm" />
              <br/>
              <button onClick={this.props.translate}>Translate</button>
              <br/>
              <p>{this.props.text}</p>

          </div>
      </div>
    );
  }
}

export default Display;
