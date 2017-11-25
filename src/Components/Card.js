import React, { Component } from 'react';

class Card extends Component {
	componentWillReceiveProps(nextProps) {
    this.forceUpdate();
	}
  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <div className="Card">
          <p className="Card-content">{ this.props.content }</p>
          <p className="Card-name">..{ this.props.name }</p>
        </div>
      </div>
    );
  }
}

export default Card;
