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
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


// let StyledButton = styled.button`
//     background-color: ${props => props.alt ? 'red' : 'green'};
//     color:white;
//     font:inherit;
//     border: 1px solid blue;
//     padding: 8px;
//     cursor:pointer;
//     &:hover {
//       background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//       color:black;
//     }
//   `;


class App extends Component {
  
  state = {
    persons: [
      {id: 1, name: "Taylor", age:23},
      {id: 2, name:"Dave", age:28},
      {id: 3, name:"JJ", age:28}
    ],
    username: 'daveCutePatoot',
    showPersons: false,
    currentTextLength:""
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
      return p.id == id;
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

  //click is very important, you can pass methods as props to be used in other methods. click is just the name that will be refrenced in other components
  //bind is better, the other way used in the button can be inefficient
  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color:'white',
    //   font:'inherit',
    //   border: "1px solid blue",
    //   padding: '8px',
    //   cursor:'pointer',
    //   ':hover': {
    //     backgroundColor : 'lightgreen',
    //     color:'black'
    //   }
    // };

    

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                key={person.id}
                name={person.name} 
                age={person.age} 
                click= {() => this.deletePersonHandler(index)}
                changed={ (event) => this.nameChangedHandler(event, person.id)}
              />
            )
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor : 'salmon',
      //   color:'black'
      // }


    }

    //"red bold" for applying css classes
    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold]
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p className={classes.join(' ')}>Coding is so fun!</p>
          <StyledButton 
            alt={this.state.showPersons} 
            // style={style}
            onClick={() => this.togglePersonsHandler()} className="switchName">Toggle People
          </StyledButton>
          {persons}
        </div>
      // </StyleRoot>
    );
  }
}

export default App;
// export default Radium(App);
