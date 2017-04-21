import React, { Component } from 'react';
import './App.css';
import TextInput from './TextInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>CSS Adventure</h2>
        </div>
        <div className="text-input">
          <TextInput />
        </div>
      </div>
    );
  }
}

export default App;
