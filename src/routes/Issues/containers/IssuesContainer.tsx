import { push } from "connected-react-router";
import { connect } from "react-redux";
import { IRootState } from "../../../store/reducers";
import { getProjects } from "../../Projects/modules/projectReducer";
import Issues from "../components/Issues";
import { getIssues } from "../modules/issuesReducer";

const mapDispatchToProps = { push, getIssues, getProjects };
const mapStateToProps = (state: IRootState) => {
  if (!state.issues) {
    return {
      issues: [],
      search: state.router.location.search,
      location: state.router.location.pathname,
      issuesLength: 0,
      projects: [],
      status: "loading"
    };
  }
  return {
    issues: state.issues.issuesList,
    search: state.router.location.search,
    location: state.router.location.pathname,
    issuesLength: state.issues.issuesLength || 0,
    projects: state.projects.projectList,
    status: state.issues.status
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Issues);
