import React, { useRef, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import vid from "../../Assets/brand.webm";
import { useInView } from "react-intersection-observer";

const Section = () => {
  const videoRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when 50% of the video is in view
  });

  useEffect(() => {
    const video = videoRef.current;
    video.pause(); // Start with the video paused

    const handleScroll = () => {
      if (video && inView) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / documentHeight;
        const videoTime = (scrollFraction * video.duration);

        video.currentTime = videoTime;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView]);

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play().catch(() => {
          // Handle play interruption error
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <div className="brand" ref={ref}>
      <div className="brandvideo">
        <video
          ref={videoRef}
          loop
          muted
          className="video"
          width="100%"
          controls={false}
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="overlay"></div>
      <Row className="section-images container" style={{ left: "0", right: "0", margin: "auto" }}>
        <Col md={7} className="ord2"></Col>
        <Col md={5} className="d-flex flex-column justify-content-center">
          <div className="newtitle">
            <h2>Tailored enhanced for luxury watch brand</h2>
          </div>
          <p className="home-about-body">
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
