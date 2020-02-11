import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Lecture3Assigment/UserInput/UserInput';
import UserOutput from './Lecture3Assigment/UserOutput/UserOutput';

class App extends Component {


state = {
    username: 'daveCutePatoot',
}

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  //click is very important, you can pass methods as props to be used in other methods. click is just the name that will be refrenced in other components
  //bind is better, the other way used in the button can be inefficient
  render() {
    const inputStyle = {
      border: "1px solid blue",
      width:"80%",
      height:"30px"
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <UserOutput
            p1={"This is some fun text!"}
            userName={this.state.username}>
          </UserOutput>

          <UserOutput
            p1={"Who honestly knew coding could be so fun?"}
            userName={"Username: DaveCutePatoot"}>
          </UserOutput>

          <UserInput style={inputStyle} changed={this.usernameChangeHandler} userName={this.state.username} />
      </div>
    );
  }
}

export default App;