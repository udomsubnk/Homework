import React, { Component } from 'react';
import axios from 'axios';
import fakeData from '../Assets/data';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';
import $ from 'jquery'
class Detail extends Component {
  Data = {
    all : fakeData
  }
  backupData = fakeData;
  componentWillMount(){
    axios.get('https://ywc15.ywc.in.th/api/interview')
    .then( response => {
        this.Data.all = response.data;
        this.backupData = response.data.slice();
        this.Data.all = _.sortBy(this.Data, function(o) { return o.interviewRef; })[0];
        this.Data.content = _.filter(this.Data.all, ['major', 'content'])
        this.Data.design = _.filter(this.Data.all, ['major', 'design'])
        this.Data.marketing = _.filter(this.Data.all, ['major', 'marketing'])
        this.Data.programming = _.filter(this.Data.all, ['major', 'programming'])
        this.forceUpdate();
    })
  }
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.Data)
    return (
      <div>
        <div className="input-group search sticky-top content-block">
          <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
          <input type="text" className="form-control search-box" placeholder="ค้นหาด้วย ชื่อ,สาขา"/>
        </div>
          
        <div className="content-block">
          <button >eiei</button>
          <BootstrapTable data={this.Data.content} hover>
            <TableHeaderColumn isKey dataField='interviewRef' dataAlign='center' dataSort>รหัส</TableHeaderColumn>
            <TableHeaderColumn dataField='firstName' dataAlign='center' dataSort>ชื่อ</TableHeaderColumn>
            <TableHeaderColumn dataField='lastName' dataAlign='center' dataSort>นามสกุล</TableHeaderColumn>
            <TableHeaderColumn dataField='major' dataAlign='center' dataSort>สาขา</TableHeaderColumn>
          </BootstrapTable>
          <BootstrapTable data={this.Data.design} hover>
            <TableHeaderColumn isKey dataField='interviewRef' dataAlign='center' dataSort>รหัส</TableHeaderColumn>
            <TableHeaderColumn dataField='firstName' dataAlign='center' dataSort>ชื่อ</TableHeaderColumn>
            <TableHeaderColumn dataField='lastName' dataAlign='center' dataSort>นามสกุล</TableHeaderColumn>
            <TableHeaderColumn dataField='major' dataAlign='center' dataSort>สาขา</TableHeaderColumn>
          </BootstrapTable>
          <BootstrapTable data={this.Data.marketing} hover>
            <TableHeaderColumn isKey dataField='interviewRef' dataAlign='center' dataSort>รหัส</TableHeaderColumn>
            <TableHeaderColumn dataField='firstName' dataAlign='center' dataSort>ชื่อ</TableHeaderColumn>
            <TableHeaderColumn dataField='lastName' dataAlign='center' dataSort>นามสกุล</TableHeaderColumn>
            <TableHeaderColumn dataField='major' dataAlign='center' dataSort>สาขา</TableHeaderColumn>
          </BootstrapTable>
          <BootstrapTable data={this.Data.programming} hover>
            <TableHeaderColumn isKey dataField='interviewRef' dataAlign='center' dataSort>รหัส</TableHeaderColumn>
            <TableHeaderColumn dataField='firstName' dataAlign='center' dataSort>ชื่อ</TableHeaderColumn>
            <TableHeaderColumn dataField='lastName' dataAlign='center' dataSort>นามสกุล</TableHeaderColumn>
            <TableHeaderColumn dataField='major' dataAlign='center' dataSort>สาขา</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}
$(document).ready(function() {
  $(window).scroll(function(event) {
    if( $(window).scrollTop() === ($('.search').position()).top ){
      $('.search').removeClass('content-block')
    }else $('.search').addClass('content-block')
  });
});
export default Detail;
