import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header';
import MovieBoard from './Components/MovieBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <MovieBoard />
      </div>
    );
  }
}

export default App;
