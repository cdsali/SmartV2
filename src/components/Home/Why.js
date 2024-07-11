import React from "react";

import vid from "../../Assets/v2.webm";

function Why() {
  return (
    <div className="why2">
      <div className="container">
        
        {/* First Item */}
        <div className="column">
          <div className="item" data-aos="zoom-in">
            <img
              src={require(`../../Assets/i1.png`)}
              className="card-text1"
              alt="Image 1"
            />
          </div>
          <div className="item" data-aos="zoom-in">
            <img
              src={require(`../../Assets/i2.png`)}
              className="card-text1"
              alt="Image 2"
            />
          </div>
        </div>
        
        {/* Second Item */}
        <div className="column">
          <div className="item" data-aos="zoom-in">
            <img
              src={require(`../../Assets/i3.png`)}
              className="card-text1"
              alt="Image 3"
            />
          </div>
          <div className="item" data-aos="zoom-in">
            <img
              src={require(`../../Assets/i4.png`)}
              className="card-text1"
              alt="Image 4"
            />
          </div>
        </div>
        
        {/* Third Item with Video */}
        <div className="column">
          <div className="item" data-aos="zoom-in">
            <video className="video" width="100%" autoPlay loop muted playsInline>
              <source src={vid} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        

      </div>
    </div>
  );
}

export default Why;
