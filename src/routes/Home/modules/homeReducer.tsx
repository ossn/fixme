import { createAction } from "typesafe-actions";

export interface IHomeState {
  readonly language: string[];
  readonly issue_type: string;
  readonly experience_needed: string;
}

// ------------------------------------
// Actions
// ------------------------------------
export enum HomeActions {
  UPDATE_LANGUAGE = "UPDATE_LANGUAGE",
  UPDATE_TYPE = "UPDATE_TYPE",
  UPDATE_LEVEL = "UPDATE_LEVEL"
}

// --------------------------------------------------
// Map actions and their payload to type consts
// --------------------------------------------------
export const updateLanguage = createAction(
  HomeActions.UPDATE_LANGUAGE,
  resolve => (languages: string[]) => resolve(languages)
);
export const updateType = createAction(
  HomeActions.UPDATE_TYPE,
  resolve => (type: string) => resolve(type)
);
export const updateLevel = createAction(
  HomeActions.UPDATE_LEVEL,
  resolve => (level: string) => resolve(level)
);
// const appendToProjects = createAction(
//   HomeActions.PROJECTS_DATA,
//   resolve => (data, existingProjects) => {
//     data.projects.unshift(...existingProjects);
//     return resolve(data);
//   }
// );

// const somethingWentWrong = createAction(
//   HomeActions.DASHBOARD_LISTING_ERROR,
//   resolve => (data: any) => {
//     // tslint:disable-next-line:no-console
//     console.error(data);
//     return resolve();
//   }
// );

export const actions = {
  updateLanguage
};
// --------------------------------------------------
// Action Handlers
// --------------------------------------------------
export const ACTION_HANDLERS = {
  [HomeActions.UPDATE_LANGUAGE]: (state: IHomeState, { payload }: any) => ({
    ...state,
    language: payload
  }),
  [HomeActions.UPDATE_TYPE]: (state: IHomeState, { payload }: any) => ({
    ...state,
    issue_type: payload ? [payload] : undefined
  }),
  [HomeActions.UPDATE_LEVEL]: (state: IHomeState, { payload }: any) => ({
    ...state,
    experience_needed: payload ? [payload] : undefined
  })
};
// --------------------------------------------------
// Reducer
// --------------------------------------------------
const initialState: Partial<IHomeState> = {};
export default function homeReducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
