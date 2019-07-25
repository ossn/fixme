// import Raven from "raven-js";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducerRegistry from "./reducers";

export const history = createBrowserHistory();

const initialState = {};
const middleware = [thunk, routerMiddleware(history)];

const composeEnhancers: typeof compose =
  (process.env.NODE_ENV === "development" &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(
  reducerRegistry.makeRootReducer(),
  initialState,
  composedEnhancers
);

export default store;
