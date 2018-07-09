export interface IJobConf {
  type?: string;
  segment?: "GET" | "PUT" | "POST" | "DELETE";
}

// Define endpoints
const endpoints = {
  issues: {
    get: {
      segment: "issues/${search}",
      type: "GET"
    }
  },
  metadata: {
    get: {
      segment: "metadata/",
      type: "GET"
    }
  },
  projects: {
    get: {
      segment: "projects/",
      type: "GET"
    }
  }
};

export let conf = {
  apiBaseUrl: "https://api.ossn.club/",
  endpoints
};

if (process.env.REACT_APP_ENV === "development") {
  conf = {
    apiBaseUrl: "http://localhost:8000/",
    endpoints
  };
}
