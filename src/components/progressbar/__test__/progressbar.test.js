import React from "react";
import ReactDOM from "react-dom";
import ProgressBar from "../progressbar";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

it("render progressbar successfully", () => {
  // test that the component will render successfully in another container...
  const div = document.createElement("div");
  ReactDOM.render(<ProgressBar value="50" limit="150" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders progressbar correctly", () => {
  // test that the component contains all correct elements required...
  const component = render(<ProgressBar value="50" limit="150" />);
  expect(component.getByTestId("mainDiv"));
  expect(component.getByTestId("progBarLabel"));
  expect(component.getByTestId("progressDiv"));
});

it("match snapshot", () => {
  // test that the component matches the snapshot,
  // creating a snpshot if it doesn't exist...
  const tree = renderer.create(<ProgressBar value="50" limit="150" />);
  expect(tree).toMatchSnapshot();
});
