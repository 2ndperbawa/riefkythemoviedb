import React, { Component } from "react";
import "../people.css";
import img from "../missing.jpg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      movList: []
    };

    window.scrollTo(0, 0);
    if (this.props.location.state) {
      const { peopleId } = this.props.location.state;
      console.log(peopleId);
      let url = `https://api.themoviedb.org/3/person/${peopleId}?api_key=890fb371f22db088105d415f5cafd470&language=en-US`;

      fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch();

      let url1 = `https://api.themoviedb.org/3/person/${peopleId}/combined_credits?api_key=890fb371f22db088105d415f5cafd470&language=en-US`;

      fetch(url1)
        .then(response => response.json())
        .then(this.buildList1)
        .catch();
    }
  }

  buildList = data => {
    console.log(data);
    this.setState({ list: data });
  };

  buildList1 = data => {
    console.log(data);
    this.setState({ movList: data });
  };

  render() {
    if (this.props.location.state) {
      return (
        <div className="app">
          <div className="peopleLeft">
            <div className="peopleImg">
              {" "}
              {this.state.list.profile_path ? (
                <img
                  className="peopleImg-img"
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${this.state.list.profile_path}`}
                  alt=""
                />
              ) : (
                <Skeleton
                  style={{ borderRadius: "9px" }}
                  width={"100%"}
                  height={400}
                />
              )}{" "}
            </div>

            <div className="peopleIdentity">
              {this.state.list.profile_path ? (
                <React.Fragment>
                  <h3 className="peopleIdentity-h"> Personal Info </h3>
                  <h3 className="peopleIdentity-h1"> Known For </h3>
                  <span className="peopleIdentity-span">
                    {" "}
                    {this.state.list.known_for_department
                      ? `${this.state.list.known_for_department}`
                      : "-"}{" "}
                  </span>
                  <h3 className="peopleIdentity-h1"> Known Credit </h3>
                  <span className="peopleIdentity-span">
                    {" "}
                    {this.state.movList.cast
                      ? `${this.state.movList.cast.length +
                          this.state.movList.crew.length}`
                      : "-"}{" "}
                  </span>
                  <h3 className="peopleIdentity-h1"> Gender </h3>
                  <span className="peopleIdentity-span">
                    {" "}
                    {this.state.list.gender == 1 ? `Female` : "Male"}{" "}
                  </span>
                  <h3 className="peopleIdentity-h1"> Birthday </h3>
                  <span className="peopleIdentity-span">
                    {" "}
                    {this.state.list.birthday
                      ? `${this.state.list.birthday}`
                      : "-"}{" "}
                  </span>
                  {this.state.list.deathday && (
                    <React.Fragment>
                      <h3 className="peopleIdentity-h1"> Birthday </h3>
                      <span className="peopleIdentity-span">
                        `${this.state.list.deathday}`
                      </span>{" "}
                    </React.Fragment>
                  )}
                  <h3 className="peopleIdentity-h1"> Place of Birthday </h3>
                  <span className="peopleIdentity-span">
                    {" "}
                    {this.state.list.place_of_birth
                      ? `${this.state.list.place_of_birth}`
                      : "-"}{" "}
                  </span>
                  <h3 className="peopleIdentity-h1"> Also Known As </h3>
                  <span className="peopleIdentity-span">
                    {" "}
                    {this.state.list.also_known_as[0]
                      ? this.state.list.also_known_as.map(item => {
                          return `${item}, `;
                        })
                      : "-"}{" "}
                  </span>
                </React.Fragment>
              ) : (
                <Skeleton
                  style={{ borderRadius: "9px" }}
                  width={"100%"}
                  height={"100%"}
                />
              )}
            </div>
          </div>
          <div className="peopleRight">
            <div className="peopleDetail">
              <div className="peopleDetailName">
                {this.state.list.name ? (
                  <h2 className="peopleDetail-h"> {this.state.list.name} </h2>
                ) : (
                  <Skeleton
                    style={{ borderRadius: "5px" }}
                    width={"100%"}
                    height={"100%"}
                  />
                )}
              </div>

              <div className="peopleBiographyH">
                {this.state.list.biography ? (
                  <h4 className="peopleBiographyH-h">Biography</h4>
                ) : (
                  <Skeleton
                    style={{ borderRadius: "5px" }}
                    width={"100%"}
                    height={"100%"}
                  />
                )}
              </div>

              <div className="peopleDetailBiograph">
                {this.state.list.biography ? (
                  <p> {this.state.list.biography} </p>
                ) : (
                  <Skeleton
                    style={{ borderRadius: "9px" }}
                    width={"100%"}
                    height={"100%"}
                  />
                )}
              </div>
            </div>

            <div className="peopleMovieHeader">
              {this.state.movList.cast ? (
                <h4 className="peopleBiographyH-h"> Movies </h4>
              ) : (
                <Skeleton
                  style={{ borderRadius: "5px" }}
                  width={"100%"}
                  height={"100%"}
                />
              )}
            </div>
            <div className="peopleMovie1">
              {this.state.movList.cast ? (
                this.state.movList.cast.slice(0, 9).map(item => {
                  return (
                    <div className="peopleMovieCard">
                      <Link
                        to={{
                          pathname: "/riefkythemoviedb/movie",
                          state: {
                            movieId: item.id
                          }
                        }}
                      >
                        <img
                          className="movieCardImg"
                          src={
                            item.poster_path
                              ? `https://image.tmdb.org/t/p/w150_and_h225_bestv2${item.poster_path}`
                              : img
                          }
                          alt=""
                        />
                      </Link>
                      <span>{item.original_title}</span>
                    </div>
                  );
                })
              ) : (
                <Skeleton
                  style={{ borderRadius: "5px" }}
                  width={"100%"}
                  height={"100%"}
                />
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="notFound">
          <h2>Person ID Not Found!</h2>
          <Link className="toHome" to="/riefkythemoviedb/">
            {" "}
            back to home{" "}
          </Link>{" "}
        </div>
      );
    }
  }
}

export default People;
