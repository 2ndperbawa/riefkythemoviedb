import React, { Component } from "react";
import "../searchPage2.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import img from "../default.svg";
import img1 from "../missing.jpg";

class TvShowResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: ["1", "1", "1", "1", "1"]
    };
  }

  render() {
    return (
      <div className="movieResult">
        {this.props.results
          ? this.props.results.map(item => {
              return (
                <div className="searchResultCard">
                  <div>
                    <img
                      className="searchResultmovCardImg"
                      src={
                        item.poster_path
                          ? `https://image.tmdb.org/t/p/w94_and_h141_bestv2${item.poster_path}`
                          : img1
                      }
                    />
                  </div>
                  <div className="cardIdentity">
                    <div>
                      <span className="movCardIdentitySpan1">
                        {" "}
                        {item.name}{" "}
                      </span>{" "}
                    </div>
                    <div>
                      <span className="cardIdentitySpan2">
                        {item.first_air_date}
                      </span>{" "}
                    </div>
                    <div>
                      <p className="movCardIdentityparagh"> {item.overview} </p>
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

export default TvShowResult;
