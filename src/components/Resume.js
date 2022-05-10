import React from "react";
import PDF from "../../src/assets/images/Curricula Eder.pdf";

const Resume = () => (
    <section id="contact-me">
    <div className ="article-heading">
    <a href={PDF}> <h3> Resume</h3> </a>
    </div>
   
    <div className ="contact-my">
		
      <div className="front">
    <div>FRONTEND </div>
    <ul className="resume">
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>Jquery</li>
      <li>Responsive Design</li>
      <li>React</li>
      <li>Bootstrap</li>
    </ul>
    </div>
    <div className="back">
    <div>BACKEND </div>
    <ul className="resume">
      <li>API's</li>
      <li>Node</li>
      <li>Express</li>
      <li>MySql, Sequelize</li>
      <li>MongoDB, Mongoose</li>
      <li>Rest</li>

    </ul>
  </div>
  </div>
  
  </section>
);

export default Resume;