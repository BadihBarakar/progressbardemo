import React from "react";
import "../../css/progressbar.css";

class ProgressBar extends React.Component {
  myInput = React.createRef();

  state = {
    widthRatio: 0,
    divWidth: 0,
  };

  componentDidMount() {
    let divWidth = this.myInput.current
      ? this.myInput.current.offsetWidth
      : 500;
    let widthRatio = divWidth / 100;
    this.setState({ widthRatio, divWidth });

    window.addEventListener("resize", () => {
      this.setState({
        widthRatio: this.myInput.current.offsetWidth / 100,
        divWidth: this.myInput.current.offsetWidth,
      });
    });
  }

  render() {
    const { value, limit } = this.props;

    let limitRatio = 100 / limit;
    let percent = value * limitRatio;

    let barWidth =
      value > limit
        ? this.state.divWidth
        : limitRatio * value * this.state.widthRatio;
    return (
      <div data-testid="mainDiv" className="progress-bar" ref={this.myInput}>
        <label
          data-testid="progBarLabel"
          style={{ position: "absolute", left: "49%" }}
        >
          {percent.toFixed(1) + "%"}
        </label>
        <div
          data-testid="progressDiv"
          className="progress-value"
          style={{
            width: barWidth,
            backgroundColor: value > limit ? "red" : "lightblue",
          }}
        ></div>
      </div>
    );
  }
}

export default ProgressBar;
