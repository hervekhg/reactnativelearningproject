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

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons:
          [
            { id: 'fefefv', name: 'Herve', age: 31 },
            { id: 'vdere', name: event.target.value, age: 22 },
            { id: 'wevez', name: 'Isabelle', age: 27 }
          ]
      }
    );
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} // click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age} 
              key={person.id}/>
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
