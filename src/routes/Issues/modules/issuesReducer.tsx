import { issuesListMockData } from "../../../helpers/mockData";

export interface IIssuesState {
  readonly issuesList: typeof issuesListMockData;
}

// ------------------------------------
// Actions
// ------------------------------------
export enum HomeActions {}

// --------------------------------------------------
// Map actions and their payload to type consts
// --------------------------------------------------

export const actions = {};
// --------------------------------------------------
// Action Handlers
// --------------------------------------------------
export const ACTION_HANDLERS = {};
// --------------------------------------------------
// Reducer
// --------------------------------------------------
const initialState: Partial<IIssuesState> = {
  issuesList: issuesListMockData
};
export default function issueReducer(
  state = initialState,
  action: any
): IIssuesState {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
