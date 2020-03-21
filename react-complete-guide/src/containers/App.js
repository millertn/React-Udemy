//IMPORTANT webHook Version

// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Person from './Person/Person';

// const app = (props) => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: "Taylor", age:23},
//       {name:"Dave", age:28},
//       {name:"JJ", age:28}
//     ],
//     otherState:"Some other Value"
//   });

//   const switchNameHandler = () => {
   
//      //this overwrites, its best to use useState multiple times.
//      setPersonsState({
//        persons:[
//          {name: "Taylor - switched", age:23},
//          {name:"Dave - switched", age:28},
//          {name:"JJ - switched", age:28}
//        ],
//        otherState:personsState.otherState
//      });
//     };


//   return (
//     <div className="App">
//       <h1>Hi, I'm a react app</h1>
//       <button onClick={switchNameHandler} className="switchName">Switch Name</button>
//       <Person 
//         name={personsState.persons[0].name} 
//         age={personsState.persons[0].age}> My hobbies: Painting, Programming
    
//       </Person>
//       <Person 
//         name={personsState.persons[1].name} 
//         age={personsState.persons[1].age} />
//       <Person 
//         name={personsState.persons[2].name} 
//         age={personsState.persons[2].age}>
//       </Person>
//     </div>
//   );
// }

// export default app;




//non webHook version
import React, { Component } from 'react';
// import Radium, {StyleRoot} from 'radium';
// import styled from 'styled-components';
import logo from '../assets/logo.svg';
// import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import classes from './App.css'

class App extends Component {

  constructor (props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        {id: 1, name: "Taylor", age:23},
        {id: 2, name:"Dave", age:28},
        {id: 3, name:"JJ", age:28}
      ],
      username: 'daveCutePatoot',
      showPersons: false,
      currentTextLength:""
    }
  }


  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  
  //state is to be used sparingly and with care, function components are preferred
  
  switchNameHandler = (newName) => {
      this.setState({
        persons:[
          {name: newName, age:23},
          {name:"Dave - switched", age:28},
          {name:"JJ - switched", age:28}
        ]
      });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    // const persons = this.state.persons.slice();, same as above
    //best practice for updating state: 1. copy state 2. update copy 3. set state to copy
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //alternate way
    //const person = Object.assign({}. this.state.person[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  getTextHandler(event) {
    let length = event.target.value.length;
    this.setState ({
      currentTextLength:length
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  componentWillMount() {
    console.log("[App.js] ComponentWillMount");
  }

  componentDidMount() {
    console.log('[App.js] ComponentDidMount');
  }

  render() {
    console.log("[App.js] render");
    let persons = null;
    if(this.state.showPersons) {
      persons = (
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed = {this.nameChangedHandler}/>
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit title = {this.props.appTitle} persons={this.state.persons} chowPersons={this.state.showPersons} clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
    );
  }


}

export default App;
// export default Radium(App);
