import React, { useState } from "react";
import "../movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

function Content1(props) {
  const [modalState, setModalState] = useState(false);

  const [modalSrc, setModalSrc] = useState(" ");

  return (
    <React.Fragment>
      <Modal
        style={{
          content: {
            top: "10%",
            left: "110px",
            right: "110px",
            backgroundColor: "black"
          }
        }}
        isOpen={modalState}
      >
        <div clasName="modalClose">
          <div
            onClick={() => {
              setModalState(false);
            }}
            className="modalCloseButton"
          >
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faTimes}
              size="lg"
            />
          </div>
        </div>
        <iframe
          className="modalIframe"
          width="100%"
          height="95%"
          src={"https://www.youtube.com/embed/" + modalSrc}
        ></iframe>
      </Modal>
      <div className="mediaContent1">
        {props.video &&
          props.video.map(item => {
            return (
              <div
                onClick={() => {
                  setModalState(true);
                  setModalSrc(`${item.key}`);
                }}
                style={{
                  backgroundImage: `url(https://i.ytimg.com/vi/${item.key}/mqdefault.jpg)`
                }}
                className="contentCard"
              >
                <span className="circle">
                  <FontAwesomeIcon
                    className="playTrailer"
                    icon={faPlay}
                    size="lg"
                  />
                </span>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default Content1;
