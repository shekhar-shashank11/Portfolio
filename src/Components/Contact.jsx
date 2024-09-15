import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/contact.svg'
import emailjs from '@emailjs/browser'

function Contact() {
    const intialFormDetails = {
        firstName :"",
        lastName : "",
        email : "",
        phone : "",
        message : ""
    }
    
    const [formDetails, setFormDetails] = useState(intialFormDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    
    const onFormUpdate =(category, value) =>{
        setFormDetails({
            ...formDetails,
            [category] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_dla1rzc', 'template_ix1jdxq',e.target,'y9Nslnfp1t0oHmEm0')
        setFormDetails(intialFormDetails);
        
      }

    

  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' name='firstName' value={formDetails.firstName} placeholder='First Name' onChange={(e)=>onFormUpdate('firstName',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='text' name='lastName' value={formDetails.lastName} placeholder='Last Name' onChange={(e)=>onFormUpdate('lastName',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='email' name='email' value={formDetails.email} placeholder='Email Address' onChange={(e)=>onFormUpdate('email',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='tel' name='phone' value={formDetails.phone} placeholder='Phone No.' onChange={(e)=>onFormUpdate('phone',e.target.value)} />
                            </Col>
                                <textarea rows={8} name='message' value={formDetails.message} placeholder='Message' onChange={(e)=>onFormUpdate('message',e.target.value)}/>
                            <Col sm={6} className='px-1'>
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>    
                        </Row>
                    </form>
                </Col>
                <Col md={6}>
                <img src={contactImg} alt="" />
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Contact