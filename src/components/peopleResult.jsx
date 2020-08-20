import React, { Component } from "react";
import "../searchPage2.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import img from "../default.svg";
import img1 from "../missing.jpg";
import { Link } from "react-router-dom";

class PeopleResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: ["1", "1", "1", "1", "1"]
    };
  }

  render() {
    return (
      <div className="peopleResult">
        {this.props.results
          ? this.props.results.map(item => {
              return (
                <div className="searchResultCard">
                  <div>
                    <Link
                      to={{
                        pathname: "/riefkythemoviedb/people",
                        state: {
                          peopleId: item.id
                        }
                      }}
                    >
                      <img
                        className="searchResultCardImg"
                        src={
                          item.profile_path
                            ? `https://image.tmdb.org/t/p/w90_and_h90_face${item.profile_path}`
                            : img
                        }
                      />
                    </Link>
                  </div>
                  <div className="cardIdentity">
                    <div>
                      <Link
                        to={{
                          pathname: "/riefkythemoviedb/people",
                          state: {
                            movieId: item.id
                          }
                        }}
                      >
                        <span className="cardIdentitySpan1"> {item.name} </span>{" "}
                      </Link>
                    </div>
                    <div>
                      <span className="cardIdentitySpan2">
                        {" "}
                        {item.known_for_department}{" "}
                        <FontAwesomeIcon
                          style={{
                            fontSize: "6px",
                            margin: "3px"
                          }}
                          icon={faCircle}
                          size="xs"
                        />
                        {item.known_for.map(item => {
                          return `${
                            item.original_title
                              ? item.original_title
                              : item.original_name
                          }, `;
                        })}
                      </span>{" "}
                    </div>
                  </div>
                </div>
              );
            })
          : this.state.empty.map(empty => {
              return (
                <div className="searchResultCard1">
                  <div>
                    <Skeleton
                      style={{ borderRadius: "9px" }}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <div className="cardIdentity1">
                    <div>
                      <Skeleton
                        style={{ borderRadius: "9px" }}
                        width={"100%"}
                        height={"100%"}
                      />{" "}
                    </div>
                    <div>
                      <Skeleton
                        style={{ borderRadius: "9px" }}
                        width={"100%"}
                        height={"100%"}
                      />{" "}
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    );
  }
}

export default PeopleResult;
