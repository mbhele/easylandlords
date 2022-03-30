import React from "react";
import Card from "react-bootstrap/Card";
// import { FaBeer } from 'react-icons/fa';
import { FaCheck} from 'react-icons/fa';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hello, My name is<span className="purple">  Mbusiseni Mbhele </span>, and I am a developer and entrepreneur based in South Africa (Stellenbosch).
        I am an innovative, task-driven professional with <span className="purple">3+ years of experience in web design and development</span> . I am passionate about JavaScript and its great libraries such: as Dojo Toolkit, Reactjs, Nextjs and TensorFlow. I work extremely hard, and I am willing to learn new trending tech stacks. 
            I value communication and writing clean and readable code. My job has become my vocation, and I still like to pass on this strength.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <FaCheck />  Gym
            </li>
            <li className="about-activity">
              <FaCheck  /> volunteering 
            </li>
            <li className="about-activity">
            <FaCheck /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "If you cannot do great things, do small things in a great way."{" "}
          </p>
          <footer className="blockquote-footer">Napoleon Hill</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
