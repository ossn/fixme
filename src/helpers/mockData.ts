export const issuesListMockData = [
  {
    issue_id: 233564738,
    title: "Dockerize Project",
    experience_needed: "easy",
    expected_time: "3 hours",
    language: "python",
    tech_stack: "django",
    created_at: "2017-06-05T11:47:01Z",
    updated_at: "2017-06-06T10:35:57Z",
    issue_type: "enhancement",
    issue_number: 7,
    issue_labels: [
      {
        label_id: 613678729,
        label_name: "enhancement",
        label_color: "84b6eb",
        label_url:
          "https://api.github.com/repos/mozillacampusclubs/issue_parser_backend/labels/enhancement"
      }
    ],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_backend/issues/7",
    issue_body:
      "Dockerize this backend project for development and deployment purposes."
  },
  {
    issue_id: 233429779,
    title: "Implement expected time feature",
    experience_needed: "moderate",
    expected_time: "1 day",
    language: "python",
    tech_stack: "django",
    created_at: "2017-06-04T12:11:53Z",
    updated_at: "2017-06-06T11:30:33Z",
    issue_type: "enhancement",
    issue_number: 6,
    issue_labels: [
      {
        label_id: 613678729,
        label_name: "enhancement",
        label_color: "84b6eb",
        label_url:
          "https://api.github.com/repos/mozillacampusclubs/issue_parser_backend/labels/enhancement"
      }
    ],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_backend/issues/6",
    issue_body:
      "Right now the expected time is a string field. It should work logically so that we can easily filter issues with different expected time."
  },
  {
    issue_id: 232772370,
    title: "Configure MySQL Database",
    experience_needed: "easy",
    expected_time: "3 hrs",
    language: "sql",
    tech_stack: "django",
    created_at: "2017-06-01T05:50:38Z",
    updated_at: "2017-06-06T11:31:00Z",
    issue_number: 4,
    issue_type: "enhancement",
    issue_labels: [],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_backend/issues/4",
    issue_body:
      "Right now the app is using a sqllite3 database. Configure it to use MySQL."
  },
  {
    issue_id: 232771183,
    title:
      "Add a fetcher component to periodically fetch issues from GitHub APIs.",
    experience_needed: "senior",
    expected_time: "2 days",
    language: "python",
    tech_stack: "django, celery",
    created_at: "2017-06-01T05:40:42Z",
    issue_type: "enhancement",
    updated_at: "2017-06-06T11:31:28Z",
    issue_number: 3,
    issue_labels: [],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_backend/issues/3",
    issue_body:
      "We will be using this API for reference: https://api.github.com/repos/razat249/github-view/issues"
  },
  {
    issue_id: 234782146,
    title: "Initial Setup",
    experience_needed: "easy",
    expected_time: "3 hours",
    language: "javascript",
    tech_stack: "react.js",
    created_at: "2017-06-09T10:10:25Z",
    updated_at: "2017-06-09T10:13:41Z",
    issue_number: 1,
    issue_type: "task",
    issue_labels: [],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_frontend/issues/1",
    issue_body:
      "Use `creeat-react-app` tool for initial setup of environment, linter etc."
  },
  {
    issue_id: 234787315,
    title: "Add issue listing component to list requested issues",
    experience_needed: "easy",
    expected_time: "3 hours",
    language: "javascript",
    tech_stack: "react.js",
    created_at: "2017-06-09T10:32:45Z",
    updated_at: "2017-06-09T10:32:45Z",
    issue_type: "enhancement",
    issue_number: 3,
    issue_labels: [
      {
        label_id: 613678815,
        label_name: "enhancement",
        label_color: "84b6eb",
        label_url:
          "https://api.github.com/repos/mozillacampusclubs/issue_parser_frontend/labels/enhancement"
      }
    ],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_frontend/issues/3",
    issue_body: "Add issue listing component to list requested issues"
  },
  {
    issue_id: 235005767,
    title: "Implement an easy to use expected time feature.",
    experience_needed: "moderate",
    expected_time: "2 days",
    language: "javascript",
    tech_stack: "react.js",
    created_at: "2017-06-10T14:26:15Z",
    updated_at: "2017-06-10T14:26:31Z",
    issue_type: "enhancement",
    issue_number: 5,
    issue_labels: [],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_frontend/issues/5",
    issue_body: "Implement an easy to use `expected time` feature."
  },
  {
    issue_id: 235006561,
    title: "Add a repository name and url field to backend & frontend",
    experience_needed: "moderate",
    expected_time: "2 hours",
    language: "javascript",
    tech_stack: "react.js",
    created_at: "2017-06-10T14:41:07Z",
    updated_at: "2017-06-10T14:41:53Z",
    issue_number: 6,
    issue_type: "enhancement",
    issue_labels: [],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_frontend/issues/6",
    issue_body: "Add a `repository name` and `URL` field to backend"
  },
  {
    issue_id: 235457957,
    title: "Add sorting feature for expected time and experience level",
    experience_needed: "moderate",
    expected_time: "1 day",
    language: "python",
    tech_stack: "django",
    created_at: "2017-06-13T07:17:21Z",
    updated_at: "2017-06-13T07:17:21Z",
    issue_type: "enhancement",
    issue_number: 8,
    issue_labels: [],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_backend/issues/8",
    issue_body: "Add sorting feature for expected time and experience level."
  },
  {
    issue_id: 236652841,
    title: "Add Travis-CI for continuous integration",
    experience_needed: "moderate",
    expected_time: "1 day",
    language: "yml",
    tech_stack: "django",
    issue_type: "enhancement",
    created_at: "2017-06-17T10:27:01Z",
    updated_at: "2017-06-17T10:27:01Z",
    issue_number: 11,
    issue_labels: [],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_backend/issues/11",
    issue_body: "Add Travis-ci for continuous integration."
  },
  {
    issue_id: 236652934,
    title: "Write test-cases for back end API",
    experience_needed: "moderate",
    expected_time: "1 week",
    language: "python",
    tech_stack: "django",
    created_at: "2017-06-17T10:29:33Z",
    updated_at: "2017-06-19T17:18:35Z",
    issue_type: "enhancement",
    issue_number: 12,
    issue_labels: [],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_backend/issues/12",
    issue_body: "Test the back end api"
  },
  {
    issue_id: 235005479,
    title: "Implement sorting functionality",
    experience_needed: "moderate",
    expected_time: "1 hours",
    language: "javascript",
    tech_stack: "react.js",
    created_at: "2017-06-10T14:21:30Z",
    issue_type: "enhancement",
    updated_at: "2017-06-20T06:30:03Z",
    issue_number: 4,
    issue_labels: [],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_frontend/issues/4",
    issue_body:
      "Issues can be sorted according to the following attributes:\r\n- [x] Difficulty (easy - senior)\r\n- [x] Difficulty (senior - easy)\r\n- [x] Expected time (ascending)\r\n- [x] Expected time (descending)"
  },
  {
    issue_id: 237106421,
    title: "Write test cases for testing each feature of the app.",
    experience_needed: "moderate",
    expected_time: "1 week",
    language: "javascript",
    tech_stack: "jest",
    created_at: "2017-06-20T06:36:11Z",
    issue_type: "enhancement",
    updated_at: "2017-06-20T06:36:11Z",
    issue_number: 8,
    issue_labels: [],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_frontend/issues/8",
    issue_body:
      "Test cases should cover almost all the features of the front end app."
  },
  {
    issue_id: 237105677,
    title: "Setup travis-ci for continuous integration",
    experience_needed: "moderate",
    expected_time: "1 day",
    language: "javascript",
    tech_stack: "react.js",
    created_at: "2017-06-20T06:32:03Z",
    issue_type: "enhancement",
    updated_at: "2017-06-20T06:36:55Z",
    issue_number: 7,
    issue_labels: [],
    issue_url:
      "https://github.com/mozillacampusclubs/issue_parser_frontend/issues/7",
    issue_body: "setup travis ci tool\r\n"
  }
];

