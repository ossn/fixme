import "../../../styles/issues.css";

import { parse, stringify } from "query-string";
import * as React from "react";
import * as ReactMarkdown from "react-markdown";

import FixMeFooter from "../../../components/FixMeFooter/FixMeFooter";
import FixMeNavbar from "../../../components/FixMeNavbar/FixMeNavbar";
import { multiFilter } from "../../../helpers/helpers";
import { filters, issuesListMockData } from "../../../helpers/mockData";

interface IIssuesProps {
  readonly issues: typeof issuesListMockData;
  search: string;
  location: string;
  push: any;
}

export const Issues: React.SFC<IIssuesProps> = ({
  issues,
  search,
  location,
  push
}) => {
  let finalIssues = issues;
  const params = parse(search) || {};
  const order = params.order;
  delete params.order;
  if (search) {
    finalIssues = multiFilter(issues, params);
  }

  if (order) {
    finalIssues.sort((a, b) => {
      if (a[order] < b[order]) {
        return -1;
      }
      if (a[order] > b[order]) {
        return 1;
      }
      return 0;
    });
  }

  const handleChange = (
    checked: boolean,
    value: string,
    filterType: string
  ) => {
    if (typeof params[filterType] === "string") {
      checked
        ? (params[filterType] = [params[filterType], value])
        : delete params[filterType];
    } else {
      params[filterType] = checked
        ? [...(params[filterType] || []), value]
        : (params[filterType] || []).filter((key: string) => key !== value);
    }
    push(`${location}?${stringify({ ...params, order })}`);
  };

  const issuesLength = finalIssues.length;
  return (
    <div className="row issues-container">
      <section className="container">
        <FixMeNavbar white={true} />
        <div className="row my-5">
          <div className="col-md-4 col-12 d-flex flex-column align-middle position-relative">
            <div className="issues-filter-wrapper">
              <h2>Filter</h2>
              <div className="issues-filter-container p-4">
                {filters.map(filter => (
                  <div key={filter.value} className="mb-5">
                    <h6 className="mb-3">{filter.label}</h6>
                    {filter.options.map(({ value, label }) => (
                      <div
                        key={value}
                        className="form-check d-flex align-items-center align-content-center mb-2"
                      >
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked={
                            typeof params[filter.value] === "string"
                              ? params[filter.value] === value
                              : (params[filter.value] || []).includes(value)
                          }
                          // tslint:disable-next-line:jsx-no-lambda
                          onChange={e =>
                            handleChange(
                              e.currentTarget.checked,
                              value,
                              filter.value
                            )
                          }
                          key={value}
                          id={value}
                        />
                        <label
                          className="form-check-label pl-4 mb-0"
                          htmlFor={value}
                        >
                          {label}
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="d-flex justify-content-between">
              <h2>
                Found {issuesLength} {issuesLength === 1 ? "issue" : "issues"}
              </h2>
              <div className="justify-content-center">
                <select
                  className="issue-order-by"
                  value={order || "-1"}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={e => {
                    params.order = e.target.value;
                    push(`${location}?${stringify(params)}`);
                  }}
                >
                  <option value="-1" disabled={true}>
                    Sort by...
                  </option>
                  <option value="language">Language</option>
                  <option value="label_type">Issue Type</option>
                  <option value="tech_stack">Tech Stack</option>
                  <option value="experience_needed">Experience Needed</option>
                </select>
              </div>
            </div>
            {issuesLength > 0 ? (
              finalIssues.map(issue => (
                <div
                  key={issue.issue_id}
                  className="row p-0 issue-card"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => {
                    window.open(issue.issue_url, "_blank");
                  }}
                >
                  <div
                    className={`col-9 issue-card-main ${
                      issue.experience_needed
                    }`}
                  >
                    <h5 className="issue-card-title">{issue.title}</h5>
                    <p className="issue-card-subtitle mb-5">
                      {issue.tech_stack}
                    </p>

                    <div className="issue-card-description">
                      <ReactMarkdown source={issue.issue_body} />
                    </div>
                  </div>
                  <div className="col-3 d-flex flex-column issue-card-meta justify-content-between pl-5">
                    <span className="mb-4 align-self-start">
                      {new Date(issue.created_at).toDateString()}
                    </span>
                    <div className="align-self-start d-flex flex-column">
                      <span className="text-capitalize">
                        {issue.experience_needed}
                      </span>
                      <span className="text-capitalize">{issue.language}</span>
                      <span className="text-capitalize">
                        {issue.label_type}
                      </span>
                      <span>{issue.expected_time}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Couldn't find any issues with your criteria</p>
            )}
          </div>
        </div>
      </section>
      <FixMeFooter />
    </div>
  );
};
export default Issues;
