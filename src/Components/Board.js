import React, { Component } from 'react';
import Cards from './Cards';
import * as firebase from 'firebase';
import $ from 'jquery';

class Board extends Component {
	postsData = [];
	componentDidMount(){
		firebase.database().ref('posts/').on('value', (snapshot) => {
			let posts = [];
			snapshot.forEach((childSnapshot) => {
				posts.push(childSnapshot.val());
			});
			this.postsData = posts;
			this.forceUpdate();
		});
	}
	constructor(props) {
		super(props);
		firebase.initializeApp(this.config);

	    this.push = this.push.bind(this);
	    this.getData = this.getData.bind(this);
	}
	config = {
	  apiKey: "AIzaSyCe1Ob0ZCwBlZF2BFMceRWnxIimL511NJE",
	  authDomain: "ywchomework-95d78.firebaseapp.com",
	  databaseURL: "https://ywchomework-95d78.firebaseio.com",
	  projectId: "ywchomework-95d78",
	  storageBucket: "",
	  messagingSenderId: "985406016798"
	};
	push = function(){
		firebase.database().ref('posts/').push({
	    name: $('input[name="name"]').val(),
	    content: $('input[name="content"]').val()
		});
	}
	getData = function(){
		return this.postsData.slice();
	}
  render() {
    return (
		<div className="Board">
			<div className="content-block">
				<h2 className="post-something">โพสต์อะไรสักหน่อยสิ..</h2>
				<Cards data={ this.getData }></Cards>
				<input type="text" name="content" className="input-card-content" placeholder="โพสอะไรสักหน่อยสิ.."/>
				<input type="text" name="name" className="input-card-name" placeholder="คุณคือใคร.."/>
				<button onClick={ this.push } className="post-btn">โพสต์</button>
			</div>
		</div>
    );
  }
}

export default Board;
