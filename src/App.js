import React, { Component } from 'react';
import Display from './Display'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Display translate={this.handleClick}/>

      </div>
    );
  }

  handleClick(){
    console.log("Clicked, y'all");
  }

}

export default App;
