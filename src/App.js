import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Herve', age: 30 },
      { name: 'Gael', age: 20 },
      { name: 'Isabelle', age: 26 }
    ],
    showPersons: false
  }

  switchNameHandler = (MyName) => {
    //console.log('Was Clik');
    this.setState(
      {
        persons:
          [
            { name: MyName, age: 31 },
            { name: 'Gael', age: 22 },
            { name: 'Isabelle', age: 29 }
          ]
      }

    );
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons:
          [
            { name: 'Herve', age: 31 },
            { name: event.target.value, age: 22 },
            { name: 'Isabelle', age: 27 }
          ]
      }
    );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1> Hi, I am a react App for Learning </h1>
        <p>This working fine. I love it</p>
        <button
          style={style}
          onClick={() => this.togglePersonsHandler()}> Switch Name
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "This my React App"));
  }
}

export default App;
