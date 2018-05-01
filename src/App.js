import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      models: []
    }

    axios.get('http://localhost:8000/api/models/')
      .then(response => this.setState({models: response.data.models}));
  }

  render() {
    const models = this.state.models.map((model) =>
      <div>
        <h3>{model.title}</h3>
        <p>{model.description}</p>
        <a href={model.link}>Get</a>
      </div>
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
        {models}
        </div>
      </div>
    );
  }
}

export default App;
