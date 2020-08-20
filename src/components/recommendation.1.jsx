import React, { Component } from "react";
import "../movie.css";
import img from "../missing.jpg";
import { Link } from "react-router-dom";
class Recommendation1 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.reclist
          ? this.props.reclist.map(item => {
              return (
                <div className="recCard">
                  <Link
                    to={{
                      pathname: "/riefkythemoviedb/tvshow",
                      state: {
                        movieId: item.id
                      }
                    }}
                  >
                    <img
                      className="recImg"
                      src={
                        item.backdrop_path
                          ? `https://image.tmdb.org/t/p/w500_and_h282_face/${item.backdrop_path}`
                          : img
                      }
                      alt=""
                    />
                  </Link>
                  <span>
                    {item.original_title
                      ? `${item.original_title}`
                      : `${item.original_name}`}{" "}
                  </span>
                </div>
              );
            })
          : "Data Recommendation not found."}
      </React.Fragment>
    );
  }
}

export default Recommendation1;
