import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
  	persons:[
  		{ name : 'Herve', age:30 },
  		{ name : 'Gael', age:20 },
  		{ name : 'Isabelle', age:26 }
    ],
    showPersons : false
  }

  switchNameHandler = (MyName) => {
    //console.log('Was Clik');
    this.setState(
      {persons:
        [
          { name : MyName, age:31 },
          { name : 'Gael', age:22 },
          { name : 'Isabelle', age:29 }
        ]
      }
      
  );
  }

  nameChangedHandler = (event) => {
    this.setState(
      {persons:
        [
          { name : 'Herve', age:31 },
          { name : event.target.value, age:22 },
          { name : 'Isabelle', age:27 }
        ]
      }
  );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding:  '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> Hi, I am a react App for Learning </h1>
        <p>This working fine. I love it</p>
        <button
          style = {style} 
          onClick={() => this.togglePersonsHandler()}> Switch Name
        </button>
        { this.state.showPersons ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click = {this.switchNameHandler.bind(this, 'Herve')}
              changed = {this.nameChangedHandler}
            > My Hobbies : Tennis </Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          </div> : null 
        }

      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "This my React App"));
  }
}

export default App;
