import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

class SkeletonSlider extends Component {
  constructor() {
    super();
    this.state = {
      list: ["1", "1", "1", "1", "1", "1", "1"],
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  }

  render() {
    if (window.innerWidth > 700 && window.innerWidth < 900) {
      if (this.state.settings.slidesToShow != 3) {
        console.log(window.innerWidth);
        this.setState({ settings: { slidesToShow: 3, slidesToScroll: 2 } });
      }
    } else if (window.innerWidth > 899 && window.innerWidth < 1350) {
      if (this.state.settings.slidesToShow != 5) {
        console.log(window.innerWidth);
        this.setState({ settings: { slidesToShow: 5, slidesToScroll: 4 } });
      }
    } else if (window.innerWidth > 1349 && window.innerWidth < 2000) {
      if (this.state.settings.slidesToShow != 6) {
        console.log(window.innerWidth);
        this.setState({ settings: { slidesToShow: 6, slidesToScroll: 5 } });
      }
    } else if (window.innerWidth > 1999) {
      if (this.state.settings.slidesToShow != 10) {
        console.log(window.innerWidth);
        this.setState({ settings: { slidesToShow: 10, slidesToScroll: 9 } });
      }
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 701) {
        if (this.state.settings.slidesToShow != 1) {
          console.log(window.innerWidth);
          this.setState({ settings: { slidesToShow: 1, slidesToScroll: 1 } });
        }
      } else if (window.innerWidth > 700 && window.innerWidth < 900) {
        if (this.state.settings.slidesToShow != 3) {
          console.log(window.innerWidth);
          this.setState({ settings: { slidesToShow: 3, slidesToScroll: 2 } });
        }
      } else if (window.innerWidth > 899 && window.innerWidth < 1350) {
        if (this.state.settings.slidesToShow != 5) {
          console.log(window.innerWidth);
          this.setState({ settings: { slidesToShow: 5, slidesToScroll: 4 } });
        }
      } else if (window.innerWidth > 1349 && window.innerWidth < 2000) {
        if (this.state.settings.slidesToShow != 6) {
          console.log(window.innerWidth);
          this.setState({ settings: { slidesToShow: 6, slidesToScroll: 5 } });
        }
      } else if (window.innerWidth > 1999) {
        if (this.state.settings.slidesToShow != 10) {
          console.log(window.innerWidth);
          this.setState({ settings: { slidesToShow: 10, slidesToScroll: 9 } });
        }
      }
    });
    return (
      <div onresize={() => {}} className="movSlider">
        <Slider {...this.state.settings}>
          {this.state.list.map(item => {
            return (
              <div className="movie-container">
                <div className="card-movie">
                  <div className="img-skeleton">
                    <Skeleton
                      style={{ borderRadius: "9px" }}
                      width={"100%"}
                      height={"230px"}
                    />
                  </div>

                  <div className="movie-title">
                    <Skeleton
                      style={{ borderRadius: "9px" }}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <div className="movie-date">
                    <Skeleton
                      style={{ borderRadius: "9px" }}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SkeletonSlider;
