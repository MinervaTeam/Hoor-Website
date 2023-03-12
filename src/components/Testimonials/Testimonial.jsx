import React from "react";
import "./Testimonial.css";
import profilePic1 from "../../img/raha.jpeg";


const Testimonial = () => {

  return (
    
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>با اعتماد شما به ما نهایت سعی خود را میکنیم که </span>
        <span>بهترین کارها را </span>
        <span>عرضه کنیم</span>
      </div>

      <div className="testimonial">
      <img src={profilePic1} />
      <span>من رها محقق زاده هستم.20 ساله و حدود یک ساله پیوسته و با عشق در حوزه شیرینی پزی فعالیت میکنم. دارای چند مدرک در زمینه شیرینی و کیک پزی هستم. به تازگی کسب و کار خودم رو تحت عنوان هور راه اندازی کردم. امید و هدفم این است که بتونم با نهایت اشتیاق و ذوق هنری بهترین کارها رو عرضه کنم</span>
      </div>
    </div>  

  );
};

export default Testimonial;
