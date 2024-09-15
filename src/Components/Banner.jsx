import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { useState,useEffect } from 'react'
import profile from '../assets/profile.jpg'


function Banner() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate= ["Frontend Developer", "Web Designer", "Backend Developer"]
    const [text, setText] = useState('');
    const [delta,setDelta] = useState(300-Math.random()*100);

    const period = 1000;
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return ()=>{clearInterval(ticker)};
    },[text])
    const tick =()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1);
        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && updatedText==fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }else {
        setIndex(prevIndex => prevIndex + 1);
      }

    }

  return (
    <>
    
   <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi there, I'm Shashank Shekhar `} <br></br> <span className='wrap'>{text}</span></h1>
                    <p>currently pursuing B.Tech in Computer Science, with one year of hands-on experience in web development. My expertise spans C++, Python, and JavaScript, and I’ve successfully completed a range of projects, from small-scale applications to more complex, moderately scaled solutions. My portfolio reflects my ability to build scalable, high-performance web applications.</p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={profile} alt="header image" />
                </Col>
                <Col xs={12} md={6} xl={7}>
                   <a href='#connect'><button onClick={()=> console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/> </button></a> 
                </Col>
                
            </Row>
        </Container>
    </section> 
    </>
  

  )
}

export default Banner