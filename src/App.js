import React from "react";
import "./App.css";
import ProgressBar from "./components/progressbar/progressbar";
import Controls from "./components/controles/controls";

import "./css/styles.css";

class App extends React.Component {
  state = {
    endPointParams: {},
    selectedBar: 0,
  };

  componentDidMount() {
    fetch("http://pb-api.herokuapp.com/bars")
      .then((result) => {
        return result.json(result.body);
      })
      .then((body) => {
        let { endPointParams } = this.state;
        endPointParams = body;
        this.setState({ endPointParams });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleButton = (btnIndex) => {
    let { endPointParams, selectedBar } = this.state;
    let barVal = endPointParams.bars[selectedBar];
    let buttonVal = endPointParams.buttons[btnIndex];
    barVal += buttonVal;
    barVal = barVal < 0 ? 0 : barVal;
    endPointParams.bars[selectedBar] = barVal;

    this.setState({ endPointParams });
  };

  handleSelectBar = (event) => {
    let selectedBar = this.state.selectedBar;
    selectedBar = event.currentTarget.value;

    this.setState({ selectedBar });
  };

  render() {
    const { endPointParams } = this.state;
    let containerHight = endPointParams.bars
      ? endPointParams.bars.length * 30 + 100 + 75
      : 100;
    return (
      <div className="App">
        <div className="container" style={{ height: containerHight }}>
          <div style={{ height: "3rem" }}>
            <h2>Progress Bar Demo</h2>
          </div>
          {endPointParams.bars
            ? endPointParams.bars.map((v, i) => {
                return (
                  <ProgressBar value={v} limit={endPointParams.limit} key={i} />
                );
              })
            : null}
          <Controls
            buttons={endPointParams.buttons ? endPointParams.buttons : null}
            bars={endPointParams.bars ? endPointParams.bars.length : null}
            handleButtonClick={this.handleButton}
            onSelectChange={this.handleSelectBar}
          />
        </div>
      </div>
    );
  }
}

export default App;
