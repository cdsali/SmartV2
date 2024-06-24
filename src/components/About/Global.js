import {React } from "react";
import { Container, Row, Col } from "react-bootstrap";


import Vision from "./Vision";
import Team from "./Team";
import Partner from "./Partner";
function Home2() {
  


  return (
    <Container fluid className="home-about-section"  >
      

      <Vision />
      <Team />
      <Partner />
    
    


    </Container>
  );
}
export default Home2;
