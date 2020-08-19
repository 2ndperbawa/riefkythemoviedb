import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import "react-circular-progressbar/dist/styles.css";
import Modal from "react-modal";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

class TrailerSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      error: null,
      modalState: false,
      modalSrc: "MYls5LCzHr8",
      modalTitle: "none",
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };

    let url =
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLh2QSchbA3pnXEFIbhNDYpprd50mlNvIP&key=AIzaSyDC95cuo_AyD_B_h1xfH79FxaXt4C1xwKs";
    fetch(url)
      .then(response => response.json())
      .then(this.buildList)
      .catch();
  }

  stateChange(id) {
    this.setState({ modalSrc: id });
  }

  buildList = data => {
    console.log(data.items);
    this.setState({ list: data.items });
  };

  render() {
    if (window.innerWidth < 701) {
      if (this.state.settings.slidesToShow != 1) {
        console.log(window.innerWidth);
        this.setState({ settings: { slidesToShow: 1, slidesToScroll: 1 } });
      }
    } else if (window.innerWidth > 700 && window.innerWidth < 900) {
      if (this.state.settings.slidesToShow != 2) {
        console.log(window.innerWidth);
        this.setState({ settings: { slidesToShow: 2, slidesToScroll: 1 } });
      }
    } else if (window.innerWidth > 899 && window.innerWidth < 1350) {
      if (this.state.settings.slidesToShow != 3) {
        console.log(window.innerWidth);
        this.setState({ settings: { slidesToShow: 3, slidesToScroll: 2 } });
      }
    } else if (window.innerWidth > 1349 && window.innerWidth < 2000) {
      if (this.state.settings.slidesToShow != 4) {
        console.log(window.innerWidth);
        this.setState({ settings: { slidesToShow: 4, slidesToScroll: 3 } });
      }
    } else if (window.innerWidth > 1999) {
      if (this.state.settings.slidesToShow != 6) {
        console.log(window.innerWidth);
        this.setState({ settings: { slidesToShow: 6, slidesToScroll: 5 } });
      }
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 701) {
        if (this.state.settings.slidesToShow != 1) {
          console.log(window.innerWidth);
          this.setState({ settings: { slidesToShow: 1, slidesToScroll: 1 } });
        }
      } else if (window.innerWidth > 700 && window.innerWidth < 900) {
        if (this.state.settings.slidesToShow != 2) {
          console.log(window.innerWidth);
          this.setState({ settings: { slidesToShow: 2, slidesToScroll: 1 } });
        }
      } else if (window.innerWidth > 899 && window.innerWidth < 1350) {
        if (this.state.settings.slidesToShow != 3) {
          console.log(window.innerWidth);
          this.setState({ settings: { slidesToShow: 3, slidesToScroll: 2 } });
        }
      } else if (window.innerWidth > 1349 && window.innerWidth < 2000) {
        if (this.state.settings.slidesToShow != 4) {
          console.log(window.innerWidth);
          this.setState({ settings: { slidesToShow: 4, slidesToScroll: 3 } });
        }
      } else if (window.innerWidth > 1999) {
        if (this.state.settings.slidesToShow != 6) {
          console.log(window.innerWidth);
          this.setState({ settings: { slidesToShow: 6, slidesToScroll: 5 } });
        }
      }
    });
    return (
      <React.Fragment>
        <div className="sliderCategory">
          <div>
            <h1 className="sliderCategory-title">Latest Trailer</h1>
          </div>
          <div>
            <button className="sliderCategory-vmore">View More</button>
          </div>
        </div>
        <Modal
          style={{
            content: {
              top: "10%",
              left: "5px",
              right: "5px"
            }
          }}
          isOpen={this.state.modalState}
        >
          <div clasName="modalClose">
            <div
              onClick={() => {
                this.setState({ modalState: false });
              }}
              className="modalCloseButton"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </div>
          </div>
          <iframe
            width="100%"
            height="90%"
            src={"https://www.youtube.com/embed/" + this.state.modalSrc}
          ></iframe>
        </Modal>
        <div className="movSlider">
          <Slider {...this.state.settings}>
            {this.state.list.map(item => {
              let str = item.snippet.publishedAt.slice(0, 10);
              return (
                <div
                  key={item.snippet.resourceId.videoId}
                  className="trailer-container"
                >
                  <div className="card-trailer">
                    <div
                      onClick={() => {
                        this.setState({
                          modalState: true,
                          modalSrc: item.snippet.resourceId.videoId,
                          modalTitle: item.snippet.title
                        });
                      }}
                      style={{
                        backgroundImage: `url(${item.snippet.thumbnails.medium.url})`
                      }}
                      className="trailer-img"
                    >
                      <FontAwesomeIcon
                        className="play-icon"
                        icon={faPlay}
                        size="2x"
                      />
                    </div>
                    <div className="trailer-title">
                      <h5
                        onClick={() => {
                          this.setState({
                            modalState: true,
                            modalSrc: item.snippet.resourceId.videoId,
                            modalTitle: item.snippet.title
                          });
                        }}
                        className="trailerTitle-text"
                      >
                        {item.snippet.title}
                      </h5>
                    </div>
                    <div className="trailer-date">
                      <h5 className="trailerDate-text">{str}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </React.Fragment>
    );
  }
}

export default TrailerSlider;
