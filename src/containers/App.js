import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { name: 'Herve', age: 30 },
      { name: 'Gael', age: 20 },
      { name: 'Isabelle', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    // Récupération de l'index de la personne
    const personIndex = this.state.persons.findIndex(person =>{
      return person.id === id
    });
    // Récupération de la personne
    const person = {
      ...this.state.persons[personIndex]
    }

    //Mise à jour de la personne
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }
    return (
        <div className={classes.App}>
          <Cockpit
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "This my React App"));
  }
}

export default App;
