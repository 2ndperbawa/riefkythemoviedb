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
            <Route exact path="/riefkythemoviedb" component={Home} />
            <Route exact path="/riefkythemoviedb/404" component={NotFound} />
            <Route
              exact
              path="/riefkythemoviedb/popularmovies"
              component={Popular}
            />
            <Route exact path="/riefkythemoviedb/movie" component={Movie} />
            <Route
              exact
              path="/riefkythemoviedb/searchpeople"
              component={Allpeople}
            />
            <Route exact path="/riefkythemoviedb/people" component={People} />
            <Route
              exact
              path="/riefkythemoviedb/populartvshows"
              component={AllTvShows}
            />
            <Route exact path="/riefkythemoviedb/tvshow" component={TvShow} />
            <Route exact path="/riefkythemoviedb/search" component={Search} />
            <Redirect to="/riefkythemoviedb/404" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
