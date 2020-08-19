import React, { useState } from "react";
import "../movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Content1 from "../components/content1";
import Content2 from "../components/content2";
import Content3 from "../components/content3";


function Media(props) {
  const [state, setState] = useState({
    tab: 1
  });



  console.log(props.video);

  function tabSwitch1() {
    setState({ tab: 1 });
  }

  function tabSwitch2() {
    setState({ tab: 2 });
  }

  function tabSwitch3() {
    setState({ tab: 3 });
  }
  return (
    <div className="MBI-media">
      <div className="MBIMedia-head">
        <div className="MBIMedia-hDiv">
          {" "}
          <h4 className="MBIMedia-h">Media</h4>{" "}
        </div>{" "}
        <div className="MBIMedia-buttonDiv">
          {" "}
          <button
            className={state.tab == 1 ? "MBIMediaButton2" : "MBIMediaButton1"}
            onClick={tabSwitch1}
          >
            {" "}
            Videos{" "}
          </button>
          <button
            className={state.tab == 2 ? "MBIMediaButton2" : "MBIMediaButton1"}
            onClick={tabSwitch2}
          >
            {" "}
            Posters{" "}
          </button>
          <button
            className={state.tab == 3 ? "MBIMediaButton2" : "MBIMediaButton1"}
            onClick={tabSwitch3}
          >
            {" "}
            Backdrops
          </button>{" "}
        </div>
      </div>
      {state.tab == 1 && <Content1 video={props.video} />}
      {state.tab == 2 && <Content2 posters={props.posters} />}
      {state.tab == 3 && <Content3 backdrops={props.backdrops} />}
    </div>
  );
}

export default Media;
