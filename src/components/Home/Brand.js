

import React, { useRef, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import vid from "../../Assets/brand2.mp4";
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
    <div className="brand mg-between" id="brand" ref={ref}>
      
      <Row className="section-images container" style={{ left: "0", right: "0", margin: "auto" }}>
      <Col md={6} className="d-flex flex-column justify-content-center ord1 pd-text-right" >
      <div className="newtitle">
            <h2 className='white-color'>Tailored enhanced for luxury watch brand</h2>
          </div>
          <p className="home-about-body white-color">
            Experience the pinnacle of innovation with our elite technology, seamlessly integrating advanced features 
            such as health monitoring, GPS, e-SIM, buzzer, and enhanced security. Elevate your watch to new heights of sophistication and performance 
            with our smart buckle, offering a comprehensive suite of functionalities designed to meet your every need.
          </p>
         
        </Col>
        <Col md={6} className="ord2 d-flex flex-column justify-content-center on" >
          <div className="video-wrapper" data-aos="zoom-in">
            <video autoPlay loop muted playsInline className="video" width="100%">
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
      
      </Row>
    </div>
  );
};

export default Section;