export const mockProjectData = [
  {
    color: "#f52664",
    title: "Moz",
    issueCount: 150,
    setup: "20 min",
    tags: ["HTML", "Rust", "Some long shit"],
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
  },
  {
    color: "#f52664",
    title: "Moz",
    issueCount: 150,
    setup: "20 min",
    tags: ["HTML", "Rust", "Some long shit"],
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
  },
  {
    color: "#f52664",
    title: "Moz",
    issueCount: 150,
    setup: "20 min",
    tags: ["HTML", "Rust", "Some long shit"],
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
  },
  {
    color: "#f52664",
    title: "Moz",
    issueCount: 150,
    setup: "20 min",
    tags: ["HTML", "Rust", "Some long shit"],
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
  },
  {
    color: "#f52664",
    title: "Moz",
    issueCount: 150,
    setup: "20 min",
    tags: ["HTML", "Rust", "Some long shit"],
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
  },
  {
    color: "#f52664",
    title: "Moz",
    issueCount: 150,
    setup: "20 min",
    tags: ["HTML", "Rust", "Some long shit"],
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
  },
  {
    color: "#f52664",
    title: "Moz",
    issueCount: 150,
    setup: "20 min",
    tags: ["HTML", "Rust", "Some long shit"],
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
  },
  {
    color: "#f52664",
    title: "Moz",
    issueCount: 150,
    setup: "20 min",
    tags: ["HTML", "Rust", "Some long shit"],
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
  }
];
