import { push } from "connected-react-router";
import { parse } from "query-string";
import { stringify } from "querystring";
import React from "react";
import Helmet from "react-helmet";
import  ReactMarkdown from "react-markdown";
import ReactPaginate from "react-paginate";
import FixMeFooter from "../../../components/FixMeFooter/FixMeFooter";
import FixMeNavbar from "../../../components/FixMeNavbar/FixMeNavbar";
import Spinner from "../../../components/Spinner";
import { filters } from "../../../helpers/consts";
import { customOutboundLink, customPageView } from "../../../helpers/helpers";
import { issuesListMockData } from "../../../helpers/mockData";
import "../../../styles/issues.css";
import { IProject } from "../../Projects/modules/projectReducer";
import Tag from "./icons/icon-tag.svg";
import Time from "./icons/icon-time.svg";
import BugFix from "./icons/icon-type-bugfix.svg";
import Enhancement from "./icons/icon-type-feature.svg";
import Task from "./icons/icon-type-task.svg";
import IssueFilter from "./IssueFilter";

const icons = {
  bugfix: BugFix,
  bug: BugFix,
  fix: BugFix,
  enhancement: Enhancement
};

export interface IParams {
  experience_needed?: string[] | string;
  language?: string[] | string;
  type?: string[] | string;
  ordering?: string;
  project_id?: string[] | string;
}

interface IIssuesProps {
  readonly issues?: typeof issuesListMockData;
  readonly search: string;
  readonly location: string;
  readonly issuesLength: number;
  readonly projects: IProject[];
  readonly status: string;
  readonly push: typeof push;
  readonly getIssues: (params: IParams, page?: number) => any;
  readonly getProjects: () => any;
}

const getParamsFromProps = (props: IIssuesProps): IParams => {
  const { experience_needed, type, language, ordering, project_id } = parse(
    props.search
  );
  return {
    experience_needed: experience_needed
      ? typeof experience_needed === "string"
        ? [experience_needed]
        : experience_needed
      : undefined,
    language: language
      ? typeof language === "string"
        ? [language]
        : language
      : undefined,
    type: type ? (typeof type === "string" ? [type] : type) : undefined,
    project_id: project_id
      ? typeof project_id === "string"
        ? [project_id]
        : project_id
      : undefined,
    ordering: ordering
      ? Array.isArray(ordering)
        ? ordering[0]
        : ordering
      : undefined
  };
};

export default class Issues extends React.PureComponent<
  IIssuesProps,
  { readonly params: IParams; readonly propKey: number; readonly page: number }
