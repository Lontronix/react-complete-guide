import React, { Component } from 'react';
import './App.css';
// import components with uppercase so that they don't collide with default tags like div, li, etc.
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World.</h1>
         <Person name="Lonnie" age="18"/>
         <Person name="Charly" age="7"/>
      </div>
    );
  }
}
export default App;
