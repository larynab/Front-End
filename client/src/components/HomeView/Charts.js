import React, { Component } from "react";
import styled from "styled-components";
import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import { NavigateNext } from "styled-icons/material/NavigateNext";
import "../../scss/Home2.scss";
import Chart from "./Chart.js";
import { connect } from "react-redux";

const BlackLeft = styled(NavigateBefore)`
  color: grey;
  height: 35px;
  width: 35px;
  border-radius: 6px;
  :hover {
    background: rgb(224, 224, 224);
  }
  cursor: pointer;
`;
const BlackRight = styled(NavigateNext)`
  color: black;
  height: 35px;
  width: 35px;
  border-radius: 6px;
  :hover {
    background: rgb(224, 224, 224);
  }
  cursor: pointer;
`;
// change chart to dynamic
class Charts extends Component {
  //change type to dynamic + icons
  state = {
    graphs: ["Bar", "Line"],
    index: 0
  };

  leftClick = () => {
    if (this.state.index === 0) {
      this.setState({ index: this.state.graphs.length - 1 });
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index - 1
        };
      });
    }
  };

  rightClick = () => {
    if (this.state.index === 0) {
      this.setState({ index: this.state.graphs.length - 1 });
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index + 1
        };
      });
    }
  };

  render() {
    return (
      <>
        <header>
          <h2>Charts</h2>
          <h3>
            Type: <span>Bar</span>
          </h3>
          <div className="toggle">
            <BlackLeft onClick={this.leftClick} />
            <BlackRight onClick={this.rightClick} />
          </div>
        </header>

        <div className="chart">
          {this.props.fetchingPredictionData ? (
            <p>fetching prediction data...</p>
          ) : this.props.coordinatePredictions.prediction ? (
            <Chart graphs={this.state.graphs} index={this.state.index} />
          ) : (
            <p>no data</p>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({
  fetchingPredictionData,
  coordinatePredictions
}) => ({
  fetchingPredictionData,
  coordinatePredictions
});

export default connect(mapStateToProps)(Charts);
