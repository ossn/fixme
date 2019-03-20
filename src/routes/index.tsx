import React from "react";
import { asyncComponent } from "react-async-component";
import { Redirect, Route, Switch } from "react-router";
import Spinner from "../components/Spinner";

const Home = asyncComponent({
  LoadingComponent: Spinner,
  resolve: () => import(/* webpackPrefetch: true*/ "./Home")
});
const Issues = asyncComponent({
  LoadingComponent: Spinner,
  resolve: () => import(/* webpackPrefetch: true*/ "./Issues")
});
const Projects = asyncComponent({
  LoadingComponent: Spinner,
  resolve: () => import(/* webpackPrefetch: true*/ "./Projects")
});
const About = asyncComponent({
  LoadingComponent: Spinner,
  resolve: () => import(/* webpackPrefetch: true*/ "./About")
});

const Admin = asyncComponent({
  LoadingComponent: Spinner,
  resolve: () => import(/* webpackPrefetch: true*/ "./Admin")
});

const RedirectComponent = () => <Redirect to="/" push={true} />;

export const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact={true} />
    <Route path="/issues" component={Issues} exact={true} />
    <Route path="/projects" component={Projects} exact={true} />
    <Route path="/about" component={About} exact={true} />
    <Route path="/admin" component={Admin} />

    <Route render={RedirectComponent} />
  </Switch>
);
