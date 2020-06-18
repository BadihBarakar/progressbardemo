import React from "react";

import "../../css/controls.css";

const Controls = (props) => {
  const { buttons, bars, onSelectChange } = props;
  if (!buttons) return null;
  let options = [];
  for (let n = 0; n < bars; n++) {
    options.push(
      <option value={n} key={n}>
        #progress {n + 1}
      </option>
    );
  }
  return (
    <div className="controls-container" data-testid="mainDiv">
      <div className="select-div" data-testid="selectDiv">
        <select
          data-testid="selectProgBar"
          id="selProgBar"
          className="prog-select"
          onChange={onSelectChange}
        >
          {options}
        </select>
      </div>
      {buttons.map((val, i) => (
        <div className="button-div" key={i} data-testid={"buttonDiv" + i}>
          <button
            data-testid={"button" + i}
            className="control-button"
            key={i}
            onClick={() => props.handleButtonClick(i)}
          >
            {val}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Controls;
