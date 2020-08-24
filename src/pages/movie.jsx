import React, { Component } from "react";
import "../movie.css";
import { Link } from "react-router-dom";
import { faCircle, faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-circular-progressbar/dist/styles.css";
import CastAndCrew from "../components/castAndCrew";
import Media from "../components/media";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Recommendation from "../components/recommendation";
import Modal from "react-modal";
import Footer from "../components/footer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SkeletonSlider from "../components/skeletonSlider";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      release: [],
      genre: [],
      castCrew: false,
      crew1: { name: "-", job: "-" },
      crew2: { name: "-", job: "-" },
      crew3: { name: "-", job: "-" },
      modalState: false,
      modalSrc: " ",
      keyword: [],
      rec: [],
      video: [],
      key: 0,
      duration: "0"
    };
    window.scrollTo(0, 0);
    if (this.props.location.state) {
      const { movieId } = this.props.location.state;

      let url =
        "https://api.themoviedb.org/3/movie/" +
        `${movieId}` +
        "?api_key=890fb371f22db088105d415f5cafd470&language=en-US";

      let url2 = `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=890fb371f22db088105d415f5cafd470&language=en-US`;

      let url3 = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=890fb371f22db088105d415f5cafd470`;

      let url4 = `https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=890fb371f22db088105d415f5cafd470`;

      fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch();

      fetch(url2)
        .then(response => response.json())
        .then(this.buildList2)
        .catch();

      fetch(url3)
        .then(response => response.json())
        .then(this.buildList3)
        .catch();

      fetch(url4)
        .then(response => response.json())
        .then(this.buildList4)
        .catch();

      let url5 = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=890fb371f22db088105d415f5cafd470`;
      fetch(url5)
        .then(response => response.json())
        .then(this.buildList5)
        .catch();

      let url6 = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=890fb371f22db088105d415f5cafd470&language=en-US&page=1`;
      fetch(url6)
        .then(response => response.json())
        .then(this.buildList6)
        .catch();
    }
  }

  buildList = data => {
    console.log(data);
    var hour = 0;
    var minute = data.runtime;
    var durations;
    while (minute > 60) {
      hour++;
      minute = minute - 60;
    }
    if (hour > 0) {
      durations = `${hour}h ${minute}m `;
    } else {
      durations = `${minute}m`;
    }

    this.setState({ list: data, genre: data.genres, duration: durations });
  };

  buildList2 = data => {
    var data2;
    data &&
      data.results.forEach(item => {
        if (item.iso_3166_1 == "US") {
          data2 = item.release_dates[0].certification;
          return 0;
        }
      });
    console.log(data2);
    this.setState({ release: data2 });
  };

  buildList3 = data => {
    console.log(data);
    var length = data.crew.length + 1;
    console.log(length);
    if (length > 10) {
      this.setState({
        castCrew: data,
        crew1: data.crew[Math.floor(Math.random() * 11)],
        crew2: data.crew[Math.floor(Math.random() * 11)],
        crew3: data.crew[Math.floor(Math.random() * 11)]
      });
    } else if (length < 10) {
      this.setState({
        castCrew: data,
        crew1: data.crew[Math.floor(Math.random() * length)],
        crew2: data.crew[Math.floor(Math.random() * length)],
        crew3: data.crew[Math.floor(Math.random() * length)]
      });
    }

    console.log(this.state.crew1);
    console.log(this.state.crew2);
    console.log(this.state.crew3);
  };

  buildList4 = data => {
    console.log(data.keywords);
    this.setState({ keyword: data.keywords });
  };

  buildList5 = data => {
    console.log(data);
    this.setState({ video: data });
    console.log(this.state.video);
  };

  buildList6 = data => {
    console.log(data);
    this.setState({ rec: data.results });
  };

  recrender1 = () => {
    window.scrollTo(0, 0);

    this.setState({
      castCrew: false,
      release: false,
      genre: false,
      list: false,
      video: false
    });

    window.setTimeout(this.recrender, 100);
  };
  recrender = () => {
    if (this.props.location.state) {
      const { movieId } = this.props.location.state;

      let url =
        "https://api.themoviedb.org/3/movie/" +
        `${movieId}` +
        "?api_key=890fb371f22db088105d415f5cafd470&language=en-US";

      let url2 = `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=890fb371f22db088105d415f5cafd470&language=en-US`;

      let url3 = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=890fb371f22db088105d415f5cafd470`;

      let url4 = `https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=890fb371f22db088105d415f5cafd470`;

      fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch();

      fetch(url2)
        .then(response => response.json())
        .then(this.buildList2)
        .catch();

      fetch(url3)
        .then(response => response.json())
        .then(this.buildList3)
        .catch();

      fetch(url4)
        .then(response => response.json())
        .then(this.buildList4)
        .catch();

      let url5 = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=890fb371f22db088105d415f5cafd470`;
      fetch(url5)
        .then(response => response.json())
        .then(this.buildList5)
        .catch();

      let url6 = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=890fb371f22db088105d415f5cafd470&language=en-US&page=1`;
      fetch(url6)
        .then(response => response.json())
        .then(this.buildList6)
        .catch();
    }
  };

  formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  render() {
    var year = String(this.state.list.release_date).split("-", 1)[0];

    var budget;
    var revenue;
    this.state.list.budget > 0
      ? (budget = this.formatter.format(this.state.list.budget))
      : (budget = "-");
    this.state.list.revenue > 0
      ? (revenue = this.formatter.format(this.state.list.revenue))
      : (revenue = "-");

    var crew1Name;
    var crew2Name;
    var crew3Name;
    var crew1Job;
    var crew2Job;
    var crew3Job;

    try {
      crew1Name =
        this.state.crew1.name != undefined ? `${this.state.crew1.name}` : "-";
      crew2Name =
        this.state.crew2.name != undefined ? `${this.state.crew2.name}` : "-";
      crew3Name =
        this.state.crew3.name != undefined ? `${this.state.crew3.name}` : "-";
      crew1Job =
        this.state.crew1.job != undefined ? `${this.state.crew1.job}` : "-";
      crew2Job =
        this.state.crew2.job != undefined ? `${this.state.crew2.job}` : "-";
      crew3Job =
        this.state.crew3.job != undefined ? `${this.state.crew3.job}` : "-";
    } catch (err) {
      crew1Name = "-";
      crew2Name = "-";
      crew3Name = "-";
      crew1Job = "-";
      crew2Job = "-";
      crew3Job = "-";
    }

    if (this.props.location.state) {
      return (
        <div className="App movie">

          <div className="movieNav"></div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(57, 53, 52, 0.80), rgba(57, 53, 52, 0.50)), url(https://image.tmdb.org/t/p/w1000_and_h450_multi_faces${this.state.list.backdrop_path})`
            }}
            className="movieTop"
          >
            <div className="moviePoster">
              {this.state.list.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.state.list.poster_path}`}
                  alt=""
                  className="moviePosterImg"
                />
              ) : (
                <React.Fragment>
                <SkeletonTheme color="rgba(34, 33, 31, 0.3)" highlightColor="#444">
                <Skeleton
                  style={{ borderRadius: "9px" }}
                  width={"100%"}
                  height={450}
                />
                </SkeletonTheme>
                </React.Fragment>
              )}
            </div>
            <div className="movieTopDetail">
              <div className="movieTopTitle">
                {this.state.list.original_title ? (
                  <h2>
                    {" "}
                    {this.state.list.title}
                    <span className="movieTopYear"> ({year}) </span>
                  </h2>
                ) : (
                  <React.Fragment>
                  <SkeletonTheme color="rgba(34, 33, 31, 0.5)" highlightColor="#444">
                  <Skeleton
                    style={{ borderRadius: "9px" }}
                    width={"100%"}
                    height={"50px"}
                  />
                  </SkeletonTheme>
                  </React.Fragment>
                )}
              </div>

              {this.state.list.release_date ? (
                <div className="movieTopRelease">
                  <span>
                    {this.state.release} {this.state.list.release_date}{" "}
                  </span>
                  <FontAwesomeIcon
                    style={{
                      fontSize: "6px",
                      marginBottom: "3px",
                      marginLeft: "3px",
                      marginRight: "3px"
                    }}
                    icon={faCircle}
                    size="xs"
                  />
                  <span>
                    {" "}
                    {this.state.genre.map((item, i) => {
                      if (this.state.genre.length === i + 1) {
                        return item.name;
                      } else {
                        return item.name + ", ";
                      }
                    })}{" "}
                  </span>{" "}
                  <FontAwesomeIcon
                    style={{
                      fontSize: "6px",
                      marginBottom: "3px",
                      marginLeft: "3px",
                      marginRight: "3px"
                    }}
                    icon={faCircle}
                    size="xs"
                  />
                  <span> {this.state.duration} </span>
                </div>
              ) : (
                <div> </div>
              )}

              <div className="movieTopScore">
                {this.state.list.vote_average ? (
                  <React.Fragment>
                    <div className="MTS-Score">
                      {" "}
                      <div className="circularRate">
                        <CircularProgressbar
                          value={this.state.list.vote_average * 10}
                          text={`${this.state.list.vote_average * 10}%`}
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
                      <div className="  MTS-ScoreHead"> User Score</div>
                    </div>
                    <div className="MTS-play">
                      <div>
                        <FontAwesomeIcon icon={faPlay} size="sm" />
                      </div>
                      <div
                        onClick={() => {
                          this.state.video.results &&
                            this.setState({
                              modalState: true,
                              modalSrc: this.state.video.results[0].key
                            });
                        }}
                      >
                        <h4 className="MTS-play-h">Play Trailer </h4>
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                <SkeletonTheme color="rgba(34, 33, 31, 0.5)" highlightColor="#444">
                  <Skeleton
                    style={{ borderRadius: "9px" }}
                    width={400}
                    height={60}
                  />
                </SkeletonTheme>
                </React.Fragment>  
                )}
              </div>

              <div className="movieTagLine"> {this.state.list.tagline} </div>
              {this.state.list.overview ? (
                <React.Fragment>
                  <div className="movieTopOverview">
                    <h3 className="movieTopOverview-h"> Overview </h3>
                    <p>{this.state.list.overview}</p>
                  </div>
                  <div className="crew">
                    <div className="crew1">
                      <div> {crew1Name} </div>
                      <div> {crew1Job}</div>{" "}
                    </div>
                    <div className="crew2">
                      <div> {crew2Name} </div>
                      <div> {crew2Job}</div>{" "}
                    </div>
                    <div className="crew3">
                      <div> {crew3Name} </div>
                      <div> {crew3Job} </div>{" "}
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                <SkeletonTheme color="rgba(34, 33, 31, 0.5)" highlightColor="#444">
                <Skeleton
                  style={{ borderRadius: "9px" }}
                  count={8}
                  width={"100%"}
                  height={25}
                />
                </SkeletonTheme>
                </React.Fragment>
              )}
            </div>
          </div>
          <div className="movieBottom">
            <div className="movieBottomInformation">
              <div className="MBI-cast">
                <h4 className="MBICast-h">Top Billed Cast</h4>
                {this.state.castCrew ? (
                  <CastAndCrew castCrew={this.state.castCrew} />
                ) : (
                  <SkeletonSlider />
                )}
              </div>
              {this.state.video.results ? (
                <Media
                  posters={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.state.list.poster_path}`}
                  backdrops={`https://image.tmdb.org/t/p/w1000_and_h450_multi_faces${this.state.list.backdrop_path}`}
                  video={this.state.video.results}
                />
              ) : (
                <Skeleton
                  style={{ borderRadius: "9px" }}
                  width={"100%"}
                  height={300}
                />
              )}
              {this.state.video.results ? (
                <div className="MBI-recommendation">
                  <h4 className="MBICast-h">Recommendations</h4>
                  <div onClick={this.recrender1} className="MBI-recCard">
                    <Recommendation reclist={this.state.rec} />
                  </div>
                </div>
              ) : (
                <Skeleton
                  style={{ borderRadius: "9px" }}
                  width={"100%"}
                  height={100}
                />
              )}
            </div>
            <div className="movieBottomDetail">
              <div className="movieBottomDetail-status">
                <h4 className="MBD-h">Status</h4>
                <span className="MBD-result">{this.state.list.status}</span>
              </div>
              <div className="movieBottomDetail-oriLanguage">
                <h4 className="MBD-h">Original Language</h4>
                <span className="MBD-result">
                  {this.state.list.original_language}
                </span>
              </div>
              <div className="movieBottomDetail-budget">
                <h4 className="MBD-h">Budget</h4>
                <span className="MBD-result">{budget}</span>
              </div>
              <div className="movieBottomDetail-revenue">
                <h4 className="MBD-h">Revenue</h4>
                <span className="MBD-result">{revenue}</span>
              </div>
              <div className="movieBottomDetail-keyword">
                <h4 className="MBD-h">Keyword</h4>
                <span className="MBD-resultKeyword">
                  {this.state.keyword.length > 0
                    ? this.state.keyword.map(item => {
                        return (
                          <span className="keywordSpan"> {item.name} </span>
                        );
                      })
                    : "No keywords have been added."}
                </span>
              </div>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      );
    } else {
      return (
        <div className="notFound">
          <h2>Movie Id Not Found!</h2>
          <Link className="toHome" to="/riefkythemoviedb/">
            {" "}
            back to home{" "}
          </Link>{" "}
        </div>
      );
    }
  }
}

export default Movie;
