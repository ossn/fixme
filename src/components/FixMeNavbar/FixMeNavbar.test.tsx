import { shallow } from "enzyme";
import React from "react";
import FixmeNavbar from "./FixMeNavbar";

describe("<FixmeNavBar />", () => {
  it("renders without errors", () => {
    shallow(<FixmeNavbar />);
  });
});
