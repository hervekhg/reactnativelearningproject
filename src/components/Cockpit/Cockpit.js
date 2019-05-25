import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses =  [];
    let btnClass = '';

    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <=2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if(props.persons.length <=1){
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
          <h1> Hi, I am a react App for Learning </h1>
          <p className={assignedClasses.join(' ')}>This working fine. I love it</p>
          <button
            className={btnClass}
            onClick={props.clicked}> Switch Name
          </button>
        </div>
    );
};


export default cockpit;
