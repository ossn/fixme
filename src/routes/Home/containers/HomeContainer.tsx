import { connect } from "react-redux";
import { IRootState } from "../../../store/reducers";
import { getProjects } from "../../Projects/modules/projectReducer";
import Home from "../components/Home";
import {
  updateLanguage,
  updateLevel,
  updateType
} from "../modules/homeReducer";
const mapDispatchToProps = {
  getProjects,
  updateLanguage,
  updateType,
  updateLevel
};
const mapStateToProps = (state: IRootState) => {
  return {
    projectLength: state.projects.projectLength,
    issuesLength: state.issues.issuesLength
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
