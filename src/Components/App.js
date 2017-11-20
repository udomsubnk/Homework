import React, { Component } from 'react';
import '../Assets/App.css';
import Landing from './Landing';
import Carousel from './Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <Landing></Landing>
        <Carousel></Carousel>
      
      </div>
    );
  }
}

export default App;
