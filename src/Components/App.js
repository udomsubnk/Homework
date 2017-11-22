import React, { Component } from 'react';
import '../Assets/App.css';
import Landing from './Landing';
import Detail from './Detail';
import axios from 'axios';
import fakeData from '../Assets/data';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
  }
  fetchAPI = async function(){
    return new await Promise(function(resolve, reject){
      axios.get('https://ywc15.ywc.in.th/api/interview')
      .then(function (response) {
          resolve(response);
      })
      .catch(function (error){
          reject(fakeData)
      })
    });
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
