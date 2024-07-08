import React, { useRef, useState } from 'react';
import { Row, Col } from "react-bootstrap";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import img from "../../Assets/product3.png";
import img2 from "../../Assets/product2.png";
import img1 from "../../Assets/product1.png";
import img4 from "../../Assets/product4.png";
import img5 from "../../Assets/product5.png";
import img6 from "../../Assets/product6.png";
const Section = () => {

    const [swiperRef, setSwiperRef] = useState(null);
  return (

    <div className="product mg-between" id="product">
         
    <Row className="section-images container"  >
     

      <Col md={12}  >
      
      <div className="product-head"  >
      <div className="newtitle"  >

<h2 >Products</h2>

</div>
<p className="home-about-body subt white-color" >
Adding brainpower to your watch has never been more stylish.
    </p>
    </div>
        <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={60}
      initialSlide={1}
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
           
      <SwiperSlide className='d-flex flex-column justify-content-center'>
        <img src={img1} className="imagep" alt="slide image" />
        <div className="slide-hover">
        <h4>
        KRONOVA
        </h4>
<p className="home-about-body ">
Equipped with health
monitoring and buzzer features, ensuring you stay informed and safe with every step.
        </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} className="imagep" alt="slide image" />
        <div className="slide-hover">
        <h4>
        TERAPIA
        </h4>
<p className="home-about-body ">
Equipped with health monitoring and buzzer features , with a pinch of style. Comfort and ease in every Wear
        </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} className="imagep" alt="slide image" />
        <div className="slide-hover">
        <h4>
        REETMIQ
        </h4>
<p className="home-about-body ">
Features health monitoring, a buzzer, and GPS, providing comprehensive tracking and safety for your
active lifestyle.
        </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} className="imagep" alt="slide image" />
        <div className="slide-hover" >
        <h4>
        KDEER
        </h4>
<p className="home-about-body ">
Includes health monitoring, GPS, e-SIM, and a buzzer for optimal connectivity and safety. The e-SIM enhances connectivity and helps track your watch if lost, offering peace of mind with advanced
functionality.
        </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} className="imagep" alt="slide image" />
        <div className="slide-hover" >
        <h4>
        Mobile App
        </h4>
<p className="home-about-body ">
     Our new mobile app provide real-time GPS tracking, letting you stay connected and informed with ease and efficiency
        </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} className="imagep" alt="slide image" />
        <div className="slide-hover">
        <h4>
        Power & Class
        </h4>
<p className="home-about-body ">
Boasting a long-lasting battery that endures 5 to 8 days, and a waterproof design, ensuring
reliability in any condition.
        </p>
        </div>
      </SwiperSlide>
    </Swiper>

     

        
      </Col>
      
    </Row>
    </div>
  );
};

export default Section;
