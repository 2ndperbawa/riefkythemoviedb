import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

class tvSlider extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
    console.log("fetch");
    let url =
      "https://api.themoviedb.org/3/tv/popular?api_key=890fb371f22db088105d415f5cafd470&language=en-US&page=1";
    fetch(url)
      .then(response => response.json())
      .then(this.buildList)
      .catch();
  }

  buildList = data => {
    console.log("movieSlider");
    console.log(data.results);
    this.setState({ list: data.results });
  };

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
      <React.Fragment>
        <div className="sliderCategory">
          <div className="sliderCategory-titleDivTv">
            <h1 className="sliderCategory-title">Popular TV Shows</h1>
          </div>
          <div>
            <button className="sliderCategory-vmore">View More</button>
          </div>
        </div>
        <div onresize={() => {}} className="movSlider">
          <Slider {...this.state.settings}>
            {this.state.list.map(item => {
              return (
                <div key={item.id} className="movie-container">
                  <div className="card-movie">
                    <Link
                      to={{
                        pathname: "/tvshow",
                        state: {
                          movieId: item.id
                        }
                      }}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w188_and_h282_bestv2${item.poster_path}`}
                        alt=""
                        className="movie-img"
                      />
                    </Link>
                    <div
                      className="circularRate"
                      style={{
                        position: "relative",
                        width: "40px",
                        marginLeft: "12px",
                        marginTop: "-20px",
                        fontWeight: "bold"
                      }}
                    >
                      <CircularProgressbar
                        value={item.vote_average * 10}
                        text={`${item.vote_average * 10}%`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                          backgroundColor: "#22211F",
                          textSize: "26px",
                          textColor: "#fff",
                          pathColor: "#FF7314",
                          trailColor: "#393534"
                        })}
                      />
                    </div>
                    <div className="movie-title">
                      <Link
                        to={{
                          pathname: "/tvshow",
                          state: {
                            movieId: item.id
                          }
                        }}
                      >
                        <h5 className="movieTitle-text">{item.name}</h5>
                      </Link>
                    </div>
                    <div className="movie-date">
                      <h5 className="movieDate-text">{item.release_date}</h5>
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

export default tvSlider;
