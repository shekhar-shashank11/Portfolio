import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.svg'
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
function Footer() {
  const socials = {
    linkedin_url : "https://www.linkedin.com/in/shashank-shekhar-088828221/",
    twitter_url : "https://x.com/SHEKARSHASHANk0?t=H9NzLO4UVzicF6lfG5-DEw&s=09",
    github_url : "https://github.com/shekhar-shashank11"
  }
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={20} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={20} md={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={socials.twitter_url}><img src={twitter} alt="Icon" /></a>
              <a href={socials.linkedin_url}><img src={linkedin} alt="Icon" /></a>
              <a href={socials.github_url}><img src={github} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer