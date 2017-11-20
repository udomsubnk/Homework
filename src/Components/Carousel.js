import React, { Component } from 'react';
import data from '../Assets/data';

class Carousel extends Component {
	componentWillMount(){

	}
	constructor(props) {
	    super(props);
	    console.log(data);
	    this.state = {
	    	crsFirst: "",
	    	crsSecond: "",
	    	crsThird: data[0].firstName,
	    	crsFourth: data[1].firstName,
	    	crsFifth: data[2].firstName
	    };
	}
	up = function(e){
		e.preventDefault();
		
	}
	down = function(e){
		e.preventDefault();
		alert('down');
	}
	render() {
		return (
			<div>
				<div id="carousel">
					<div className="carousel-item crs-first">{this.state.crsFirst}</div>
					<div className="carousel-item crs-second">{this.state.crsSecond}</div>
					<div className="carousel-item crs-third">{this.state.crsThird}</div>
					<div className="carousel-item crs-fourth">{this.state.crsFourth}</div>
					<div className="carousel-item crs-fifth">{this.state.crsFifth}</div>
				</div>
				<button onClick={this.up}>Up</button>
				<button onClick={this.down}>Down</button>
			</div>
		);
  }
}

export default Carousel;
