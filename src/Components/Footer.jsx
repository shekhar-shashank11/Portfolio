import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.svg'
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
function Footer() {
  const socials = {
    linkedin_url : "https://shorturl.at/0XChk",
    twitter_url : "https://rb.gy/jhjs11",
    github_url : "https://github.com/mithalesh-mk"
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