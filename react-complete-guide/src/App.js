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
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {name: "Taylor", age:23},
      {name:"Dave", age:28},
      {name:"JJ", age:28}
    ],
    username: 'daveCutePatoot'
  }
  //state is to be used sparingly and with care, function components are preferred
  
  switchNameHandler = (newName) => {
      //this is a nono
      // this.state.persons[0].name = this.state.persons[0].name + " Switched"; 
      this.setState({
        persons:[
          {name: newName, age:23},
          {name:"Dave - switched", age:28},
          {name:"JJ - switched", age:28}
        ]
      });
    
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

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
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

    const inputStyle = {
      border: "1px solid blue",
      width:"80%",
      height:"30px"
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Switched with Button in a new way!')} className="switchName">Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Taylor - Switched with Paragraph")}> My hobbies: Painting, Programming
        </Person>

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed={this.nameChangedHandler}/>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
        </Person>

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
