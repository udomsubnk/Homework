import React, { Component } from 'react';
import Carousel from './Carousel';
import $ from 'jquery';

class Landing extends Component {
  render() {
  	const viewmore = function(){
  		$('html, body').animate({
	        scrollTop: ($(".Detail").offset().top -30 )
	    }, 1000);
  	}
    return (
      <div className="Landing">
	        <img src="/images/logo.png" className="logo" alt=""/>
	      	<div className="landing-content content-block flexbox flex-center">
		        <h1 className="font-200 font-3rem">ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์</h1>
		        <h2 className="font-2rem">โครงการ Young Webmaster Camp 15</h2>
		        <Carousel></Carousel>
		        <div className="down-button" onClick={ viewmore }>
							<p className="color-e2e2e2">ดูรายละเอียดทั้งหมด</p>
							<i className="fa fa-chevron-down font-2rem color-e2e2e2 hoverable" aria-hidden="true"></i>
		        </div>
	        </div>
      </div>
    );
  }
}

export default Landing;
