

import React, { useRef, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import image from "../../Assets/elite.webp";
import { useInView } from "react-intersection-observer";


const Section = () => {

  

  return (
    <div className="elite mg-between" id="elite">
      
      <Row className="section-images container" style={{ left: "0", right: "0", margin: "auto" }}>
        
        <Col md={6} className="ord2 d-flex flex-column justify-content-center on" >
        <img 
    
    src={image}
    
    alt="image elite"
    style={{width:"100%",height:"auto"}}
    data-aos="fade-up"
  />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center ord1 pd-text-left">
        <div className="newtitle">
            <h2 className='white-color'> Elite Technologie</h2>
          </div>
          <p className="home-about-body white-color">
            Experience the pinnacle of innovation with our elite technology, seamlessly integrating advanced features 
            such as health monitoring, GPS, e-SIM, buzzer, and enhanced security. Elevate your watch to new heights of sophistication and performance 
            with our smart buckle, offering a comprehensive suite of functionalities designed to meet your every need.
          </p>
         
        </Col>
      </Row>
    </div>
  );
};

export default Section;
