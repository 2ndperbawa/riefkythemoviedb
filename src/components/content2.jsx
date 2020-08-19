import React, { useState } from "react";
import "../movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Content2(props) {
  console.log(props.posters);
  return (
    <div className="mediaContent2">
      <div
        style={{
          backgroundImage: `url(${props.posters})`
        }}
        className="contentCard-poster"
      ></div>
    </div>
  );
}

export default Content2;
