import React, { Component } from 'react';
import axios from 'axios';
import fakeData from '../Assets/data';

class Detail extends Component {
  Data = fakeData;
  componentWillMount(){
    axios.get('https://ywc15.ywc.in.th/api/interview')
    .then( response => {
        this.Data = response.data;
        this.Data.unshift('')
        this.Data.unshift('')
        this.Data.push('')
        this.Data.push('')
        this.forceUpdate();
    })
  }
  rows = [];
  for( i=0; i < this.Data; i++){
    rows.push(
      <tr>
        <th>{this.Data[i].interviewRef}</th>
        <th>{this.Data[i].firstName}</th>
        <th>{this.Data[i].lastName}</th>
        <th>{this.Data[i].major}</th>
      </tr>
    );
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Detail;
