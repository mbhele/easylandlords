import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
     
          "I am web developer",
          "who is based in Stellenbosch. ",
          "I enjoy build web applications",
          "and presenting  my software to the  clients"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
