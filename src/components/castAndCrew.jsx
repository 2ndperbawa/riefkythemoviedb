import React, { Component } from "react";
import "../movie.css";
import img from "../default.svg";
import { Link } from "react-router-dom";
class CastAndCrew extends Component {
  render() {
    return (
      <div className="MBI-castCard">
        {this.props.castCrew.cast
          ? this.props.castCrew.cast.slice(0, 8).map(item => {
              return (
                <div className="castCard">
                  <Link
                    to={{
                      pathname: "/people",
                      state: {
                        peopleId: item.id
                      }
                    }}
                  >
                    <img
                      className="castCard-img"
                      src={
                        item.profile_path != null
                          ? `https://image.tmdb.org/t/p/w138_and_h175_face${item.profile_path}`
                          : img
                      }
                      alt=""
                    />
                  </Link>
                  <Link
                    to={{
                      pathname: "/people",
                      state: {
                        peopleId: item.id
                      }
                    }}
                    className="castCard-name"
                  >
                    {item.name}
                  </Link>
                  <span className="castCard-role">{item.character}</span>
                </div>
              );
            })
          : "Data cast not found."}
      </div>
    );
  }
}

export default CastAndCrew;
