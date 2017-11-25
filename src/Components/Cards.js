import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
	Data = [];
	cards = [];
	componentWillReceiveProps(nextProps) {
		this.Data = nextProps.data();
		this.cards = [];
  	for(let i=0;i<this.Data.length ;i++ ){
  		this.cards.push(
				<Card name={ this.Data[i].name } content={ this.Data[i].content } ></Card>
  		)
  	}
  	this.forceUpdate();
	}
  render() {
    return (
      <div className="Cards row">
      		{ this.cards }
      </div>
    );
  }
}

export default Cards;
