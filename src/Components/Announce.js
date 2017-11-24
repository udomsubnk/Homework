import React, { Component } from 'react';
import axios from 'axios';
import fakeData from '../Assets/data';
import _ from 'lodash';

class Detail extends Component {
  Data = fakeData;
  componentWillMount(){
    axios.get('https://ywc15.ywc.in.th/api/interview')
    .then( response => {
        this.Data = response.data;
        this.Data = _.sortBy(this.Data, [function(o) { return o.interviewRef; }]);
        this.Data.unshift('','')
        this.Data.push('','')
        this.forceUpdate();
    })
  }
  render() {
    var rows = [];
    for(var i=0; i < this.Data.length; i++){
      rows.push(
        <tr key={this.Data[i].interviewRef}>
          <th>{this.Data[i].interviewRef}</th>
          <th>{this.Data[i].firstName}</th>
          <th>{this.Data[i].lastName}</th>
          <th>{this.Data[i].major}</th>
        </tr>
      );
    }
    console.log(rows)
    return (
      <div>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Detail;
