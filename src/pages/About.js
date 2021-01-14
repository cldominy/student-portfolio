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
                  <p>I am a current student in UT Austin's fullstack bootcamp.
                    Originally, I graduated from the University of Texas at Austin in August 2018 with a BSA in Biology, 
                    minor in Psychology, and a certifcation to teach 7-12 composite science.
                    My goals have always been centered around learning as much as I can and applying what I know, 
                    either through creating projects or passing down my knowledge through teaching. I aspire to go
                    above and beyond by expanding my skillset. Eventually, I hope to transition from a science teacher 
                    to a software engineer.
                  </p>
                  <H2>Current Skill Set</H2>
                  <UL>
                      <LI className="skills">HTML5</LI>
                      <LI className="skills">CSS3</LI>
                      <LI className="skills">Boostrap 4</LI>
                      <LI className="skills">JavaScript</LI>
                      <LI className="skills">MySQL</LI>
                      <LI className="skills">Node.js</LI>
                      <LI className="skills">Express.js</LI>
                      <LI className="skills">SQL Databases</LI>
                      <LI className="skills">MongoDB</LI>
                      <LI className="skills">React</LI>
                      <LI className="skills">GIT/Github</LI>
                  </UL>
              </div>
           </Col>
           </Row>
    </Container>

    )
}


export default About;