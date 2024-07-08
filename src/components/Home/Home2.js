import {React } from "react";
import { Container, Row, Col } from "react-bootstrap";


import Intro from "./Introduction";
import How from "./How";

/*import Cards from "./CardsCollection";*/


import FAQ from "../FAQ/Faq";



import vid from "../../Assets/v2.mp4";








import Elite from "./Elite";


import Brand from "./Brand";

import Product from "./Product";
import Exude from "./Exude";

import Watch from "./Watch";
function Home2() {
  


  return (
    <Container fluid className="home-about-section" id="about" >
      

      <Container >
      <Intro />
      <div className="container" style={{position:"relative"}}>
      <div className="video-under" >
      <video className="video" width="100%" autoPlay loop muted playsInline>
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
         </div></div>
         <Exude />
         <Product />
         <Elite />
         <Brand />
      </Container>
      
      <How />
      <Watch />
      

     
      
     


  




<FAQ />



      
    
    


    </Container>
  );
}
export default Home2;
