import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Lecture3Assigment/UserInput/UserInput';
import UserOutput from './Lecture3Assigment/UserOutput/UserOutput';
import Char from './Lecture3Assigment/Char/Char';

//LECTURE THREE INSTRUCTIONS
{/* <div className="Instructions">
  <ol>
    <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
    <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
    <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
    <li>When you click a CharComponent, it should be removed from the entered text.</li>
  </ol>
  <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
</div> */}



class App extends Component {


state = {
    userinput: 'daveCutePatoot',
}


  inputChangeHandler = (event) => {
    this.setState({
      userinput: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userinput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userinput:updatedText});

  }

  //click is very important, you can pass methods as props to be used in other methods. click is just the name that will be refrenced in other components
  //bind is better, the other way used in the button can be inefficient
  render() {
    const inputStyle = {
      border: "1px solid blue",
      width:"80%",
      height:"30px"
    }

    let charList = this.state.userinput.split('').map((ch, index) => {
      return <Char character={ch} key ={index} click={() => this.deleteCharHandler(index)}/>;
    });

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <UserOutput
            p1={"This is some fun text!"}
            inputLength={this.state.userinput.length}>
          </UserOutput>

          <input type="text" style={inputStyle} onChange={this.inputChangeHandler} value={this.state.userinput} />
          {charList}
          {/* this is using it as a component, but if you only use it once, there is no need */}
          {/* <UserInput style={inputStyle} changed={this.usernameChangeHandler} userName={this.state.username} /> */}
      </div>
    );
  }
}

export default App;