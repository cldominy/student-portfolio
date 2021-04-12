import React from "react"
import { Container, Col, Row } from "../components/Grid";
import {H1, H3} from "../components/Headers"
import Form from "../components/Form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


function Contact(){
    return (
        <Container>
        <Row>
            <Col size="col-md-12">
              <H1 classType="text-center contact">Contact Me</H1>
              <H3 classType="text-center contact"><i><FontAwesomeIcon  icon={faEnvelope} size="lg"/></i> : cdominy@utexas.edu</H3>
        <Form></Form>
    </Col>
  </Row>
</Container>
    )
}


export default Contact;
