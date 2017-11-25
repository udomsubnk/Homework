import React, { Component } from 'react';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">  
        <div className="content-block">
	        <p className="font-200 font-2rem">การสัมภาษณ์จะจัดขึ้นในวันที่ 26 พฤศจิกายน 2560</p>
	        <p className="font-200 font-1_2rem"> ณ อาคาร ซี.พี.ทาวเวอร์ 1 (สีลม) </p>
	        <p>สิ่งที่ต้องเตรียมมาในวันสัมภาษณ์
1. บัตรประชาชนสำหรับการแลกบัตรเข้าอาคาร ซี.พี.ทาวเวอร์ 1 (สีลม) และ บัตรนักศึกษาสำหรับการลงทะเบียนสัมภาษณ์ กรุณาแต่งกายด้วยชุดนักศึกษา
2. การบ้านและสิ่งที่กรรมการสาขากำหนดไว้ กรุณาอ่านรายละเอียดการบ้านและสิ่งที่กรรมการให้เตรียมมาให้ครบถ้วน หากสาขาใดต้องใช้โน้ตบุ๊ค ควรชาร์ตแบตเตอรี่และเตรียมอินเทอร์เน็ตส่วนตัวมาให้พร้อม เนื่องจากสถานที่ไม่มีบริการอินเทอร์เน็ตให้ใช้
3. Portfolio สามารถนำมาประกอบการสัมภาษณ์ได้ สำหรับน้อง ๆ สาขาดีไซน์จะต้องนำ Portfolio มาด้วยทุกคน</p>
        	<div className="row">
        		<div className="col-sm-12 col-md-7">
	        		การเดินทางมาสัมภาษณ์
	        		1. ด้วยรถไฟฟ้า BTS สามารถลงสถานีศาลาแดง ณ ทางออกที่ 2
	        		2. ด้วยรถไฟฟ้า MRT สามารถลงสถานีสีลม ณ ทางออกที่ 2 โดยเดินเรียบทางเท้าไปตามถนนสีลม
	        		3. ด้วยรถประจำทาง สามารถขึ้นใช้บริการสาย 15, 77, 155, 504, 177, 76
        		</div>
        		<div className="col-sm-12 col-md-5">
		        	<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.4103514176163!2d100.53099567676128!3d13.727515560075432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2c6097395d%3A0x53a7db086a3d0191!2z4Lit4Liy4LiE4Liy4Lij4LiL4Li1LuC4nuC4tS7guJfguLLguKfguYDguKfguK3guKPguYwg4LmB4LiC4Lin4LiHIOC4quC4teC4peC4oSDguYDguILguJUg4Lia4Liy4LiH4Lij4Lix4LiBIOC4geC4o-C4uOC4h-C5gOC4l-C4nuC4oeC4q-C4suC4meC4hOC4oyAxMDUwMA!5e0!3m2!1sth!2sth!4v1511597029437" frameBorder="0" allowFullScreen></iframe>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default Detail;
