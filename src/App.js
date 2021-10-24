import React, { Component } from 'react';
import './App.css';
import Loader from 'react-loader-spinner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader
          type="Bars"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={10000}
        />
      </div>
    );
  }
}

export default App;
