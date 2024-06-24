import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Home2 from "./Home2";

import { FaArrowRight } from "react-icons/fa6";

import lg from "../../Assets/lg.svg";
import vid from "../../Assets/banner.mp4";
import Nav from "../utils/Navbar";
function Home() {
  const redirectToExternalUrl = () => {
   
    const externalUrl = 'https://t.me/sastasmartt';
    window.open(externalUrl, '_blank'); // Opens in a new tab
   
  };

  return (
    
    <section >
      <Container fluid className="home-section" id="home">
      <Nav />
      <div className="backvideo">
                <video autoPlay loop muted className="video" width="100%" controls={false}>
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        <Container className="home-content">
          <Row>
       
            <Col md={7} className="home-header" >
         
            <h1 className="heading" style={{position:"relative"}}>
         
Dive Into The Futur 
      
              </h1>
              <h1 className="heading2" style={{position:"relative"}}>
         
              Keep Your Class
      
              </h1>
            
              <p className="banner-text" style={{ paddingTop:10 }}>
              
              Elevating luxury watches with innovative smart technology, reimagined by SastaSmart.
              </p>
              
              <div className="buttons">
             
              <Row>
              <Col md={6}>
          
        <button className="explore" onClick={redirectToExternalUrl}>
        
                      TELEGRAM <FaArrowRight />
                     
        </button>
       
        </Col>
        
</Row>
      
    </div>

   
            </Col>

           
           
          </Row>
         
        
          <img src={lg} className="lg">
        
                     
                     
        </img>
        </Container>

      </Container>
      
      <Home2 />
      
      

    </section>
   
  );
}

export default Home;