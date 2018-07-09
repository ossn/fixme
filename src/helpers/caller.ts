import { conf } from "../conf/endpoints";

export interface IMakeCallOptions {
  section: string;
  job: string;
}
export interface IMakeCall {
  call: IMakeCallOptions;
  params?: { [key: string]: any };
  urlParams?: { [key: string]: string };
  demo?: boolean;
  authUrl?: boolean;
}

const assemble = (
  literal?: string,
  urlParams: { [key: string]: string } = {}
) =>
  literal == null
    ? null
    : literal.replace(/\${(\w+)}/g, (_, v) => urlParams[v] || "");

export const makeCall = ({
  call,
  params = {},
  urlParams,
  authUrl
}: IMakeCall) => {
  const jobConf = conf.endpoints[call.section][call.job];

  let endpointUrl = conf.apiBaseUrl + assemble(jobConf.segment, urlParams);
  const requestObject: RequestInit = {
    headers: {
      "Content-type": "application/json"
    },
    method: jobConf.type
  };
  if (authUrl) {
    requestObject.credentials = "include";
  }

  if (jobConf.type !== "GET") {
    requestObject.body = JSON.stringify(params);
  } else if (Object.keys(params).length !== 0) {
    endpointUrl += "?";
    Object.entries(params).forEach(([key, value]) => {
      if (value != null) {
        endpointUrl += key + "=" + value + "&";
      }
    });
  }

  return fetch(endpointUrl, requestObject)
    .then(
      response =>
        response.ok ? response.json() : Promise.reject(response.statusText)
    )
    .catch(error => {
      // tslint:disable-next-line:no-console
      console.error(error);
      return Promise.reject(error);
    });
};
