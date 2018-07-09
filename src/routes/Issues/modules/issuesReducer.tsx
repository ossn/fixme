import { Dispatch } from "redux";
import { IMakeCall, makeCall } from "../../../helpers/caller";
import { issuesListMockData } from "../../../helpers/mockData";

export interface IIssuesState {
  readonly issuesList?: typeof issuesListMockData;
  readonly issuesLength: number;
}

// ------------------------------------
// Actions
// ------------------------------------
export enum IssueActions {
  GET_ISSUES = "GET_ISSUES"
}

// --------------------------------------------------
// Map actions and their payload to type consts
// --------------------------------------------------
export const getIssues = (params: any) => (dispatch: Dispatch) => {
  let url = "?";
  Object.entries(params).forEach(
    ([key, value]) =>
      (url += `${key}=${
        ["undefined", "string"].includes(typeof value)
          ? value
          : JSON.stringify(value)
      }&`)
  );
  const callParams: IMakeCall = {
    call: { section: "issues", job: "get" }
  };
  if (url !== "?") {
    callParams.urlParams = { search: url };
  }
  return makeCall(callParams).then((issues = []) =>
    dispatch({ type: IssueActions.GET_ISSUES, action: { payload: issues } })
  );
};

// --------------------------------------------------
// Action Handlers
// --------------------------------------------------
export const ACTION_HANDLERS = {
  [IssueActions.GET_ISSUES]: (state: IIssuesState, { action }: any) => ({
    ...state,
    issuesList: action.payload,
    issuesLength: (action.payload || []).length
  })
};

// --------------------------------------------------
// Reducer
// --------------------------------------------------
const initialState: Partial<IIssuesState> = {
  issuesList: [],
  issuesLength: 0
};
export default function issueReducer(
  state = initialState,
  action: any
): IIssuesState {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
