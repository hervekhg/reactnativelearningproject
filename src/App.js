import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I am a react App for Learning </h1>
        <p>This working fine. I love it</p>
        <button> Switch</button>
        <Person name="Max" age="28"/>
        <Person name="Gaël" age="30"> Je suis un vieux qui aime coder </Person>
        <Person name="isabelle" age="26"/>

      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "This my React App"));
  }
}

export default App;
