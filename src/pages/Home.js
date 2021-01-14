import React from "react";
import { Container, Col, Row } from "../components/Grid";
import {H1, H2, H3} from "../components/Headers"
import Carousel from "../components/Carousel";

function Home() {
    return (
        <>
          
          <Container fluid="fluid">
            <Carousel></Carousel>
            <Row classType="align-items-left justify-items-left">
                <Col size="introduction full-col flex-md-column">
                <H1>Chris Dominy</H1>
                <H2>Fullstack Developer</H2>
                <H3>
                  Focusing on developing responsive, user-focused applications to better lives
                </H3>
              </Col>
            </Row>
          </Container>
          
        </>
      );
    }

export default Home;
