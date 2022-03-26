import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I am Junior Developer",
          "I enjoy coding in javascript. ",
          "nodejs ,reactj, css3 and typescript",
          "Background  C-programming"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
