import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

import Faq from "react-faq-component";
import './faq.css';

const data = {
    title: "",
    rows: [
        {
            title: "What is SastaSmart?",
            content: `SastaSmart transforms your classic watches into smartwatches with our innovative smart buckle, providing modern features without compromising traditional style.`,
        },
        {
            title: "How does the SastaSmart smart buckle work?",
            content:
                "The smart buckle integrates an IoT chip into your watch strap, connecting to a mobile app to offer features like health tracking and notifications.",
        },
        {
            title: "What are the benefits of the smart buckle?",
            content: `You get advanced features such as fitness tracking, GPS location, and e-SIM connectivity while keeping your traditional watch.`,
        },
        {
            title: "Is the smart buckle compatible with all watches?",
            content: "Our smart buckles are designed to fit most classic watches. How do I install and use the SastaSmart smart buckle? Installing the smart buckle is easy. Simply replace your current buckle with our smart buckle and download the SastaSmart app. Follow the instructions to sync your watch and start enjoying its connected features.",
        }
    ],
};

const styles = {
     bgColor: '#000816',
    titleTextColor: "white",
    rowTitleColor: "white",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
     animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function Fq() {

    return (
        <div className="faq">
        <Row  style={{left:"0",right:"0",margin:"auto"}} >
     

        <Col md={3}  className=" faqbg ">
        
      
  
        </Col>
        <Col md={8}  className="d-flex flex-column justify-content-center ord2 faqqst">
        <div className="newtitle">
    
    <h2>FAQ</h2>
    <svg id="Layer_2" data-name="Layer 2" viewBox="0 0 154.2 74.3" xmlns="http://www.w3.org/2000/svg" className="metreg">
        <defs>
            <style>
                {`.cls-1 {
                    fill: #fff;
                    stroke-width: 0px;
                }`}
            </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
            <path className="cls-1" d="M152.74,9.91h-19.7s-6.42-9.32-6.42-9.32c-.31-.44-.84-.67-1.37-.58-.53.09-.96.48-1.11,1l-2.43,8.89-.76,2.78-4.09,14.95-4.71-14.95-.88-2.78-1.26-3.99c-.19-.61-.76-1-1.4-.97-.63.03-1.16.5-1.28,1.12l-.75,3.84-.54,2.78-9.85,50.09-4-50.09-.09-1.1c-.08-.95-.87-1.68-1.82-1.68H0v2.78h88.26c.63,0,1.16.49,1.21,1.12l4.74,59.22c.06.69.61,1.23,1.3,1.28h.08c.66,0,1.23-.47,1.36-1.12l11.9-60.5h.38l6.39,20.28c.19.59.69.97,1.35.97.61-.01,1.15-.43,1.31-1.02l5.54-20.23.76-2.78,1.45-5.29,3.65,5.29,1.5,2.18c.26.37.68.6,1.13.6h20.5c.84,0,1.51-.75,1.37-1.62-.11-.68-.75-1.16-1.44-1.16Z"/>
        </g>
    </svg>
</div>
        <Faq
                data={data}
                styles={styles}
                config={config}
            />
       
        </Col>
      </Row>
      </div>
          
       
        
    );
}