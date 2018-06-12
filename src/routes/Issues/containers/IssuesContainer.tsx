import { push } from "connected-react-router";
import { connect } from "react-redux";
import { IRootState } from "../../../store/reducers";
import Issues from "../components/Issues";

const mapDispatchToProps = { push };
const mapStateToProps = (state: IRootState) => {
  if (!state.issues) {
    return {};
  }
  return {
    issues: state.issues.issuesList,
    search: state.router.location.search,
    location: state.router.location.pathname
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Issues);
