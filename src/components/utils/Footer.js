import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/logo2.png";
import {
  AiFillGithub,


} from "react-icons/ai";
import { FaTiktok, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid style={{padding:"0"}}>
   <footer id="footer" className="footer_area section_padding_130_0" >
  
    <div className="row">
      {/* Single Widget*/}
      <div className="col-12 col-sm-5 col-lg-3" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px'}}>
        <img src={logo} alt="Logo" />
      </div>
      {/* Single Widget*/}
      <div className="col-12 col-sm-2 col-lg-2">
        <div className="single-footer-widget section_padding_0_130">
          {/* Widget Title*/}
          
          {/* Footer Menu*/}
          <div className="footer_menu">
            <ul>
            <li><a href="#"><h5 className="widget-title">Go To</h5></a></li>
              <li><a href="#">Pitchdeck</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="#product">Products</a></li>
             
            </ul>
          </div>
        </div>
      </div>
      {/* Single Widget*/}
      <div className="col-12 col-sm-2 col-lg-2">
        <div className="single-footer-widget section_padding_0_130">
          {/* Widget Title*/}
          
          {/* Footer Menu*/}
          <div className="footer_menu">
            <ul>
              <li><a href="privacy"><h5 className="widget-title">About us</h5></a></li>
              <li><a href="terms">Terms &amp; Conditions</a></li>
              <li><a href="kyc">KYC</a></li>
              <li><a href="aml">AML</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-2 col-lg-2">
        <div className="single-footer-widget section_padding_0_130">
          {/* Widget Title*/}
          {/* Footer Menu*/}
          <div className="footer_menu">
            <ul>
            <li><a href="privacy"><h5 className="widget-title">Values</h5></a></li>
              <li><a href="terms">Integrity</a></li>
              <li><a href="kyc">Innovation</a></li>
              <li><a href="aml">Teamwork</a></li>
              
           
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-3 col-lg-2">
        <div className="single-footer-widget section_padding_0_130">
          {/* Footer Logo*/}
         
          {/* Copywrite Text*/}
          {/* Footer Social Area*/}
          <div className="footer_social_area">
          <a href="https://www.instagram.com/sasta.smart" data-toggle="tooltip" data-placement="top" title="instgram" data-original-title="instgram"><FaInstagram   /></a>
            <a href="https://www.facebook.com/profile.php?id=61559947952416" data-toggle="tooltip" data-placement="top" title="facebook" data-original-title="facebook"><FaFacebook   /></a>
            <a href="https://www.youtube.com/channel/UCWdIZjIw748anTOVbR94F_w" data-toggle="tooltip" data-placement="top" title="youtube" data-original-title="youtube"><FaYoutube   /></a>
            <a href=" https://www.tiktok.com/@sasta.smart" data-toggle="tooltip" data-placement="top" title="tiktok" data-original-title="tiktok"><FaTiktok   /></a>
            <a href="https://x.com/sasta_smart" data-toggle="tooltip" data-placement="top" title="twitter" data-original-title="twitter"><FaTwitter   /></a>
            
            

          </div>
        </div>
      </div>
      <div className="col-12 mt-2" style={{textAlign: 'center', position: 'relative', paddingTop: '50px'}}>
        {/* Widget Title*/}
        {/* Footer Menu*/}
        <h5 style={{bottom: 0, left: 0, right: 0, marginBottom: '0px', fontSize: '12px', fontWeight: 200,color:"rgba(255,255,255,0.7)"}}>©copyrights sastanaqqam {year}</h5>
      </div>
    </div>
  
</footer>


    </Container>
  );
}

export default Footer;
