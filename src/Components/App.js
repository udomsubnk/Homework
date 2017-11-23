import React, { Component } from 'react';
import '../Assets/App.css';
import Landing from './Landing';
import Detail from './Detail';
import Announce from './Announce';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <Landing></Landing>
        <Detail></Detail>
        <Announce></Announce>
      </div>
    );
  }
}

export default App;
