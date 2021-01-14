import React, { useState } from "react";
import { Container, Col, Row } from "../components/Grid";
import {H1} from "../components/Headers";
import { Document, Page, pdfjs } from 'react-pdf';
import PDFresume from "../resume.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Contact(){



    return (
        <Container>
        <Row classType="justify-content-center">
            <Col size="col-md-12">
              <H1 classType="text-center contact">Resume</H1>
              <Document
        file={PDFresume}
        onLoadError={console.error}
      >
        <Page pageNumber={1} width={900} scale={5.0}/>
      </Document>
    </Col>
  </Row>
</Container>
    )
}


export default Contact;