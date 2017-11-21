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
	getData = function(index){
		return data[index].firstName;
  }
  hideClass = function(index){
		return ( data[index].firstName === undefined )?'hide':'flexbox';
  }
	up = function(e){
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
	down = function(e){
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
	render() {
		return (
			<div>
				<button onClick={this.up}>Up</button>
				<div className="Carousel">
					<div className={"Carousel-item crs-first flexbox flex-center " + this.hideClass(this.state.crsFirst)}>{this.getData(this.state.crsFirst)}</div>
					<div className={"Carousel-item crs-second flexbox flex-center " + this.hideClass(this.state.crsSecond)}>{this.getData(this.state.crsSecond)}</div>
					<div className={"Carousel-item crs-third flexbox flex-center "}>{this.getData(this.state.crsThird)}</div>
					<div className={"Carousel-item crs-fourth flexbox flex-center " + this.hideClass(this.state.crsFourth)}>{this.getData(this.state.crsFourth)}</div>
					<div className={"Carousel-item crs-fifth flexbox flex-center " + this.hideClass(this.state.crsFifth)}>{this.getData(this.state.crsFifth)}</div>
				</div>
				<button onClick={this.down}>Down</button>
			</div>
		);
  }
}

export default Carousel;
