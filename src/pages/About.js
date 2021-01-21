import React from "react"
import { Container, Col, Row } from "../components/Grid";
import {H2} from "../components/Headers"
import {UL, LI} from "../components/Lists"

function About(){
    return (
      <Container fluid="fluid">
      <Row>
          <Col size="col-lg-4 text-center">
        <img src="./images/cdominy.JPG" className="img-fluid rounded about-img" alt="Chris Dominy"/>
          </Col>
          <Col size="col-lg-8">
              <div className="about-container">
                  <H2>About Me</H2>
                  <p>I am a full-stacks web developer with a background in Biology, STEM education, and psychology.
                    Originally, I graduated from the University of Texas at Austin and received my certifcation for Full-Stacks web development following graduation. 
                    While developing my skills as a programmer, I learned that I have a true passion of making full-stack applications, enjoying the management of back-end to the visuals of front-end. Quick to learn, I enjoy picking up new skills and languages whenever I can, applying what I know to create personal projects that benefit me and those in my community. My future goal is to continue my education by receiving a masters in computer science or software engineering in the hopes of creating new applications daily to improve lives everwhere. 
                  </p>
                  <H2>Current Skill Set</H2>
                  <UL>
                      <LI className="skills">HTML5</LI>
                      <LI className="skills">CSS3</LI>
                      <LI className="skills">Boostrap 4 & Other CSS Frameworks</LI>
                      <LI className="skills">JavaScript</LI>
                      <LI className="skills">MySQL</LI>
                      <LI className="skills">Node.js</LI>
                      <LI className="skills">Express.js</LI>
                      <LI className="skills">SQL Databases</LI>
                      <LI className="skills">MongoDB</LI>
                      <LI className="skills">React</LI>
                      <LI className="skills">GIT/Github</LI>
                      <LI className="skills">REST API's</LI>
                  </UL>
              </div>
           </Col>
           </Row>
    </Container>

    )
}


export default About;
