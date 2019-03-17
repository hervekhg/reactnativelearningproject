import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
  	persons:[
  		{ name : 'Herve', age:30 },
  		{ name : 'Gael', age:20 },
  		{ name : 'Isabelle', age:26 }
  	]
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

  render() {
    return (
      <div className="App">
        <h1> Hi, I am a react App for Learning </h1>
        <p>This working fine. I love it</p>
        <button onClick={() => this.switchNameHandler('Herve!!')}> Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this, 'Herve')}
        > My Hobbies : Tennis </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "This my React App"));
  }
}

export default App;
