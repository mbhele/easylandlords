import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import acutesolar from "../../Assets/Projects/acutesolar.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
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
              description="This tutoring website built for for Dr Matsha who a luecture at num. The basic the website display the server doctor is rendering and the contact
               It boostarct website hosted on the Google cloud firebase and it domain point from go daya"
              link="http://matshamatics.co.za/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acutesolar}
              isBlog={false}
              title="AcuteSolar"
              description="This Website was built for the solar entiety. It a simple website built with javascript , css, html, boostrap and php tech stack. The aim of the entitity was to display it services and contact details to it customers "
              link="https://acutesolar.co.za/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easylandlord }
              isBlog={false}
              title=""
              description=""
              link=""
            />
          </Col>

        

         

   
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
