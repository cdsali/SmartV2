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
const Section = () => {

    const [swiperRef, setSwiperRef] = useState(null);
  return (

    <div className="product" id="product">
         
    <Row className="section-images container " style={{left:"0",right:"0",margin:"auto"}} >
     

      <Col md={12}  style={{textAlign:"center"}}>
      
      <div className="product-head"  >
      <div className="newtitle"  >

<h2 >Products</h2>

</div>
<p className="home-about-body subt" >
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
    </Swiper>

     

        
      </Col>
      
    </Row>
    </div>
  );
};

export default Section;
