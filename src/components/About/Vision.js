import React from 'react';
import { Row, Col } from "react-bootstrap";
import { RiH2 } from 'react-icons/ri';



const Section = () => {

  
  return (

    <div className="vision" >
        <h1 className='titles' style={{ fontSize: "3em"}}>
        Our Vision
        </h1>
    <Row className="section-images container " style={{left:"0",right:"0",margin:"auto"}} >
     

      <Col md={6} className="d-flex flex-column justify-content-center" >
      
      <div className="cardvision">
      <h2 className='titles' style={{ fontSize: "2.1em"}}>
      Business
        </h2>
<p className="home-about-body ">

Sastasmart drives economic growth through cutting-edge Iot technology, turning classic watches into connected devices. We set new standards for talent and entreprise, fostering a sustainable economy.
        </p>

        </div>

        
      </Col>
      <Col md={6} className="d-flex flex-column justify-content-center" >
      <div className="cardvision">
      <h2 className='titles' style={{ fontSize: "2.1em"}}>
      Livability
        </h2>
      <p className="home-about-body ">
      
      Our smart buckles enhance daily life with advanced health monitoring and connectivity, upgrading traditional watches with
modern functionalities while
preserving their timeless appeal.
        </p>
        </div>
      </Col>
    </Row>
    </div>
  );
};

export default Section;
