import React from 'react';
import { Row, Col } from "react-bootstrap";

import vid from "../../Assets/video.webm";

const Section = () => {

  
  return (

    <div className="elite" >
         <div className="backvideo">
                <video autoPlay loop muted className="video" width="100%" controls={false}>
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
    <Row className="section-images container " style={{left:"0",right:"0",margin:"auto"}} >
     

      <Col md={5}  className="d-flex flex-column justify-content-center ">
      
      <div className="newtitle"  >

    <h2 style={{color:"white"}}> Elite Technologie</h2>
 
</div>
<p className="home-about-body">
Experience the pinnacle of innovation with our elite technology, seamlessly integrating advanced features 
such as health monitoring, GPS, e-SIM, buzzer, and enhanced security. Elevate your watch to new heights of sophistication and performance 
with our smart buckle, offering a comprehensive suite of functionalities designed to meet your every need.
        </p>

     

        
      </Col>
      <Col md={7}  className="ord2">
     
     
      </Col>
    </Row>
    </div>
  );
};

export default Section;
