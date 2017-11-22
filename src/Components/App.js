import React, { Component } from 'react';
import '../Assets/App.css';
import Landing from './Landing';
import Detail from './Detail';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
  }
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
