import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CerticateCards from "./CerticateCard";
import Particle from "../Particle";
import javascript from "./images/javascript.png";
import typescriptArray from "./images/typescriptArray.png";
import typescriptDatatype from "./images/typescriptDatatype.png";
import typescriptFundamentals from "./images/typescriptArray.png";
import typescriptGeneral from "./images/typescriptGeneral.png";
import typescriptOperator from "./images/typescriptOperator.png";
import devopAws from "./images/devopAws.png";
import foundationUI from "./images/foundationUI.png";
import wordpress from "./images/wordpress.png";
import awsdeveloperpng from "./images/awsdeveloper.png"
import git from "./images/git.png";
import agile from "./images/agile.png";
import cprogramming from "./images/C-programming.png";
import reactboostrapjqueryscss from "./images/react-boostrap-jquery-scss.png";



function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        CERTIFICATION <strong className="purple">(ACHIEVEMENT)</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={git}
         
             
             
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={javascript}
             
             
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={devopAws}
          
             
             
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={agile}
            
             
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={awsdeveloperpng}
          
              title="Solar company"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={foundationUI}
              
             
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={wordpress}
              
             
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={cprogramming}
              
             
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={reactboostrapjqueryscss}
              
             
              
            />
          </Col>
          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={typescriptArray}
              
             
              
            />
          </Col>
          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={typescriptDatatype}
              
             
              
            />
         
          </Col>
          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={typescriptFundamentals}
              
             
              
            />
          </Col>
          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={typescriptGeneral}
              
             
              
            />
          </Col>
          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={typescriptOperator}
              
             
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
