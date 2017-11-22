import React, { Component } from 'react';
import axios from 'axios';
import fakeData from '../Assets/data';
import _ from 'lodash';

class Carousel extends Component {
	Data = fakeData;

	componentWillMount(){
		axios.get('https://ywc15.ywc.in.th/api/interview')
		.then( response => {
		    this.Data = response.data;
		    this.Data = _.sortBy(this.Data, (o) => { return o.interviewRef; })
		    this.Data.unshift('')
		    this.Data.unshift('')
		    this.Data.push('')
		    this.Data.push('')
		    this.forceUpdate();
		})
		this.setState((prevState) => {});
	}
	constructor(props) {
	    super(props);
	    this.state = {
	    	crsFirst:0,
	    	crsSecond:1,
	    	crsThird: 2,
	    	crsFourth: 3,
	    	crsFifth: 4
	    };

	    this.up = this.up.bind(this);
	    this.down = this.down.bind(this);
	}
	getName = function(index){
		return this.Data[index].firstName + '	' + this.Data[index].lastName;
  	}
  	getCode = function(index){
		return this.Data[index].interviewRef;
 	}
  	getMajor = function(index){
		return this.Data[index].major;
  	}
  	getClass = function(index){
		if ( this.Data[index].firstName === undefined )
			return 'hide';
		else return '';
  	}
  	getMajorColor = function(index){
			return this.Data[index].major + "-color";
  	}
	up = function(e){
		e.preventDefault();
		if( this.state.crsFirst > 0 ){
			this.setState((prevState) => {
				return {
					crsFirst: prevState.crsFirst -1 ,
		    	crsSecond: prevState.crsSecond -1,
		    	crsThird: prevState.crsThird -1,
		    	crsFourth: prevState.crsFourth -1,
		    	crsFifth: prevState.crsFifth -1
			  }
			})
		}
	}
	down = function(e){
		e.preventDefault();
		if( this.state.crsFifth < this.Data.length -1 ){
			this.setState((prevState) => {
				return {
  				crsFirst: prevState.crsFirst +1 ,
  	    	crsSecond: prevState.crsSecond +1,
  	    	crsThird: prevState.crsThird +1,
  	    	crsFourth: prevState.crsFourth +1,
  	    	crsFifth: prevState.crsFifth +1
			  }
			});
		}
	}
	render() {
		return (
			<div className="Carousel">
				<i className="fa fa-caret-up font-3rem ywc-blue-color hoverable" onClick={this.up} aria-hidden="true"></i>
				<div className="Carousel-display">
					<div className={"Carousel-item crs-first " + this.getClass(this.state.crsFirst)}>
						<div className="row Carousel-item-text">
							<div className="col hidden-xs">{this.getCode(this.state.crsFirst)}</div>
							<div className="col-sm-6 col-xs-12">{this.getName(this.state.crsFirst)}</div>
							<div className={"col hidden-xs " + this.getMajorColor(this.state.crsFirst)}>{this.getMajor(this.state.crsFirst)}</div>
						</div>
					</div>
					<div className={"Carousel-item crs-second " + this.getClass(this.state.crsSecond)}>
						<div className="row Carousel-item-text">
							<div className="col hidden-xs">{this.getCode(this.state.crsSecond)}</div>
							<div className="col-sm-6 col-xs-12">{this.getName(this.state.crsSecond)}</div>
							<div className={"col hidden-xs " + this.getMajorColor(this.state.crsSecond)}>{this.getMajor(this.state.crsSecond)}</div>
						</div>
					</div>
					<div className={"Carousel-item crs-third " + this.getClass(this.state.crsThird)}>
						<div className="row Carousel-item-text">
							<div className="col hidden-xs">{this.getCode(this.state.crsThird)}</div>
							<div className="col-sm-6 col-xs-12">{this.getName(this.state.crsThird)}</div>
							<div className={"col hidden-xs " + this.getMajorColor(this.state.crsThird)}>{this.getMajor(this.state.crsThird)}</div>
						</div>
					</div>
					<div className={"Carousel-item crs-fourth " + this.getClass(this.state.crsFourth)}>
						<div className="row Carousel-item-text">
							<div className="col hidden-xs">{this.getCode(this.state.crsFourth)}</div>
							<div className="col-sm-6 col-xs-12">{this.getName(this.state.crsFourth)}</div>
							<div className={"col hidden-xs " + this.getMajorColor(this.state.crsFourth)}>{this.getMajor(this.state.crsFourth)}</div>
						</div>
					</div>
					<div className={"Carousel-item crs-fifth " + this.getClass(this.state.crsFifth)}>
						<div className="row Carousel-item-text">
							<div className="col hidden-xs">{this.getCode(this.state.crsFifth)}</div>
							<div className="col-sm-6 col-xs-12">{this.getName(this.state.crsFifth)}</div>
							<div className={"col hidden-xs " + this.getMajorColor(this.state.crsFifth)}>{this.getMajor(this.state.crsFifth)}</div>
						</div>
					</div>
				</div>
				<i className="fa fa-caret-down font-3rem ywc-blue-color hoverable" onClick={this.down} aria-hidden="true"></i>
			</div>
		);
  }
}

export default Carousel;
