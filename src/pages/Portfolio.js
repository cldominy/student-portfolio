import React, { useState } from "react"
import { Container, Row, Col } from "../components/Grid";
import {Card, Deck} from "../components/Card"
import portfolioPorjects from "../projects.json";

function Portfolio(){
    const [projects, setProject] = useState(portfolioPorjects)
    return (
        <>

        <Container>
            <Row classType="align-items-center mb-4 mt-4">
            <Deck>
                {projects.map((project, index) =>{ 
                    return(
                        <Col size="col-sm-4" key={index}>
                        <Card project={project} />
                        </Col>
                    )
                })}
            </Deck>
            </Row>
        </Container>

        </>
    )
}


export default Portfolio;