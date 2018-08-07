import { Dispatch } from "redux";
import { IMakeCall, makeCall } from "../../../helpers/caller";
import { issuesListMockData } from "../../../helpers/mockData";

export type Status = "loading" | "ready" | "error" | "fetching";
export interface IIssuesState {
  readonly issuesList?: typeof issuesListMockData;
  readonly issuesLength: number;
  readonly status: Status;
  readonly page: number;
}

// ------------------------------------
// Actions
// ------------------------------------
export enum IssueActions {
  GET_ISSUES = "GET_ISSUES",
  SET_ISSUE_STATUS = "SET_ISSUE_STATUS",
  COUNT_ISSUES = "COUNT_ISSUES"
}

// --------------------------------------------------
// Map actions and their payload to type consts
// --------------------------------------------------
export const getIssues = (params: any, page = 1) => (dispatch: Dispatch) => {
  dispatch({
    type: IssueActions.SET_ISSUE_STATUS,
    action: { payload: "loading" }
  });

  let url = page ? `?page=${page}&` : "?";
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

  dispatch(countIssues({}, url) as any);
  if (url !== "?") {
    callParams.urlParams = { search: url };
  }

  return makeCall(callParams)
    .then((issues = []) =>
      dispatch({
        type: IssueActions.GET_ISSUES,
        action: { payload: issues, page }
      })
    ) // tslint:disable-next-line:no-console
    .catch((e: Error) => console.error(e));
};

export const countIssues = (params?: any, url?: string) => (
  dispatch: Dispatch
) => {
  let urlCopy = url;
  if (!urlCopy && params) {
    urlCopy = "?";
    Object.entries(params).forEach(
      ([key, value]) =>
        (urlCopy += `${key}=${
          ["undefined", "string"].includes(typeof value)
            ? value
            : JSON.stringify(value)
        }&`)
    );
  }
  const callParams: IMakeCall = {
    call: { section: "issues", job: "count" }
  };
  if (urlCopy && urlCopy !== "?") {
    callParams.urlParams = { search: urlCopy };
  }
  return (
    makeCall(callParams)
      .then((issueCount = 0) =>
        dispatch({
          type: IssueActions.COUNT_ISSUES,
          action: { payload: issueCount }
        })
      )
      // tslint:disable-next-line:no-console
      .catch((e: Error) => console.error(e))
  );
};

// --------------------------------------------------
// Action Handlers
// --------------------------------------------------
export const ACTION_HANDLERS = {
  [IssueActions.GET_ISSUES]: (state: IIssuesState, { action }: any) => ({
    ...state,
    issuesList: action.payload,
    page: action.page,
    status: "ready"
  }),
  [IssueActions.COUNT_ISSUES]: (state: IIssuesState, { action }: any) => ({
    ...state,
    issuesLength: action.payload
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
  status: "loading",
  page: 1
};
export default function issueReducer(
  state = initialState,
  action: any
): IIssuesState {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
