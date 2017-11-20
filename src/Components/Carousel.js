import React, { Component } from 'react';

class Carousel extends Component {
	constructor(props) {
	    super(props);
	    this.state = {};
	}
	up = function(e){
		e.preventDefault();
		document.getElementById("crsFirst").style.transform = "rotate(117deg)";
	}
	down = function(e){
		e.preventDefault();
		alert('down');
	}
	render() {
		return (
			<div>
				<div id="carousel">
					<div className="carousel-item crs-first" id="crsFirst">A</div>
					<div className="carousel-item crs-second" id="crsSecond">B</div>
					<div className="carousel-item crs-third" id="crsThird">C</div>
					<div className="carousel-item crs-fourth" id="crsFourth">D</div>
					<div className="carousel-item crs-fifth" id="crsFifth">E</div>
				</div>
				<button onClick={this.up}>Up</button>
				<button onClick={this.down}>Down</button>
			</div>
		);
  }
}

export default Carousel;
