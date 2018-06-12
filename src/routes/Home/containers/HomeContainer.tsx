import { connect } from "react-redux";
import { IRootState } from "../../../store/reducers";
import Home from "../components/Home";
import {} from "../modules/homeReducer";
const mapDispatchToProps = {};
const mapStateToProps = (_: IRootState) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
