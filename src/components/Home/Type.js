import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I am Junior Developer",
          "I enjoy coding javascript",
          "and nodejs",
          "reactjs",
          ",css3",
          "I am open to try other Programming languages",
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