> {
  public readonly state = {
    params: getParamsFromProps(this.props),
    propKey: 1,
    page: 1
  };

  public componentDidMount(): void {
    const scrolltoRoot = document.getElementById("root");
    if (!!scrolltoRoot) {
      scrolltoRoot.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    this.props.getIssues(this.state.params);
    this.props.getProjects();
    customPageView(window.location.pathname + window.location.search);
  }

  public componentDidUpdate(prevProps: IIssuesProps) {
    if (this.props.search !== prevProps.search) {
      if (this.props.search === "" && "" !== prevProps.search) {
        this.setState(state => ({ propKey: state.propKey + 1 }));
      }
      const params = getParamsFromProps(this.props);
      this.setState({ params });
      this.props.getIssues(params);
      const scrolltoDiv = document.getElementById("scrollableDiv");
      if (!!scrolltoDiv) {
        scrolltoDiv.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  }

  public render() {
    const { issues, issuesLength, projects, status } = this.props;
    const { params, propKey, page } = this.state;

    if (!params || !issues) {
      return <Spinner />;
    }

    return (
      <div className="row issues-container">
        <section className="container">
          <Helmet>
            <title>Fixme | Issues</title>
            <meta
              name="description"
              content="Find open issues of projects on the FixMe platform according to skill level and technologies of choice."
            />
          </Helmet>
          <FixMeNavbar white={true} />

          <div className="row my-5">
            <div className="col-md-4 col-12 d-flex flex-column align-middle position-relative">
              <div className="issues-filter-wrapper">
                <h2 className="mb-4">Filter</h2>
                <div className="issues-filter-container p-4">
                  {filters.map(filter => (
                    <div key={filter.value} className="mb-5">
                      <h6 className="mb-3">{filter.label}</h6>
                      <IssueFilter
                        handleChange={this.handleChange}
                        options={filter.options}
                        params={params}
                        propKey={propKey}
                        defaultValue={filter.value}
                      />
                    </div>
                  ))}
                  <div className="mb-5">
                    <h6 className="mb-3">Projects</h6>
                    <IssueFilter
                      handleChange={this.handleChange}
                      options={(projects || []).map(project => ({
                        label: project.display_name,
                        value: project.id as string
                      }))}
                      params={params}
                      propKey={propKey}
                      defaultValue="project_id"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-12 issuelist" id="scrollableDiv">
              <div className="d-flex justify-content-between mb-4">
                <h2 className="col-12">
                  Showing {(page - 1) * 20}-{Math.min(page * 20, issuesLength)}{" "}
                  of {issuesLength} {issuesLength === 1 ? "issue" : "issues"}
                </h2>
                {/*
                <div className="justify-content-center col-12 col-md-6">
                  <select
                    className="issue-ordering-by"
                    value={params.ordering || "-1"}
                    onChange={e => {
                      // tslint:disable-next-line:jsx-no-lambda
                      const ordering = e.target.value;
                      this.handleChange(true, ordering, "ordering");
                    }}
                  >
                    <option value="-1" disabled={true}>
                      Sort by...
                    </option>
                    <option value="experience_needed">
                      Experience Needed Ascending
                    </option>
                    <option value="-experience_needed">
                      Experience Needed Descending
                    </option>{" "}
                  </select>
                </div>
                */}
              </div>

              {status === "loading" ? (
                <Spinner />
              ) : (
                <React.Fragment>
                  <React.Fragment>
                    {issuesLength > 0 ? (
                      <React.Fragment>
                        {issues.map(issue => (
                          <div
                            key={issue.id}
                            className="row p-0 issue-card" // tslint:disable-next-line:jsx-no-lambda
                            onClick={e => {
                              e.preventDefault();
                              const url = issue.url;
                              customOutboundLink(url);
                            }}
                          >
                            <div
                              className={`col-9 issue-card-main ${issue.experience_needed ||
                                "moderate"}`}
                            >
                              <h5 className="issue-card-title">
                                {issue.title}
                              </h5>
                              <p className="issue-card-subtitle mb-5">
                                {
                                  (issue.project || { display_name: "" })
                                    .display_name
                                }
                              </p>

                              <div className="issue-card-description">
                                <ReactMarkdown source={issue.body} />
                              </div>
                            </div>
                            <div className="col-3 d-flex flex-column issue-card-meta justify-content-between">
                              <span className="mb-4 align-self-start">
                                {new Date(issue.created_at).toDateString()}
                              </span>
                              <div className="align-self-start d-flex flex-column">
                                <div className="text-nowrap">
                                  <span
                                    className={`circle ${issue.experience_needed ||
                                      "moderate"}`}
                                  />
                                  <span className="text-capitalize ml-1">
                                    {issue.experience_needed || "Moderate"}
                                  </span>
                                </div>
                                <div className="text-nowrap">
                                  <img src={Tag} alt="" />
                                  <span className="text-capitalize ml-1">
                                    {issue.language}
                                  </span>
                                </div>
                                <div className="text-nowrap">
                                  <img
                                    src={
                                      icons[(issue.type || "").toLowerCase()] ||
                                      Task
                                    }
                                    alt=""
                                  />
                                  <span className="text-capitalize ml-1">
                                    {issue.type || "Issue"}
                                  </span>
                                </div>
                                {issue.expected_time && (
                                  <div className="text-nowrap">
                                    <img src={Time} alt="" />

                                    <span className="ml-1">
                                      {issue.expected_time}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                        <ReactPaginate
                          previousLabel="previous"
                          nextLabel="next"
                          breakLabel={<a href="">...</a>}
                          breakClassName={"break-me"}
                          pageCount={Math.ceil(issuesLength / 20)}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={5}
                          onPageChange={this.fetchData}
                          containerClassName="pagination"
                          activeClassName="active"
                          subContainerClassName="pages pagination"
                          forcePage={page - 1}
                        />
                      </React.Fragment>
                    ) : (
                      <p>Couldn't find any issues with your criteria</p>
                    )}
                  </React.Fragment>
                </React.Fragment>
              )}
            </div>
          </div>
        </section>
        <FixMeFooter />
      </div>
    );
  }

  public fetchData = ({ selected: page }: { selected: number }) => {
    const { params } = this.state;
    this.props.getIssues(params, page + 1);
    this.setState({ page: page + 1 });
  };

  private handleChange = (
    checked: boolean,
    value: string,
    filterType: string
  ) => {
    const { params } = this.state;
    if (["string", "undefined"].includes(typeof params[filterType])) {
      checked
        ? (params[filterType] =
            filterType === "ordering"
              ? value
              : [...(params[filterType] || []), value])
        : delete params[filterType];
    } else {
      params[filterType] = checked
        ? [...(params[filterType] || []), value]
        : (params[filterType] || []).filter(
            (key: string) => ![value, (value || "").toString()].includes(key)
          );
    }
    if ((params[filterType] || []).length <= 0) {
      delete params[filterType];
    }
    const url = `${this.props.location}?${stringify(params)}`;
    customPageView(url);
    this.props.push(url);
  };
}
