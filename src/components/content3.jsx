import React, { useState } from "react";
import "../movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Content3(props) {
  return (
    <div className="mediaContent2">
      <div
        style={{
          backgroundImage: `url(${props.backdrops})`
        }}
        className="contentCard-backdrop"
      ></div>
    </div>
  );
}

export default Content3;
