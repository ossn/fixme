import { push } from "connected-react-router";
import { connect } from "react-redux";
import { IRootState } from "../../../store/reducers";
import { getProjects } from "../../Projects/modules/projectReducer";
import Issues from "../components/Issues";
import { getIssues } from "../modules/issuesReducer";

const mapDispatchToProps = { push, getIssues, getProjects };
const mapStateToProps = (state: IRootState) => {
  if (!state.issues) {
    return {};
  }
  return {
    issues: state.issues.issuesList,
    search: state.router.location.search,
    location: state.router.location.pathname,
    issuesLength: state.issues.issuesLength,
    projects: state.projects.projectList
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Issues);
