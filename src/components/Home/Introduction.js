import React, { useRef, useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";



import Gal from "./Why";

import met from "../../Assets/met.svg";
const Section = () => {

  
  return (
    <Row className="section-images container  introduction" >
     
      <Col md={8}  className="ord2">
      
          <Gal />
        
      </Col>
      <Col md={4} className="d-flex flex-column justify-content-center ord1">
       
      <div className="newtitle">
    <h5>INTRODUCING</h5>
    <h2>Sastasmart</h2>
    <img src={met} alt="Met SVG" className="metreg" />


</div>

     
        
        <p className="home-about-body white-color">
        Dive into an exclusive collection of watches, each enhanced with connected buckles. Every model combines the timeless elegance
         of traditional watchmaking with the sophistication of modern technology. Explore various designs and find the one that
          perfectly matches your style and needs.
        </p>
      </Col>
    </Row>
  );
};

export default Section;
