import React from "react";
import lists from "../../Data/Why.json";

function Why() {
  return (
    <div className="why2">
      <div className="container">
        {lists.map((row, index) => (
          <div key={index} className="column">
            <div className="item" data-aos="zoom-in">
              <img
                src={require(`../../Assets/${row.image}`)}
                className="card-text1"
                alt={`Image ${index + 1}`}
              />
            </div>
            {row.image2 && (
              <div className="item" data-aos="zoom-in">
                <img
                  src={require(`../../Assets/${row.image2}`)}
                  className="card-text1"
                  alt={`Image 2 ${index + 1}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Why;
