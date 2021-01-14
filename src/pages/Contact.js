import React from "react"
import { Container, Col, Row } from "../components/Grid";
import {H1} from "../components/Headers"
import Form from "../components/Form"

function Contact(){
    return (
        <Container>
        <Row>
            <Col size="col-md-12">
              <H1 classType="text-center contact">Contact Me</H1>
        <Form></Form>
    </Col>
  </Row>
</Container>
    )
}


export default Contact;