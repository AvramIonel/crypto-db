import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <Container fluid>
      <Navbar expand="md" variant="dark" bg="dark" fixed="bottom">
        <Nav className="icons-position">
          <Navbar.Brand href="https://www.coingecko.com/api/documentations/v3#/">
            <FontAwesomeIcon icon={faDatabase} size="1x" />
          </Navbar.Brand>
          <Navbar.Brand href="https://github.com/AvramIonel/crypto-db">
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </Navbar.Brand>
          <Navbar.Brand href="https://www.linkedin.com/in/ionel-florin-avram-94a2715b">
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </Navbar.Brand>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Footer;
