import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Skiils from './Components/Skiils';
import MyTabs from './Components/MyTabs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';




function App() {
  
  return ( 
    <>
    <NavBar />
    <Banner />
    
    
    <Skiils />
    <MyTabs />
    <Contact />
    <Footer />
    
    </>
  )
}

export default App
