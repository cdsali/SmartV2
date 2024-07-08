import {React } from "react";
import { Container, Row, Col } from "react-bootstrap";


import Vision from "./Vision";
import Team from "./Team";
import Partner from "./Partner";
import Contact from "../Contact/Contact";
function Home2() {
  


  return (
    <Container fluid className="home-about-section"  >
      

      <Vision />
      <Team />
      <Partner />
      <Contact />
    


    </Container>
  );
}
export default Home2;
