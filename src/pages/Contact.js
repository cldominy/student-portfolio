import React from "react"
import { Container, Col, Row } from "../components/Grid";
import {H1, H2} from "../components/Headers"
import Form from "../components/Form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


function Contact(){
    return (
        <Container>
        <Row>
            <Col size="col-md-12">
              <H1 classType="text-center contact">Contact Me</H1>
              <H2 classType="text-center"><FontAwesomeIcon icon={faPhone}> </FontAwesomeIcon>: 513-348-8164</H2>
        <Form></Form>
    </Col>
  </Row>
</Container>
    )
}


export default Contact;