import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import twitter from '../assets/twitter.svg'
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import logo from '../assets/logo.png'


function NavBar() {

  const socials = {
    linkedin_url : "https://shorturl.at/0XChk",
    twitter_url : "https://rb.gy/jhjs11",
    github_url : "https://github.com/mithalesh-mk"
  }

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return ()=> window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value)=>{
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className='main-logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'?'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'?'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'?'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
                <a href={socials.linkedin_url}> <img src={linkedin} alt="LinkedIn" /> </a>
                <a href={socials.github_url}> <img src={github} alt="GitHub" /> </a>
                <a href={socials.twitter_url}> <img src={twitter} alt="Twitter" /> </a>
            </div>
            <a href='#connect'><button className='vvd' onClick={()=>console.log('connect')}>Connect</button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;