import React, { Component } from 'react';
import Display from './Display'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      userText: "Something", //text from the user
      finalText: "", //translated text
      workingText: "", //temp storage for text
      vowels: ["a", "e", "i", "o", "u"] //but never "y"

    }
  }
  render() {
    return (
      <div className="App">
          <Display store={this.handleClickStore} translate={this.handleTranslatedText} text={this.state.finalText}/>

      </div>
    );
  }

  handleClickStore = (e) => {

    this.setState({userText: e.target.value})
    console.log(this.state.userText);

  }

  handleTranslatedText = () => {
    //this.setState({finalText: this.state.userText})
    this.pigLatify();

  }

  //this will compare all functions to update the final text
  //No return, just set state
  pigLatify(){
    if(this.isFirstVowel(this.state.userText)){
      console.log("was true");
      //push "-way" to the end of the word
      this.setState({finalText: this.state.userText + "-way" })

    }else{
      console.log("I'm in the else");
    }
  }

  //takes in the user text to determine if the first letter is a vowel.
  //will return bool
  isFirstVowel(string){

    if(this.state.vowels.includes(string[0])){
      return true
    }else{
      return false
    }

  }

}

export default App;
