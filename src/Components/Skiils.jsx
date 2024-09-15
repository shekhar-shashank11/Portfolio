import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import dsa  from '../assets/dsa.png'
import web from '../assets/webD.svg'
import py from '../assets/python.png'
import c from '../assets/c.svg'
import cpp from '../assets/cpp.svg'
import java from '../assets/java.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import mongodb from '../assets/mongodb.svg'
import nodejs from '../assets/nodejs.png'
import mysql from '../assets/mysql.svg'

import React from 'react'

function Skiils() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
    <div>
      <section className="skill" id="skills">
        <div className="container">
          <div className="skill-bx">      
              <h2>Skills</h2>
              <p>Here are the some of the skills, I'm familer With and have expertise in it!</p>
              <Carousel breakPoints={breakPoints}>
                <div className="item">
                    <img src={c} alt="Image" />
                    <h5>C Progamming</h5>
                </div>
                <div className="item">
                    <img src={cpp} alt="Image" />
                    <h5>C++</h5>
                </div>
                <div className="item">
                    <img src={java} alt="Image" />
                    <h5>JAVA</h5>
                </div>
                <div className="item">
                    <img src={javascript} alt="Image" />
                    <h5>JavaScript</h5>
                </div>
                <div className="item">
                    <img src={py} alt="Image" />
                    <h5>Web Development</h5>
                </div>
                <div className="item">
                    <img src={react} alt="Image" />
                    <h5>ReactJS</h5>
                </div>
                <div className="item">
                    <img src={nodejs} alt="Image" />
                    <h5>NodeJS</h5>
                </div>
                <div className="item">
                    <img src={mongodb} alt="Image" />
                    <h5>MongoDB</h5>
                </div>
                <div className="item">
                    <img src={mysql} alt="Image" />
                    <h5>MySQL</h5>
                </div>

                <div className="item">
                    <img src={dsa} alt="Image" />
                    <h5>Data Structures & Algorithm</h5>
                </div>
                <div className="item">
                    <img src={web} alt="Image" />
                    <h5>Web Development</h5>
                </div>
                
              </Carousel>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Skiils