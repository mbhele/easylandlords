import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
// import { FaBeer } from 'react-icons/fa';
import { FaCheck} from 'react-icons/fa';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hello again, I am <span className="purple">Mbusiseni Mbhele </span>
         a developer from <span className="purple"> South Africa(Stellenbosch). </span>
            <br />
I am an innovative, task-driven professional with 3+ years of experience in web design. I am passionate about JavaScript or any web technology. I work extremely hard, and I am always ready to pick up new trending tech stacks.

 
            I value communication and writing clean and readable code
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaCheck />  Swimming
            </li>
            <li className="about-activity">
              <FaCheck  /> Entrepreneur
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
