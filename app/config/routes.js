// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

import Main from "../components/Main";

import Search from "../components/children/Search"

import Results from "../components/children/Results";

import Saved from "../components/children/Saved";

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="search" component={Search} />
    <Route path="results" component={Results} />
    <Route path="saved" component={Saved} />
  </Route>
   
  </Router>

);