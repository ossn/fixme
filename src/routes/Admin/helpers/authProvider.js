import { AUTH_CHECK, AUTH_ERROR, AUTH_LOGIN, AUTH_LOGOUT } from "react-admin";
import { makeCall } from "../../../helpers/caller";

export default async (type, params) => {
  // called when the user attempts to log in
  if (type === AUTH_LOGIN) {
    const { username, password } = params;

    return await makeCall({
      call: { section: "login", job: "post" },
      params: { email: username, password }
    })
      .then(res => {
        localStorage.setItem("jwt", res.jwt);
        return Promise.resolve();
      })
      .catch(e => Promise.reject(e));
  }
  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("jwt");
    return Promise.resolve();
  }
  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  }
  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
    return localStorage.getItem("jwt") ? Promise.resolve() : Promise.reject();
  }
  return Promise.reject("Unknown method");
};
