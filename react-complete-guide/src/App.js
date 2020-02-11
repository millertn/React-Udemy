//webHook Version
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
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './Lecture3Assigment/UserInput/UserInput';
import UserOutput from './Lecture3Assigment/UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: "Taylor", age:23},
      {id: 2, name:"Dave", age:28},
      {id: 3, name:"JJ", age:28}
    ],
    username: 'daveCutePatoot',
    showPersons: false
  }
  //state is to be used sparingly and with care, function components are preferred
  
  // switchNameHandler = (newName) => {
  //     //this is a nono
  //     // this.state.persons[0].name = this.state.persons[0].name + " Switched"; 
  //     this.setState({
  //       persons:[
  //         {name: newName, age:23},
  //         {name:"Dave - switched", age:28},
  //         {name:"JJ - switched", age:28}
  //       ]
  //     });
  // }

  deletePersonHandler = (personIndex) => {
    //this can lead to unpredictability and is bad practice as it manipulates the original data
    // const persons = this.state.persons;

    //these two are the same, tho the spread operator (...) is more modern.
    const persons = [...this.state.persons]
    // const persons = this.state.persons.slice();

    //best practice for updating state: 1. copy state 2. update copy 3. set state to copy
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: "Taylor - switched", age:23},
        {name: event.target.value, age:28},
        {name: "JJ - switched", age:28}
      ]
    });

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  //click is very important, you can pass methods as props to be used in other methods. click is just the name that will be refrenced in other components
  //bind is better, the other way used in the button can be inefficient
  render() {

    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: "1px solid blue",
      padding: '8px'
    }

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
                click={ () => this.deletePersonHandler(index)}
              />
            )
          })}
        </div>
      );

      //static, not very useful.
      // persons = (
      //   <div>
      //     <Person 
      //       name={this.state.persons[0].name} 
      //       age={this.state.persons[0].age}
      //       click={this.switchNameHandler.bind(this, "Taylor - Switched with Paragraph")}> My hobbies: Painting, Programming
      //     </Person>

      //     <Person 
      //       name={this.state.persons[1].name} 
      //       age={this.state.persons[1].age} 
      //       changed={this.nameChangedHandler}/>

      //     <Person 
      //       name={this.state.persons[2].name} 
      //       age={this.state.persons[2].age}>
      //     </Person>
      //   </div>
      // );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button 
          style={style}
          onClick={() => this.togglePersonsHandler()} className="switchName">Toggle People
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
