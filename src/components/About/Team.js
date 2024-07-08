import React from 'react';
import { Row } from "react-bootstrap";
import CardTeam from "./CardTeam";

const Section = () => {
  const lists = [
    {
      "name": "Samy Benbahmed",
      "image": "samy-team.jpg",
      "title": "Chief operating officer"
    },
    {
      "name": "Mohamed Azzi",
      "image": "azzi-team.jpg",
      "title": "Chief Business Development Officer"
    },
    
    {
      "name": "Adnan Rebba",
      "image": "reba-team.jpg",
      "title": "Chief Executive Officer"
    },
   
    {
      "name": "Hind Daoudi",
      "image": "hinde-team.jpg",
      "title": "HR Manager"
    },
   
    {
      "name": "Tebbani Nassim",
      "image": "nassim-team.jpg",
      "title": "Graphic Designer"
    },
   
    {
      "name": "Moundhir Bachene",
      "image": "moundhir-team.jpg",
      "title": "Software Engineer"
    },
    {
      "name": "Amine Aissiou",
      "image": "amine-team.jpg",
      "title": "3D Designer"
    },
    {
      "name": "Amine Khir",
      "image": "khir-team.jpg",
      "title": "3D Designer"
    },
    {
      "name": "Ramzi Lazouni",
      "image": "ramzi-team.jpg",
      "title": "Software Engineer"
    },
    {
      "name": "Ali Braiki",
      "image": "random.png",
      "title": "Software Engineer"
    }
  ];

  return (
    <div className="team">
      <h1 className='titles white-color' style={{ fontSize: "3em" }}>
        Team
      </h1>
      <Row className="section-images container" style={{ left: "0", right: "0", margin: "auto" }}>
        {lists.map((member, index) => (
          <CardTeam 
            key={index}
            image={member.image}
            name={member.name}
            role={member.title}
          />
        ))}
      </Row>
    </div>
  );
};

export default Section;
