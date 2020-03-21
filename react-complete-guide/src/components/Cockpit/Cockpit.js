import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold]
    }

    btnClass = [classes.Button];
    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Coding is so fun!</p>
            <button className={btnClass.join(' ')} onClick={props.clicked}>Toggle People</button>
        </div>
        
    );
}

export default cockpit