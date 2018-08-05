import { Dispatch } from "redux";
import { IMakeCall, makeCall } from "../../../helpers/caller";
import { issuesListMockData } from "../../../helpers/mockData";

export type Status = "loading" | "ready" | "error";
export interface IIssuesState {
  readonly issuesList?: typeof issuesListMockData;
  readonly issuesLength: number;
  readonly status: Status;
}

// ------------------------------------
// Actions
// ------------------------------------
export enum IssueActions {
  GET_ISSUES = "GET_ISSUES",
  SET_ISSUE_STATUS = "SET_ISSUE_STATUS"
}

// --------------------------------------------------
// Map actions and their payload to type consts
// --------------------------------------------------
export const getIssues = (params: any) => (dispatch: Dispatch) => {
  dispatch({
    type: IssueActions.SET_ISSUE_STATUS,
    action: { payload: "loading" }
  });
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
    issuesLength: (action.payload || []).length,
    status: "ready"
  }),
  [IssueActions.SET_ISSUE_STATUS]: (state: IIssuesState, { action }: any) => ({
    ...state,
    status: action.payload
  })
};

// --------------------------------------------------
// Reducer
// --------------------------------------------------
const initialState: Partial<IIssuesState> = {
  issuesList: [],
  issuesLength: 0,
  status: "loading"
};
export default function issueReducer(
  state = initialState,
  action: any
): IIssuesState {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
