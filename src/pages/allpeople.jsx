import React, { Component } from "react";
import "../searchPage.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

class Allpeople extends Component {
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
      },
      page: 1,
      totalPage: 0
    };

    let url = `https://api.themoviedb.org/3/person/popular?api_key=890fb371f22db088105d415f5cafd470&language=en-US&page=1`;
    fetch(url)
      .then(response => response.json())
      .then(this.buildList)
      .catch();
  }

  buildList = data => {
    console.log(data);
    this.setState({ list: data.results, totalPage: data.total_pages });
  };

  buildList2 = data => {
    console.log(data.results);
    var joined = this.state.list.concat(data.results);
    console.log(joined);
    this.setState({ list: joined });
  };

  addList = page1 => {
    let url = `https://api.themoviedb.org/3/person/popular?api_key=890fb371f22db088105d415f5cafd470&language=en-US&page=${page1}`;
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
        <div className="App allPeoplePage">
          <div className="settingBarPeople">
            <h3> People </h3>
          </div>
          <div className="contentPeople">
            {this.state.list.map(item => {
              return (
                <div key={item.id} className="people-container-search">
                  <div className="card-people-search">
                    <Link
                      to={{
                        pathname: "/people",
                        state: {
                          peopleId: item.id
                        }
                      }}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w235_and_h235_face${item.profile_path}`}
                        alt=""
                        className="people-img-search"
                      />
                    </Link>
                    <div className="movie-title-search">
                      <Link
                        to={{
                          pathname: "/people",
                          state: {
                            movieId: item.id
                          }
                        }}
                      >
                        <h5 className="peopleTitle-text-search">{item.name}</h5>
                      </Link>
                    </div>
                    <div className="peopleMovie">
                      <div className="peopleMovieSpan">
                        {item.known_for &&
                          item.known_for.map(item1 => {
                            return `${
                              item1.original_title
                                ? item1.original_title
                                : item1.name
                            }, `;
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              onClick={() => {
                this.addList(this.state.page + 1);
              }}
              className="loadMorePeople"
            >
              <button className="loadMoreButton"> Load More </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Allpeople;
