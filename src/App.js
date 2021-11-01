import './App.css';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Searchbar from './components/Searchbar';
import LogicApp from './components/LogicApp';

class App extends Component {
  state = {
    searchImage: null,
  };

  formSubmitHandler = searchImage => {
    this.setState({ searchImage });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ToastContainer autoClose={3000} />
        <LogicApp searchImage={this.state.searchImage} />
      </div>
    );
  }
}

export default App;
