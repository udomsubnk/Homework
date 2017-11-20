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
	    	count: 0,
				crsFirst: "",
				crsSecond: "",
	    };
	    this.state.crsThird = data[this.state.count].firstName;
	    this.state.crsFourth = data[this.state.count+1].firstName;
	    this.state.crsFifth = data[this.state.count+2].firstName;

	    this.up = this.up.bind(this);
	    this.down = this.down.bind(this);
	}
	up = function(e){
		e.preventDefault();
		this.setState((prevState) => {
			if( this.state.count -3 >= 0 ){
				return {
						count: prevState.count - 1,
				  	crsFifth: prevState.crsFourth,
				  	crsFourth: prevState.crsThird,
				  	crsThird: prevState.crsSecond,
				  	crsSecond: prevState.crsFirst,
				  	crsFirst: data[this.state.count-2].firstName
			  }
			}else if( this.state.count -3 >= -2 ){
				return {
						count: prevState.count - 1,
				  	crsFifth: prevState.crsFourth,
				  	crsFourth: prevState.crsThird,
				  	crsThird: prevState.crsSecond,
				  	crsSecond: prevState.crsFirst,
				  	crsFirst: ""
			  }
			}
		});
	}
	down = function(e){
		e.preventDefault();
		if( this.state.count + 3 <= data.length ){
			this.setState((prevState) => {
				return {
						count: prevState.count + 1,
				  	crsFirst: prevState.crsSecond,
				  	crsSecond: prevState.crsThird,
				  	crsThird: prevState.crsFourth,
				  	crsFourth: prevState.crsFifth,
				  	crsFifth: data[this.state.count+2].firstName
				  }
			});
		}else if( this.state.count + 3 === data.length + 1 || this.state.count + 3 === data.length + 2){
			this.setState((prevState) => {
				return {
						count: prevState.count + 1,
				  	crsFirst: prevState.crsSecond,
				  	crsSecond: prevState.crsThird,
				  	crsThird: prevState.crsFourth,
				  	crsFourth: prevState.crsFifth,
				  	crsFifth: ""
				  }
			});
		}
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
