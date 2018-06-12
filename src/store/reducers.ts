import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers } from "redux";

import homeReducer, { IHomeState } from "../routes/Home/modules/homeReducer";
import issueReducer from "../routes/Issues/modules/issuesReducer";
import { IIssuesState } from "./../routes/Issues/modules/issuesReducer";
import { history } from "./createStore";

// interface IStoreEnchancer {}

export interface IRootState {
  issues: IIssuesState;
  router: RouterState;
  home: IHomeState;
}

export class ReducerRegistry {
  // TODO: Dynamicly inject reducers for code spliting
  // public asyncReducers = {};
  // constructor() {
  //   this.asyncReducers = {};
  // }

  // public injectReducer = (
  //   currentStore: typeof store,
  //   { key, reducer }: { key: string; reducer?: Reducer<any> },
  //   forceInject?: boolean
  // ) => {
  //   if (!forceInject && Object.hasOwnProperty.call(this.asyncReducers, key)) {
  //     return;
  //   }
  //   this.asyncReducers[key] = reducer;
  //   currentStore.replaceReducer(this.makeRootReducer());
  // };

  public makeRootReducer = () =>
    connectRouter(history)(
      combineReducers({
        issues: issueReducer,
        home: homeReducer
        // ...this.asyncReducers
      })
    );
}

const reducerRegistry = new ReducerRegistry();
export default reducerRegistry;
