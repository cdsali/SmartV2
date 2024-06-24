import React, { useRef, useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";



import Gal from "./Why";

const Section = () => {

  
  return (
    <Row className="section-images" >
     
      <Col md={8}  className="ord2">
      
          <Gal />
        
      </Col>
      <Col md={4} className="d-flex flex-column justify-content-center ord1">
       
      <div className="newtitle">
    <h5>INTRODUCING</h5>
    <h2>Sastasmart</h2>
    <svg id="Layer_2" data-name="Layer 2" viewBox="0 0 154.2 74.3" xmlns="http://www.w3.org/2000/svg" className="metreg">
        <defs>
            <style>
                {`.cls-1 {
                    fill: #d6ad60;
                    stroke-width: 0px;
                }`}
            </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
            <path className="cls-1" d="M152.74,9.91h-19.7s-6.42-9.32-6.42-9.32c-.31-.44-.84-.67-1.37-.58-.53.09-.96.48-1.11,1l-2.43,8.89-.76,2.78-4.09,14.95-4.71-14.95-.88-2.78-1.26-3.99c-.19-.61-.76-1-1.4-.97-.63.03-1.16.5-1.28,1.12l-.75,3.84-.54,2.78-9.85,50.09-4-50.09-.09-1.1c-.08-.95-.87-1.68-1.82-1.68H0v2.78h88.26c.63,0,1.16.49,1.21,1.12l4.74,59.22c.06.69.61,1.23,1.3,1.28h.08c.66,0,1.23-.47,1.36-1.12l11.9-60.5h.38l6.39,20.28c.19.59.69.97,1.35.97.61-.01,1.15-.43,1.31-1.02l5.54-20.23.76-2.78,1.45-5.29,3.65,5.29,1.5,2.18c.26.37.68.6,1.13.6h20.5c.84,0,1.51-.75,1.37-1.62-.11-.68-.75-1.16-1.44-1.16Z"/>
        </g>
    </svg>
</div>

     
        
        <p className="home-about-body">
        Dive into an exclusive collection of watches, each enhanced with connected buckles. Every model combines the timeless elegance
         of traditional watchmaking with the sophistication of modern technology. Explore various designs and find the one that
          perfectly matches your style and needs.
        </p>
      </Col>
    </Row>
  );
};

export default Section;
