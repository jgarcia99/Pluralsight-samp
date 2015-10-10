"use strict";

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={(require('./components/homePage'))} />
        <Route name="authors" handler={require('./components/authors/authorPage')} /> {/*name is the path name like /authors or path will overwrite it*/}
        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <NotFoundRoute handler={require('./components/notFoundPage')} />
        <Redirect from="about-us" to="about" /> {/* from is old path to is new Path*/}
        <Redirect from="awthrus" to="authors" />
        <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;
