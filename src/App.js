import React, { Component } from 'react';
import './App.css';
import FilmBox from './containers/FilmBox';
import ViewMore from './containers/ViewMore';

class App extends Component {
  render() {
    return (
      <div>
      <FilmBox />
      <ViewMore/>
    </div>
    );
  }
}

export default App;
