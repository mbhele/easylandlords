import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import acutesolar from "../../Assets/Projects/acutesolar.png";
import gb from "../../Assets/Projects/gb.png";

import easylandlord from "../../Assets/Projects/easylandlord.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gb}
              isBlog={false}
              title="matshamatics.co.za"
              description="This tutoring website was built for Dr Matsha. The website allow a learner to book tutoring lessons with easy. It uses css , html , javascript and google firebase for backend.
               "
              link="http://matshamatics.co.za/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acutesolar}
              isBlog={false}
              title="AcuteSolar"
              description="The website is for the solar panel entity. It a simple website built with in javascript , css, html, and boostrap. The aim of the entitity is to display it services and contact details to it customers. "
              link="https://acutesolar.co.za/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easylandlord }
              isBlog={false}
              title="easylandlords"
              description="This is a full-stack application designed for landlords who aims at displaying their services online. It also helps landlords study other landlord selling propositions on the website."
              link="https://github.com/mbhele/easylandlords/"
            />
          </Col>

        

         

   
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
