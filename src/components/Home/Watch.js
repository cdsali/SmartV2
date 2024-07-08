

import React, { useRef, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import image from "../../Assets/watch.png";
import { useInView } from "react-intersection-observer";

const Section = () => {
  const videoRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when 50% of the video is in view
  });

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <div className="excude" id="excude" ref={ref}>
      
      <Row className="section-images container" style={{ left: "0", right: "0", margin: "auto" }}>
      <Col md={6} className="d-flex flex-column justify-content-center ord1 pd-text-right" >
      
          <p className="home-about-body white-color" style={{paddingLeft:"12px"}}>
            Experience the pinnacle of innovation with our elite technology, seamlessly integrating advanced features 
            such as health monitoring, GPS, e-SIM, buzzer, and enhanced security. Elevate your watch to new heights of sophistication and performance 
            with our smart buckle, offering a comprehensive suite of functionalities designed to meet your every need.
          </p>
         
        </Col>
        <Col md={6} className="ord2 d-flex flex-column justify-content-center">
        
          <img 
    
    src={image}
    className='bounce'
    alt="avatar"
    style={{width:"100%",height:"auto"}}
    
  />
       
        </Col>
      
      </Row>
    </div>
  );
};

export default Section;
