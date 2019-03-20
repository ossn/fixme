import { local } from "../helpers/helpers";

export interface IJobConf {
  type?: string;
  segment?: "GET" | "PUT" | "POST" | "DELETE";
}

// Define endpoints
const endpoints = {
  issues: {
    get: {
      segment: "issues${search}",
      type: "GET"
    },
    count: {
      segment: "issues-count${search}",
      type: "GET"
    }
  },
  metadata: {
    get: {
      segment: "metadata",
      type: "GET"
    }
  },
  projects: {
    get: {
      segment: "projects",
      type: "GET"
    }
  },
  login: {
    post: {
      segment: "login",
      type: "POST"
    }
  }
};

export let conf = {
  apiBaseUrl: "https://api.ossn.club/api/",
  endpoints
};

if (local) {
  conf = {
    apiBaseUrl: "http://localhost:4010/api/",
    endpoints
  };
}
