import { ConnectedRouter } from "connected-react-router";
import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { withRouter } from "react-router";
import { cleanup, render } from "react-testing-library";
import App from "./App";
import store from "./store/createStore";

afterEach(cleanup);

jest.mock("react-ga");

function renderWithRouter(
  ui: any,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <ConnectedRouter history={history}>{ui}</ConnectedRouter>
      </Provider>
    ),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
}
test("App renders without crashing", () => {
  const { container } = renderWithRouter(<App />);
  expect(container).toMatchSnapshot();
});
