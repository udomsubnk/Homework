import React, { Component } from 'react';
import '../Assets/App.css';
import Landing from './Landing';
import Detail from './Detail';
import Announce from './Announce';
import Board from './Board';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <Landing></Landing>
        <Detail></Detail>
        <Board></Board>
        <Announce></Announce>
      </div>
    );
  }
}

export default App;
