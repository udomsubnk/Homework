import React, { Component } from 'react';
import axios from 'axios';
import fakeData from '../Assets/data';
import _ from 'lodash';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Detail extends Component {
  Data = fakeData;
  backupData = fakeData;
  componentWillMount(){
    axios.get('https://ywc15.ywc.in.th/api/interview')
    .then( response => {
        this.Data = response.data;
        this.backupData = response.data.slice();
        this.Data = _.sortBy(this.Data, [function(o) { return o.interviewRef; }]);
        this.forceUpdate();
    })
  }
  constructor(props) {
    super(props);
    this.testDelete = this.testDelete.bind(this);
  }

  testDelete = function(e){
    this.Data.shift();
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <div className="content-block">
          <div className="input-group search">
            <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
            <input type="text" className="form-control search-box" placeholder="ค้นหาด้วย ชื่อ,สาขา"/>
          </div>
          
          <button onClick={this.testDelete}>eiei</button>
          <BootstrapTable data={this.Data} hover>
               <TableHeaderColumn isKey dataField='interviewRef'>รหัส</TableHeaderColumn>
               <TableHeaderColumn dataField='firstName'>ชื่อ</TableHeaderColumn>
               <TableHeaderColumn dataField='lastName'>นามสกุล</TableHeaderColumn>
               <TableHeaderColumn dataField='major'>สาขา</TableHeaderColumn>
           </BootstrapTable>
        </div>
      </div>
    );
  }
}

export default Detail;
