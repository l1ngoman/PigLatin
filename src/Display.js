import React, { Component } from 'react';
import './App.css';
import App from './App.js'

class Display extends Component {
  render() {
    return (
      <div className="App">
          <input className="userForm" />
          <br/>
          <button onClick={this.props.translate}>Translate</button>
          <br/>
          <input className="display" />

      </div>
    );
  }



}

export default Display;
