import React, { useRef, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import vid from "../../Assets/video.webm";
import { useInView } from "react-intersection-observer";

import met from "../../Assets/met.svg";
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
      
      <Row className="section-images container " style={{ left: "0", right: "0", margin: "auto" }}>
        <Col md={6} className="d-flex flex-column justify-content-center ord1 pd-text-right" >
          <div className="newtitle">
            <h5>Exude  </h5>
            <h2>Sophistication</h2>
            <img src={met} alt="Met SVG" className="metreg" />

          </div>
          <p className="home-about-body white-color">
          Elevate your watch with our connected buckles, merging classic craftsmanship with contemporary
           sophistication to create the perfect accessory.
          </p>
         
        </Col>
        <Col md={6} className="ord2 d-flex flex-column justify-content-center on" >
          <div className="video-wrapper " data-aos="zoom-in">
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
