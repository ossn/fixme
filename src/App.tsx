import { ConnectedRouter } from "connected-react-router";
import React from "react";
import ReactGA from "react-ga";
import { Provider } from "react-redux";
import { develop, local } from "./helpers/helpers";
import { Routes } from "./routes";
import store from "./store/createStore";
import { history } from "./store/createStore";

if (!develop || !local) {
  ReactGA.initialize("UA-84301250-18");
}
class App extends React.Component {
  public render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div className="core-layout__viewport container-fluid">
              <Routes />
            </div>
          </ConnectedRouter>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default App;
