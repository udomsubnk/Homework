import React, { Component } from 'react';
import * as firebase from 'firebase';
import $ from 'jquery';

class Board extends Component {
	config = {
	  apiKey: "AIzaSyCe1Ob0ZCwBlZF2BFMceRWnxIimL511NJE",
	  authDomain: "ywchomework-95d78.firebaseapp.com",
	  databaseURL: "https://ywchomework-95d78.firebaseio.com",
	  projectId: "ywchomework-95d78",
	  storageBucket: "",
	  messagingSenderId: "985406016798"
	};
	constructor(props) {
		super(props);

    this.push = this.push.bind(this);
    // this.config = this.config.bind(this);
	}
	push = function(){
		firebase.initializeApp(this.config);
		  firebase.database().ref('posts/').push({
		    name: $('input[name="name"]').val(),
		    content: $('input[name="content"]').val()
		});
	}
  render() {
    return (
			<div className="Board">
				<input type="text" name="name"/>
				<input type="text" name="content"/>
				<button onClick={ this.push }></button>
			</div>
    );
  }
}

export default Board;
