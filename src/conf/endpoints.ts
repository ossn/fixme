export interface IJobConf {
  type?: string;
  segment?: "GET" | "PUT" | "POST" | "DELETE";
}

// Define endpoints
const endpoints = {
  issues: {
    getIssues: {
      segment: "data/${dash_type}/${campaign}/${question}",
      type: "GET"
    }
  }
};
export let conf = {
  apiBaseUrl: "https://data-api-dev.pprl.io/api/v1/",
  endpoints
};

// FIXME: Change apiUrl based on env
if (process.env.REACT_APP_ENV === "development") {
  conf = {
    apiBaseUrl: "https://data-api-dev.pprl.io/api/v1/",
    endpoints
  };
}

// if (__DEVELOP__) {
//   conf = {
//     apiBaseUrl: "https://data-api-dev.pprl.io/api/v1/",
//     authUrl: "https://dev-access.pureprofile.com/api/v1/",
//     demoUrl: "https://rscd-demo.pureprofile.com/",
//     endpoints
//   };
// }

// if (__STAGING__) {
//   conf = {
//     apiBaseUrl: "https://data-api-dev.pprl.io/api/v1/",
//     authUrl: "https://staging-access.pureprofile.com/api/v1/",
//     demoUrl: "https://rscd-demo.pureprofile.com/",
//     endpoints
//   };
// }

// if (__PROD__) {
//   conf = {
//     apiBaseUrl: "https://data-api-dev.pprl.io/api/v1/",
//     authUrl: "https://access.pureprofile.com/api/v1/",
//     demoUrl: "https://rscd-demo.pureprofile.com/",
//     endpoints
//   };
// }
