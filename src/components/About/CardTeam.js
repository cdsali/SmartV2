import React from 'react';
import { Col } from 'react-bootstrap';


const TeamMember = ({ image, name, role }) => {
  
  return (
    <Col md={2} xs={4} className="d-flex flex-column justify-content-center align-items-center text-center">
      <img src={require(`../../Assets/team/${image}`)} alt={name} className=" rounded-circle mb-3" />
      <h5>{name}</h5>
      <p className="text-muted">{role}</p>
    </Col>
  );
};

export default TeamMember;
