import React, { Component } from 'react';
import Carousel from './Carousel';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
	        <img src="/images/logo.png" className="logo" alt=""/>
	      	<div className="landing-content content-block flexbox flex-center">
		        <h1 className="font-200 font-3rem">ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์</h1>
		        <h2 className="font-2rem">โครงการ Young Webmaster Camp 15</h2>

		        <Carousel></Carousel>
	        </div>
      </div>
    );
  }
}

export default Landing;
