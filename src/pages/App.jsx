import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import MovieSlider from "../components/movieSlider";
import TrailerSlider from "../components/trailerSlider";
import Footer from "../components/footer";
import TvSlider from "../components/tvSlider";
import SkeletonSlider from "../components/skeletonSlider";
import { Link, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: "",
      redirect: false,
      list: []
    };

    this.keyword = React.createRef();

    let url =
      "https://api.themoviedb.org/3/movie/popular?api_key=890fb371f22db088105d415f5cafd470&language=en-US&page=1";
    fetch(url)
      .then(response => response.json())
      .then(this.buildList)
      .catch();
  }

  buildList = data => {
    this.setState({ list: data });
  };

  submitForm = event => {
    event.preventDefault();
    this.setState({ searchKeyword: this.keyword.current.value });
    window.setTimeout(() => {
      this.setState({ redirect: true });
    }, 100);
  };
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/riefkythemoviedb/search",
            state: {
              searchKeyword: this.state.searchKeyword
            }
          }}
        />
      );
    } else {
      return (
        <div className="App">
          <div className="topHeader">
            <h3 className="header-h1"> Welcome. </h3>
            <h3 className="header-h2">
              {" "}
              Explore millions of movies, TV show and people here.{" "}
            </h3>
            <div className="pencarian">
              <form onSubmit={this.submitForm}>
                <input
                  className="pencarian-form"
                  name="searchKeyword"
                  type="text"
                  placeholder="Search for movie, tv show, person"
                  ref={this.keyword}
                ></input>

                <button type="submit" className="pencarian-tombol">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
          </div>
          <div className="middle">
            {this.state.list ? <MovieSlider /> : <SkeletonSlider />}
            <br />
            <TvSlider /> <br />
            <TrailerSlider />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default App;
