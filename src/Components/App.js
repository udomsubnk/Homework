import React, { Component } from 'react';
import '../Assets/App.css';
import Landing from './Landing';
import Detail from './Detail';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <Landing></Landing>
        <Detail></Detail>
      </div>
    );
  }
}

export default App;
