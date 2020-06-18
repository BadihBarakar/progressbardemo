import React from "react";
import ReactDOM from "react-dom";
import App from "../app";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

// it("render controls successfully", () => {
//   // test that the component will render successfully in another container...
//   const endPointParams = {
//     buttons: [14, 20, -35, -11],
//     bars: [57, 66],
//     limit: 190,
//   };

//   const div = document.createElement("div");
//   ReactDOM.render(
//     <Controls
//       buttons={endPointParams.buttons ? endPointParams.buttons : null}
//       bars={endPointParams.bars ? endPointParams.bars.length : null}
//       handleButtonClick={handleButton}
//       onSelectChange={handleSelectBar}
//     />,
//     div
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });

// it("renders controls correctly", () => {
//   // test that the component contains all correct elements required...
//   const endPointParams = {
//     buttons: [5, 46, -32, -22],
//     bars: [40, 22, 87, 50],
//     limit: 160,
//   };

//   const component = render(
//     <Controls
//       buttons={endPointParams.buttons ? endPointParams.buttons : null}
//       bars={endPointParams.bars ? endPointParams.bars.length : null}
//       handleButtonClick={handleButton}
//       onSelectChange={handleSelectBar}
//     />
//   );
//   expect(component.getByTestId("mainDiv"));
//   expect(component.getByTestId("selectDiv"));
//   expect(component.getByTestId("selectProgBar"));
//   expect(component.getByTestId("selectProgBar"));
//   for (let n = 0; n < endPointParams.buttons.length; n++) {
//     expect(component.getByTestId("buttonDiv" + n));
//     expect(component.getByTestId("button" + n));
//   }
// });

it("match snapshot", () => {
  // test that the component matches the snapshot,
  // creating a snpshot if it doesn't exist...
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});
