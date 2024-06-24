import {React } from "react";
import { Container, Row, Col } from "react-bootstrap";


import Intro from "./Introduction";
import How from "./How";

/*import Cards from "./CardsCollection";*/
import {
    AiFillGithub,
 
 
} from "react-icons/ai";

import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";


import FAQ from "../FAQ/Faq";












import Elite from "./Elite";

import Anim from "./Anim";

import Brand from "./Brand";

import Product from "./Product";

function Home2() {
  


  return (
    <Container fluid className="home-about-section" id="about" >
      

      <Container>
      <Intro />
      <div className="container" style={{position:"relative"}}>
      <div className="video-under" >
         
         </div></div>
      </Container>
      <How />
      <Elite />
      <Anim />
    

      <Brand />
      <Product />
     


  




<FAQ />



      
    
    


    </Container>
  );
}
export default Home2;
