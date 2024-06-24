import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logodark from "../../Assets/logo3.png";
import logowhite from "../../Assets/logo2.png";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
import { MdPhonelinkRing } from "react-icons/md";
import { BsWatch } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";

function NavBar({paget}) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

 
  function scrollHandler() {
    if (window.scrollY >= 120) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }

    // Show "Return to Top" button when scrolled down
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
   
    const navCollapse = document.querySelector('.navbar-collapse');
    const navbar = document.querySelector('.navbar');

    function updateNavbarColor() {
      if (navCollapse.classList.contains('show')) {
        navbar.style.backgroundColor = '#020f26'; // Change to your desired color
      } else {
        navbar.style.backgroundColor = 'transparent'; // Change to your default color
      }
    }

    updateNavbarColor();
  

    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
      navbarToggler.addEventListener('transitionend', updateNavbarColor);
  }


    return () => {
      window.removeEventListener("scroll", scrollHandler);
      navbarToggler.removeEventListener('transitionend', updateNavbarColor);
    };



  }, []);

  const scrollTo = (id) => {
    const Section = document.getElementById(id);
    if (Section) {
      Section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const redirectToExternalUrl = () => {
    // Replace 'https://www.example.com' with your desired external URL
    const externalUrl = 'https://www.example.com';
    window.open(externalUrl, '_blank'); // Opens in a new tab
    // OR you can redirect in the same tab using:
    // window.location.href = externalUrl;
  };

  const openLocalPdf = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/pitch.pdf`;
    window.open(pdfUrl, '_blank'); // Opens the PDF in a new tab
  };


  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
        
      >
        <Container style={{ paddingLeft: 0 }}>
        <Navbar.Brand href="/" className="d-flex">
            <img src={paget=="1" ? logodark: logowhite} className="logo2" alt="brand" />
          </Navbar.Brand>
        <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
            
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home"  style={{left:"0",right:"0",margin:"auto",paddingTop:"20px"}}>
            <Nav.Item>
  <Nav.Link
    as={Link}
    to="#howit"
    onClick={(e) => {
      e.preventDefault();
      scrollTo("howit");  // Update to scroll to 'product' id
      updateExpanded(false);
    }}
    className={navColour ? "navblue" : "navwhite"}
  >
    HOW IT WORKS
  </Nav.Link>
</Nav.Item>
              <Nav.Item>
  <Nav.Link
    as={Link}
    to="#product"
    onClick={(e) => {
      e.preventDefault();
      scrollTo("product");  // Update to scroll to 'product' id
      updateExpanded(false);
    }}
    className={navColour ? "navblue" : "navwhite"}
  >
    COLLECTIONS
  </Nav.Link>
</Nav.Item>


              <Nav.Item className="item-logo">
                
              <Navbar.Brand href="/" className="d-flex">
            <img src={paget=="1" ? logodark: logowhite} className="logo" alt="brand" />
          </Navbar.Brand>
          
          </Nav.Item>
              


              <Nav.Item>
                <Nav.Link as={Link} to="/about"   className={navColour ? "navblue" : "navwhite"}>
                   ABOUT US
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="#contactus"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("contactus");
                    updateExpanded(false);
                  }}
                  className={navColour ? "navblue" : "navwhite"}
                >
                  
                  CONTACT
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <button className="pitch" onClick={openLocalPdf}>Pitch Deck</button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          <IoIosArrowUp   style={{fontSize:"32px"}} />
        </button>
      )}
    </>
  );
}

export default NavBar;
