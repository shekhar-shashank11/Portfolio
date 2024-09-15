import React from 'react';
import { Tab, Row, Col, Nav, NavDropdown, Container } from 'react-bootstrap';
import projImg1 from "../assets/Projects/portfolioImg.jpg";
import projImg2 from "../assets/Projects/MovieApp.png";
import projImg3 from "../assets/Projects/libraryMS.jpg";
import { ProjectCard } from "./ProjectCard";

function MyTabs() {
    const projects = [
        {
          title: "Portfolio",
          description: "Personalized Porfolio using ReactJS",
          imgUrl: projImg1,
          linkURL : "https://www.figma.com/community/file/1243831335878015436/graphic-designer-portfolio"
        },
        {
          title: "Movie Booking App",
          description: "Movie ticket booking app using ReactJS, ExpressJS, NodeJS, MongoDB",
          imgUrl: projImg2,
        },
        {
          title: "Library Management System",
          description: "Movie ticket booking app using ReactJS, ExpressJS, NodeJS, MongoDB",
          imgUrl: projImg3,
        },
        
    ]
  return (
    <section className="project" id="projects">
    <Tab.Container id="projects-tab" defaultActiveKey="first">
      <Row className="clearfix">
        <Col sm={10}>
        <h2>Projects</h2>
        <p>Here are some of my Projects that showcases my skills. These projects are based on Web Development</p>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content className='content-part'>
            <Tab.Pane eventKey="first" className='project-part'>
            <Container>
              <Row>
                {
                projects.map((project,index)=>{
                    return(
                        <ProjectCard key={index} {...project} />
                    )
                })
                }
                </Row>
              </Container>
              
            </Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </section>
  );
}

export default MyTabs;
