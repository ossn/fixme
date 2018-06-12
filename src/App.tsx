import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { Provider } from "react-redux";
import { Routes } from "./routes";
import store from "./store/createStore";
import { history } from "./store/createStore";

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
