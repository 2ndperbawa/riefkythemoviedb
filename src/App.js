import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//pages
import Home from "./pages/App";
import NotFound from "./pages/404";
import Popular from "./pages/popular";
import Movie from "./pages/movie";
import Allpeople from "./pages/allpeople";
import People from "./pages/people";
import AllTvShows from "./pages/allTvShows";
import TvShow from "./pages/tvshow";
import Search from "./pages/search";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/popularmovies" component={Popular} />
            <Route exact path="/movie" component={Movie} />
            <Route exact path="/searchpeople" component={Allpeople} />
            <Route exact path="/people" component={People} />
            <Route exact path="/populartvshows" component={AllTvShows} />
            <Route exact path="/tvshow" component={TvShow} />
            <Route exact path="/search" component={Search} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
