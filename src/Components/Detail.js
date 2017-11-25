import React, { Component } from 'react';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">  
        <div className="content-block font-1_2rem">
	        <p className="font-200 font-2rem">การสัมภาษณ์จะจัดขึ้นในวันที่ 26 พฤศจิกายน 2560</p>
	        <p className="font-200 font-2rem"> ณ อาคาร ซี.พี.ทาวเวอร์ 1 (สีลม) </p>
	        <div className="text-left">
		        <p className="detail-header">สิ่งที่ต้องเตรียมมาในวันสัมภาษณ์</p>
		        <p><span className="emphasize">1. <u>บัตรประชาชน</u></span>สำหรับการแลกบัตรเข้าอาคาร ซี.พี.ทาวเวอร์ 1 (สีลม) และ <span className="emphasize"><u>บัตรนักศึกษา</u></span>สำหรับการลงทะเบียนสัมภาษณ์ กรุณาแต่งกายด้วยชุดนักศึกษา</p>
						<p><span className="emphasize">2. <u>การบ้านและสิ่งที่กรรมการสาขากำหนดไว</u></span>้ กรุณาอ่านรายละเอียดการบ้านและสิ่งที่กรรมการให้เตรียมมาให้ครบถ้วน หากสาขาใดต้องใช้โน้ตบุ๊ค ควรชาร์ตแบตเตอรี่และเตรียมอินเทอร์เน็ตส่วนตัวมาให้พร้อม เนื่องจากสถานที่ไม่มีบริการอินเทอร์เน็ตให้ใช้</p>
						<p><span className="emphasize">3. <u>Portfolio</u></span> สามารถนำมาประกอบการสัมภาษณ์ได้ สำหรับน้อง ๆ สาขาดีไซน์จะต้องนำ Portfolio มาด้วยทุกคน</p>
					</div>
        	<div className="row">
        		<div className="col-sm-12 col-md-7 text-left">
	        		<p className="detail-header">การเดินทางมาสัมภาษณ์</p>
	        		<p><span className="emphasize">1.</span> ด้วยรถไฟฟ้า <span className="green">BTS</span> สามารถลงสถานีศาลาแดง ณ ทางออกที่ 2</p>
	        		<p><span className="emphasize">2.</span> ด้วยรถไฟฟ้า <span className="blue">MRT</span> สามารถลงสถานีสีลม ณ ทางออกที่ 2 โดยเดินเรียบทางเท้าไปตามถนนสีลม</p>
		        	<p><span className="emphasize">3.</span> ด้วยรถประจำทาง สามารถขึ้นใช้บริการสาย 15, 77, 155, 504, 177, 76</p>
        		</div>
        		<div className="col-sm-12 col-md-5">
		        	<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.4103514176163!2d100.53099567676128!3d13.727515560075432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2c6097395d%3A0x53a7db086a3d0191!2z4Lit4Liy4LiE4Liy4Lij4LiL4Li1LuC4nuC4tS7guJfguLLguKfguYDguKfguK3guKPguYwg4LmB4LiC4Lin4LiHIOC4quC4teC4peC4oSDguYDguILguJUg4Lia4Liy4LiH4Lij4Lix4LiBIOC4geC4o-C4uOC4h-C5gOC4l-C4nuC4oeC4q-C4suC4meC4hOC4oyAxMDUwMA!5e0!3m2!1sth!2sth!4v1511597029437" frameBorder="0" allowFullScreen></iframe>
		        	<p className="alt">อาคาร ซี.พี.ทาวเวอร์ 1 (สีลม)</p>
        		</div>
        	</div>
        	<div className="row contact">
				<div className="col-sm-12 col-md-7">
					<p className="emphasize">หมายเหตุ</p>
					<p>
						สำหรับน้อง ๆ ที่ไม่สะดวกเดินทางมาสัมภาษณ์ที่อาคาร CP Tower สีลม ให้ 
						 <a href="https://www.facebook.com/messages/t/179319488780193"> <u>Inbox มาทางเพจเฟสบุ๊ค Young Webmaster Camp</u></a> 
					</p>
					<p>ภายในวันที่ 20 พฤศจิกายน 2560</p>
				</div>
				<div className="col-sm-12 col-md-5">
					<p className="emphasize">สอบถามเพิ่มเติมติดต่อ</p>
					<p><span className="emphasize">พี่เบ๊บ:</span> 064-174-7080</p>
					<p><span className="emphasize">พี่ฟง:</span> 092-458-7067</p>
					<p><span className="emphasize">พี่เบนซ์:</span> 085-666-7571</p>
				</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default Detail;
