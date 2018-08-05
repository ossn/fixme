import { connect } from "react-redux";
import { IRootState } from "../../../store/reducers";
import Projects from "../components/Projects";
import { getProjects } from "../modules/projectReducer";

const mapDispatchToProps = { getProjects };
const mapStateToProps = (state: IRootState) => {
  if (!state.projects) {
    return { projects: [] };
  }
  return {
    projects: state.projects.projectList
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
