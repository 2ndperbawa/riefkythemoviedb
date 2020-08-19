import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../TMDB2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideWidth: "0%",
      searchNavTop: "0px",
      menuIcon: faBars,
      searchIcon: faSearch,
      searchKeyword: "",
      redirect: false
    };

    this.searchInput = React.createRef();
  }

  submitForm = event => {
    event.preventDefault();
    this.setState({ searchKeyword: this.searchInput.current.value });
    window.setTimeout(() => {
      this.setState({
        redirect: true,
        searchNavTop: "0px",
        searchIcon: faSearch
      });
    }, 100);
  };

  render() {
    return (
      <React.Fragment>
        {this.state.redirect && (
          <Redirect
            to={{
              pathname: "/search",
              state: {
                searchKeyword: this.state.searchKeyword
              }
            }}
          />
        )}

        <div style={{ width: this.state.sideWidth }} class="sidenav">
          <Link
            onClick={() => {
              if (this.state.sideWidth == "0%") {
                this.setState({ sideWidth: "100%", menuIcon: faTimes });
              } else {
                this.setState({ sideWidth: "0%", menuIcon: faBars });
              }
            }}
            to="/popularmovies"
          >
            Movies
          </Link>
          <Link
            onClick={() => {
              if (this.state.sideWidth == "0%") {
                this.setState({ sideWidth: "100%", menuIcon: faTimes });
              } else {
                this.setState({ sideWidth: "0%", menuIcon: faBars });
              }
            }}
            to="/populartvshows"
          >
            TV Shows
          </Link>
          <Link
            onClick={() => {
              if (this.state.sideWidth == "0%") {
                this.setState({ sideWidth: "100%", menuIcon: faTimes });
              } else {
                this.setState({ sideWidth: "0%", menuIcon: faBars });
              }
            }}
            to="/searchpeople"
          >
            People
          </Link>
        </div>
        <div className="navigasi">
          <div className="sub-nav nav-logo">
            {" "}
            <Link to="/">
              <img className="tmdbLogo" src={logo} alt="" />{" "}
            </Link>
          </div>
          <div className="sub-nav subNav-middle"></div>
          <div className="sub-nav ">
            <Link to="/popularmovies" className="subNav-a subNav-movies">
              Movies
            </Link>
          </div>
          <div className=" subNav-moviesTab2">
            <Link to="/populartvshows" className="subNav-a subNav-movies">
              TV Shows
            </Link>
          </div>
          <div className="sub-nav">
            <Link to="/searchpeople" className="subNav-a subNav-movies">
              People
            </Link>
          </div>
          <div
            onClick={() => {
              if (this.state.searchNavTop == "0px") {
                this.setState({ searchNavTop: "66px", searchIcon: faTimes });
                this.searchInput.current.focus();
              } else {
                this.setState({ searchNavTop: "0px", searchIcon: faSearch });
              }
            }}
            className="sub-nav subNav-search"
          >
            {" "}
            <FontAwesomeIcon
              className="searchIcon"
              icon={this.state.searchIcon}
              size="lg"
            />
          </div>
          <div
            onClick={() => {
              if (this.state.sideWidth == "0%") {
                this.setState({ sideWidth: "100%", menuIcon: faTimes });
              } else {
                this.setState({ sideWidth: "0%", menuIcon: faBars });
              }
            }}
            className="sub-nav subNav-menu"
          >
            <FontAwesomeIcon
              className="menuIcon"
              icon={this.state.menuIcon}
              size="lg"
            />
          </div>
        </div>
        <div style={{ top: this.state.searchNavTop }} className="searchNav">
          <form className="searchForm" onSubmit={this.submitForm}>
            <input
              ref={this.searchInput}
              className="searchInput"
              type="text"
              placeholder="Search for movie, tv show, person"
            />{" "}
            <button type="submit" className="searchButton" type="submit">
              {" "}
              <FontAwesomeIcon icon={faSearch} size="sm" />
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
