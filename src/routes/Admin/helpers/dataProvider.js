import { stringify } from "query-string";
import {
  CREATE,
  DELETE,
  fetchUtils,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE
} from "react-admin";
import { conf } from "../../../conf/endpoints";

const API_URL = conf.apiBaseUrl;

/**
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertDataProviderRequestToHTTP = (type, resource, params) => {
  switch (type) {
    case GET_LIST: {
      const { page } = params.pagination;
      return { url: `${API_URL}${resource}?page=${page}` };
    }
    case GET_ONE:
      return { url: `${API_URL}${resource}/${params.id}` };
    case GET_MANY: {
      const query = {
        filter: JSON.stringify({ id: params.ids })
      };
      return { url: `${API_URL}${resource}?${stringify(query)}` };
    }
    case GET_MANY_REFERENCE: {
      const { page } = params.pagination;
      return { url: `${API_URL}/${resource}?page=${page}` };
    }
    case UPDATE:
      return {
        url: `${API_URL}${resource}/${params.id}`,
        options: { method: "PUT", body: JSON.stringify(params.data) }
      };
    case CREATE:
      return {
        url: `${API_URL}${resource}`,
        options: { method: "POST", body: JSON.stringify(params.data) }
      };
    case DELETE:
      return {
        url: `${API_URL}${resource}/${params.id}`,
        options: { method: "DELETE" }
      };
    default:
      throw new Error(`Unsupported fetch action type ${type}`);
  }
};

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} Data Provider response
 */
const convertHTTPResponseToDataProvider = (
  response,
  type,
  resource,
  params
) => {
  const { headers, json } = response;
  switch (type) {
    case GET_LIST:
      const pagination =
        headers.get("X-Pagination") || headers.get("x-pagination");
      const total = JSON.parse(pagination).total_pages;
      return {
        data: json,
        total: 1 || parseInt(total, 10)
      };
    case CREATE:
      return { data: { ...params.data, id: json.id } };
    default:
      return { data: json };
  }
};

/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */
export default (type, resource, params) => {
  const { fetchJson } = fetchUtils;
  const { url, options = {} } = convertDataProviderRequestToHTTP(
    type,
    resource,
    params
  );
  const jwt = localStorage.getItem("jwt");
  if (!(options || {}).headers) {
    options.headers = new Headers();
  }
  options.headers.set("Content-type", "application/json");
  if (jwt) {
    options.headers.set("Authorization", `Bearer ${jwt}`);
  }
  return fetchJson(url, options).then(response =>
    convertHTTPResponseToDataProvider(response, type, resource, params)
  );
};
