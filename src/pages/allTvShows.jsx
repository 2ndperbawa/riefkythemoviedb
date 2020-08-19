import React, { Component } from "react";
import "../searchPage.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Skeleton from "react-loading-skeleton";

class AllTvShows extends Component {
  constructor() {
    super();
    this.state = {
      list: false,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      page: 1,
      item: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
    };

    let url =
      "https://api.themoviedb.org/3/tv/popular?api_key=890fb371f22db088105d415f5cafd470&language=en-US&page=1";
    fetch(url)
      .then(response => response.json())
      .then(this.buildList)
      .catch();
  }

  buildList = data => {
    console.log(data.results);
    this.setState({ list: data.results });
  };

  buildList2 = data => {
    console.log(data.results);
    var joined = this.state.list.concat(data.results);
    console.log(joined);
    this.setState({ list: joined });
  };

  addList = page1 => {
    let url = `https://api.themoviedb.org/3/tv/popular?api_key=890fb371f22db088105d415f5cafd470&language=en-US&page=${page1}`;
    fetch(url)
      .then(response => response.json())
      .then(this.buildList2)
      .catch();
    window.scrollBy(0, -300);
    this.setState({ page: page1 });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.list ? (
          <div className="app searchPage2">
            <div className="content">
              {this.state.list.map(item => {
                return (
                  <div key={item.id} className="movie-container-search">
                    <div className="card-movie-search">
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
                          className="movie-img-search"
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
                      <div className="movie-title-search">
                        <Link
                          to={{
                            pathname: "/tvshow",
                            state: {
                              movieId: item.id
                            }
                          }}
                        >
                          <h5 className="movieTitle-text-search">
                            {item.original_name}
                          </h5>
                        </Link>
                      </div>
                      <div className="movie-date-search">
                        <h5 className="movieDate-text-search">
                          {item.first_air_date}
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div
                onClick={() => {
                  this.addList(this.state.page + 1);
                }}
                className="loadMore"
              >
                <button className="loadMoreButton"> Load More </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="app searchPage2">
            <div className="content">
              {this.state.item.map(item => {
                return (
                  <div key={item.id} className="movie-container-search">
                    <div className="card-movie-search">
                      <Skeleton
                        style={{ borderRadius: "10px" }}
                        width={207}
                        height={310}
                      />
                      <Skeleton
                        style={{ borderRadius: "10px" }}
                        count={2}
                        width={207}
                        height={30}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="footer1">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default AllTvShows;
