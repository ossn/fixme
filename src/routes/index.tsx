import * as React from "react";
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
const RedirectComponent = () => <Redirect to="/" push={true} />;

export const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact={true} />
    <Route path="/issues" component={Issues} exact={true} />

    <Route render={RedirectComponent} />
  </Switch>
);
