import React, { Component } from "react";
import "../searchPage2.css";
import { faCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import img from "../default.svg";
import img1 from "../missing.jpg";
import Footer from "../components/footer";
import MovieResult from "../components/movieResult";
import PeopleResult from "../components/peopleResult";
import TvShowResult from "../components/tvshowResult";
import Pagination from "react-js-pagination";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      tvshow: [],
      person: [],
      movieToggle: "searchBottomLeft-catlistb1",
      tvshowToggle: "searchBottomLeft-catlistb2",
      personToggle: "searchBottomLeft-catlistb2",
      empty: ["1", "1", "1", "1", "1"],
      tab: 1,
      moviePage: 1,
      tvshowPage: 1,
      personPage: 1,
      firstSearch: true,
      sKeyword: ""
    };

    if (this.props.location.state) {
      const { searchKeyword } = this.props.location.state;

      this.reFetch(searchKeyword);
    }

    this.keywordInput = React.createRef();
  }

  buildList1 = data => {
    console.log(data);
    data && this.setState({ movie: data });
  };

  buildList2 = data => {
    console.log(data);
    data && this.setState({ tvshow: data });
  };

  buildList3 = data => {
    console.log(data);
    data && this.setState({ person: data });
  };

  reFetch = keyword => {
    let url1 = `https://api.themoviedb.org/3/search/movie?api_key=890fb371f22db088105d415f5cafd470&query=${keyword}&language=en-US&page=1&include_adult=false`;
    let url2 = `https://api.themoviedb.org/3/search/tv?api_key=890fb371f22db088105d415f5cafd470&query=${keyword}&language=en-US&page=1&include_adult=false`;
    let url3 = `https://api.themoviedb.org/3/search/person?api_key=890fb371f22db088105d415f5cafd470&query=${keyword}&language=en-US&page=1&include_adult=false`;

    fetch(url1)
      .then(response => response.json())
      .then(this.buildList1)
      .catch();

    fetch(url2)
      .then(response => response.json())
      .then(this.buildList2)
      .catch();

    fetch(url3)
      .then(response => response.json())
      .then(this.buildList3)
      .catch();
  };

  reFetch2 = keyword => {
    keyword.preventDefault();
    window.scrollTo(0, 0);
    this.setState({
      movie: [],
      tvshow: [],
      person: [],
      moviePage: 1,
      tvshowPage: 1,
      personPage: 1,
      firstSearch: false
    });
    let url1 = `https://api.themoviedb.org/3/search/movie?api_key=890fb371f22db088105d415f5cafd470&query=${this.keywordInput.current.value}&language=en-US&page=1&include_adult=false`;
    let url2 = `https://api.themoviedb.org/3/search/tv?api_key=890fb371f22db088105d415f5cafd470&query=${this.keywordInput.current.value}&language=en-US&page=1&include_adult=false`;
    let url3 = `https://api.themoviedb.org/3/search/person?api_key=890fb371f22db088105d415f5cafd470&query=${this.keywordInput.current.value}&language=en-US&page=1&include_adult=false`;

    fetch(url1)
      .then(response => response.json())
      .then(this.buildList1)
      .catch();

    fetch(url2)
      .then(response => response.json())
      .then(this.buildList2)
      .catch();

    fetch(url3)
      .then(response => response.json())
      .then(this.buildList3)
      .catch();
  };

  fMovieRepage = page => {
    window.scrollTo(0, 0);
    this.setState({ movie: [] });
    if (this.props.location.state) {
      const { searchKeyword } = this.props.location.state;
      this.setState({ moviePage: page });
      let url1 = `https://api.themoviedb.org/3/search/movie?api_key=890fb371f22db088105d415f5cafd470&query=${searchKeyword}&language=en-US&page=${page}&include_adult=false`;

      fetch(url1)
        .then(response => response.json())
        .then(this.buildList1)
        .catch();
    }
  };

  lMovieRepage = page => {
    window.scrollTo(0, 0);
    this.setState({ movie: [] });
    this.setState({ moviePage: page });
    let url1 = `https://api.themoviedb.org/3/search/movie?api_key=890fb371f22db088105d415f5cafd470&query=${this.keywordInput.current.value}&language=en-US&page=${page}&include_adult=false`;

    fetch(url1)
      .then(response => response.json())
      .then(this.buildList1)
      .catch();
  };

  fTvRepage = page => {
    window.scrollTo(0, 0);
    this.setState({ tvshow: [] });
    if (this.props.location.state) {
      const { searchKeyword } = this.props.location.state;
      this.setState({ tvshowPage: page });
      let url2 = `https://api.themoviedb.org/3/search/tv?api_key=890fb371f22db088105d415f5cafd470&query=${searchKeyword}&language=en-US&page=${page}&include_adult=false`;

      fetch(url2)
        .then(response => response.json())
        .then(this.buildList2)
        .catch();
    }
  };

  lTvRepage = page => {
    window.scrollTo(0, 0);
    this.setState({ tvshow: [] });
    this.setState({ tvshowPage: page });
    let url2 = `https://api.themoviedb.org/3/search/tv?api_key=890fb371f22db088105d415f5cafd470&query=${this.keywordInput.current.value}&language=en-US&page=${page}&include_adult=false`;

    fetch(url2)
      .then(response => response.json())
      .then(this.buildList2)
      .catch();
  };

  fPersonRepage = page => {
    window.scrollTo(0, 0);
    this.setState({ person: [] });
    if (this.props.location.state) {
      const { searchKeyword } = this.props.location.state;
      this.setState({ personPage: page });
      let url3 = `https://api.themoviedb.org/3/search/person?api_key=890fb371f22db088105d415f5cafd470&query=${searchKeyword}&language=en-US&page=${page}&include_adult=false`;

      fetch(url3)
        .then(response => response.json())
        .then(this.buildList3)
        .catch();
    }
  };

  lPersonRepage = page => {
    window.scrollTo(0, 0);
    this.setState({ person: [] });
    this.setState({ personPage: page });
    let url3 = `https://api.themoviedb.org/3/search/person?api_key=890fb371f22db088105d415f5cafd470&query=${this.keywordInput.current.value}&language=en-US&page=${page}&include_adult=false`;

    fetch(url3)
      .then(response => response.json())
      .then(this.buildList3)
      .catch();
  };

  componentDidMount(){
    this.keywordInput.current.focus();
  }



  render() {
    if (this.props.location.state) {
      const { searchKeyword } = this.props.location.state;
      var key = searchKeyword;
    }

    return (
      <div className="App searchPage searchPage1 ">
        <div className="searchTop">
          <form className="searchTop-form" onSubmit={this.reFetch2}>
            <div className="searchTop-formDiv">
              <div>
                {" "}
                <FontAwesomeIcon
                  style={{
                    marginTop: "13px",
                    fontSize: "15px",
                    marginRight: "11px"
                  }}
                  icon={faSearch}
                />
              </div>
              <div className="searchTop-inputDiv">
                <input
                  placeholder=" search"
                  type="text"
                  className="searchTop-input"
                  ref={this.keywordInput}
                />{" "}
              </div>
              <div className="searchTop-formMiddle"> </div>
              <div className="searchTop-buttonDiv">
                <button type="submit" className="searchTop-button">
                  {" "}
                  Search{" "}
                </button>{" "}
              </div>
            </div>
          </form>
        </div>
        <div className="searchBottom">
          <div className="searchBottom-left">
            {
              <div className="searchBottomLeft-catlist">
                <div className="searchBottomLeft-catlisth">
                  {" "}
                  <h4> Search Result </h4>{" "}
                </div>
                <div
                  onClick={() => {
                    this.setState({
                      tab: 1,
                      movieToggle: "searchBottomLeft-catlistb1",
                      tvshowToggle: "searchBottomLeft-catlistb2",
                      personToggle: "searchBottomLeft-catlistb2"
                    });
                    this.keywordInput.current.focus();
                  }}
                  className={this.state.movieToggle}
                >
                  {" "}
                  <div className="searchBottomLeft-catlistb1div">
                    <h4 className="searchBottomLeft-catlistb1h4"> Movies </h4>{" "}
                  </div>{" "}
                  <div className="resultCount">
                    {" "}
                    {this.state.movie.total_results
                      ? this.state.movie.total_results
                      : 0}{" "}
                  </div>{" "}
                </div>
                <div
                  onClick={() => {
                    this.setState({
                      tab: 2,
                      movieToggle: "searchBottomLeft-catlistb2",
                      tvshowToggle: "searchBottomLeft-catlistb1",
                      personToggle: "searchBottomLeft-catlistb2"
                    });
                    this.keywordInput.current.focus();
                  }}
                  className={this.state.tvshowToggle}
                >
                  {" "}
                  <div className="searchBottomLeft-catlistb1div">
                    <h4 className="searchBottomLeft-catlistb1h4"> TV Shows </h4>{" "}
                  </div>{" "}
                  <div className="resultCount">
                    {" "}
                    {this.state.tvshow.total_results
                      ? this.state.tvshow.total_results
                      : 0}{" "}
                  </div>{" "}
                </div>
                <div
                  onClick={() => {
                    this.setState({
                      tab: 3,
                      movieToggle: "searchBottomLeft-catlistb2",
                      tvshowToggle: "searchBottomLeft-catlistb2",
                      personToggle: "searchBottomLeft-catlistb1"
                    });
                    this.keywordInput.current.focus();
                  }}
                  className={this.state.personToggle}
                >
                  {" "}
                  <div className="searchBottomLeft-catlistb1div">
                    <h4 className="searchBottomLeft-catlistb1h4"> People </h4>{" "}
                  </div>{" "}
                  <div className="resultCount">
                    {" "}
                    {this.state.person.total_results
                      ? this.state.person.total_results
                      : 0}
                  </div>{" "}
                </div>
              </div>
            }
          </div>
          <div className="searchBottom-right">
            {this.state.tab == 1 && (
              <React.Fragment>
                <MovieResult results={this.state.movie.results} />
                {this.state.firstSearch ? (
                  <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={this.state.moviePage}
                    itemsCountPerPage={20}
                    totalItemsCount={this.state.movie.total_results}
                    onChange={this.fMovieRepage}
                  />
                ) : (
                  <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={this.state.moviePage}
                    itemsCountPerPage={20}
                    totalItemsCount={this.state.movie.total_results}
                    onChange={this.lMovieRepage}
                  />
                )}
              </React.Fragment>
            )}
            {this.state.tab == 2 && (
              <React.Fragment>
                <TvShowResult results={this.state.tvshow.results} />
                {this.state.firstSearch ? (
                  <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={this.state.tvshowPage}
                    itemsCountPerPage={20}
                    totalItemsCount={this.state.tvshow.total_results}
                    onChange={this.fTvRepage}
                  />
                ) : (
                  <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={this.state.tvshowPage}
                    itemsCountPerPage={20}
                    totalItemsCount={this.state.tvshow.total_results}
                    onChange={this.lTvRepage}
                  />
                )}
              </React.Fragment>
            )}
            {this.state.tab == 3 && (
              <React.Fragment>
                <PeopleResult results={this.state.person.results} />
                {this.state.firstSearch ? (
                  <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={this.state.personPage}
                    itemsCountPerPage={20}
                    totalItemsCount={this.state.person.total_results}
                    onChange={this.fPersonRepage}
                  />
                ) : (
                  <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={this.state.personPage}
                    itemsCountPerPage={20}
                    totalItemsCount={this.state.person.total_results}
                    onChange={this.lPersonRepage}
                  />
                )}
              </React.Fragment>
            )}
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Search;
