import React from 'react';
import { Row, Col } from "react-bootstrap";

import met from "../../Assets/met.svg";

const Section = () => {

  
  return (

    <div className="partner" >
       
    <Row  style={{left:"0",right:"0",margin:"auto"}} >
     

      <Col md={5} className="partnerimg " >
      
      

        
      </Col>
      <Col md={7}    className="about-text d-flex flex-column justify-content-center ">
         
           
            <div className="newtitle">
    
    <h2 >Our Partners</h2>
    <img src={met} alt="Met SVG" className="metreg" />
</div>
            
              <p className="home-about-body" style={{ textAlign: "justify",paddingTop:10,color:"black",marginTop:"30px" }}>
              
              We have forged strategic alliances with pioneers across the globe. Our partners are more than collaborators; they are integral members of our extended family, instrumental in bringing our vision to life.
              <br/><br/> With MFGMORPH and BESTRONICS, we're not just building products; we're crafting the future of elegance in the digital age.
              </p>
           

   
            </Col>
    </Row>
    </div>
  );
};

export default Section;
