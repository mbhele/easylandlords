import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
     
          "I am  javascript developer",
          "Who is based in Stellenbosch. ",
          "I enjoy building applications",
          "and presenting them to clients"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
