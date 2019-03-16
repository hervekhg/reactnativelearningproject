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

  switchNameHandler = () => {
  	console.log('Was Clik');
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I am a react App for Learning </h1>
        <p>This working fine. I love it</p>
        <button onClick={this.switchNameHandler}> Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "This my React App"));
  }
}

export default App;
