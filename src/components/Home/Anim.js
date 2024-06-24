/*import React, { useRef, useEffect } from 'react';

const ScrollControlledVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        video.pause();
       
        const documentHeight = document.documentElement.scrollHeight;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollFraction = scrollTop / documentHeight;
            const videoTime = (scrollFraction * video.duration);

            video.currentTime = videoTime;
            //video.pause();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{marginBottom:"140%",position:"sticky",top:"0",zIndex:"999",display:"none"}}>
        <div className="scroll-controlled-video">
            <video id="background-video" ref={videoRef} className="video-background" muted autoPlay loop>
                <source src="/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='cover-text d-flex flex-column justify-content-center'>
            <div className="newtitle"  >

<h2 style={{color:"white"}}> Elite Technologie</h2>

</div>
<p className="home-about-body">
Experience the pinnacle of innovation with our elite technology, seamlessly integrating advanced features 
such as health monitoring, GPS, e-SIM, buzzer, and enhanced security. Elevate your watch to new heights of sophistication and performance 
with our smart buckle, offering a comprehensive suite of functionalities designed to meet your every need.
    </p>
            </div>
           
        </div>
         </div>
    );
};

export default ScrollControlledVideo;
*/

import React from 'react';
import { Row, Col } from "react-bootstrap";

import vid from "../../Assets/anim.mp4";

const Section = () => {

  
  return (

    <div className="anim" >
         <div className="backvideo">
                <video autoPlay loop muted className="video" width="100%" controls={false}>
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
    
    </div>
  );
};

export default Section;
