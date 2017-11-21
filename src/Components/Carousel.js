import React, { Component } from 'react';
import data from '../Assets/data';

class Carousel extends Component {
	componentWillMount(){
		this.setState((prevState) => {});
	}
	constructor(props) {
	    super(props);
	    console.log(data);
	    this.state = {
	    	crsFirst:0,
	    	crsSecond:1,
	    	crsThird: 2,
	    	crsFourth: 3,
	    	crsFifth: 4
	    };
	    data.unshift("");
	    data.unshift("");
	    data.push("");
	    data.push("");

	    this.up = this.up.bind(this);
	    this.down = this.down.bind(this);
	}
	getName = function(index){
		return data[index].firstName + '	' + data[index].lastName;
  }
  getCode = function(index){
		return data[index].interviewRef;
  }
  getMajor = function(index){
		return data[index].major;
  }
  getClass = function(index){
		if ( data[index].firstName === undefined )
			return 'hide';
		else return '';
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
		if( this.state.crsFifth < data.length -1 ){
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
							<div className="col hidden-xs">{this.getMajor(this.state.crsFirst)}</div>
						</div>
					</div>
					<div className={"Carousel-item crs-second " + this.getClass(this.state.crsSecond)}>
						<div className="row Carousel-item-text">
							<div className="col hidden-xs">{this.getCode(this.state.crsSecond)}</div>
							<div className="col-sm-6 col-xs-12">{this.getName(this.state.crsSecond)}</div>
							<div className="col hidden-xs">{this.getMajor(this.state.crsSecond)}</div>
						</div>
					</div>
					<div className={"Carousel-item crs-third " + this.getClass(this.state.crsThird)}>
						<div className="row Carousel-item-text">
							<div className="col hidden-xs">{this.getCode(this.state.crsThird)}</div>
							<div className="col-sm-6 col-xs-12">{this.getName(this.state.crsThird)}</div>
							<div className="col hidden-xs">{this.getMajor(this.state.crsThird)}</div>
						</div>
					</div>
					<div className={"Carousel-item crs-fourth " + this.getClass(this.state.crsFourth)}>
						<div className="row Carousel-item-text">
							<div className="col hidden-xs">{this.getCode(this.state.crsFourth)}</div>
							<div className="col-sm-6 col-xs-12">{this.getName(this.state.crsFourth)}</div>
							<div className="col hidden-xs">{this.getMajor(this.state.crsFourth)}</div>
						</div>
					</div>
					<div className={"Carousel-item crs-fifth " + this.getClass(this.state.crsFifth)}>
						<div className="row Carousel-item-text">
							<div className="col hidden-xs">{this.getCode(this.state.crsFifth)}</div>
							<div className="col-sm-6 col-xs-12">{this.getName(this.state.crsFifth)}</div>
							<div className="col hidden-xs">{this.getMajor(this.state.crsFifth)}</div>
						</div>
					</div>
				</div>
				<i className="fa fa-caret-down font-3rem ywc-blue-color hoverable" onClick={this.down} aria-hidden="true"></i>
			</div>
		);
  }
}

export default Carousel;
