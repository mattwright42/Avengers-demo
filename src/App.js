import React, { Component } from 'react';
import './App.css';
import avengers from './avengersData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Avengers by Matt Wright</h1>
        </header>
        <div>
          {this.state.avengers.map(a => (
            <div key={a.id}>
              <p>Name: {a.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
