import { push } from "connected-react-router";
import { connect } from "react-redux";
import { IRootState } from "../../../store/reducers";
import Projects from "../components/Projects";

const mapDispatchToProps = { push };
const mapStateToProps = (state: IRootState) => {
  if (!state.issues) {
    return {};
  }
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
