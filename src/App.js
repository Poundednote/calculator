import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastNum: 0,
      num: 0,
      sign: "",
      result: 0,
    };
  }

  handleNum = (value) => {
    if (this.state.num) {
      /* supports multidigit numbers by checking if user already press a number and upon pressing 
          another without an operator will concatenate the two numbers
      */
      this.setState({
        num: Number(this.state.num.toString() + value.toString()),
      });
    } else {
      this.setState({
        num: value,
      });
    }
  };

  handleOperator = (value) => {
    this.setState({
      sign: value,
      lastNum: this.state.num ? this.state.num : this.state.result, // allows user to add a number onto previous result
      num: 0,
    });
  };

  handleResult = (sign, value) => {
    /* Checks the operator last pressed by the user and does the corresponding operation on the numbers and stores result in state
      while changing the current number back to 0  */
    if (sign === "+") {
      let newResult = this.state.lastNum + this.state.num;
      this.setState({
        num: 0,
        result: newResult,
      });
      console.log(sign);
    }
    if (sign === "-") {
      let newResult = this.state.lastNum - this.state.num;
      this.setState({
        num: 0,
        result: newResult,
      });
      console.log(sign);
    }
    if (sign === "x") {
      let newResult = this.state.lastNum * this.state.num;
      this.setState({
        num: 0,
        result: newResult,
      });
      console.log(sign);
    }
    if (sign === "/") {
      let newResult = this.state.lastNum / this.state.num;
      this.setState({
        num: 0,
        result: newResult,
      });
      console.log(sign);
    }
  };

  handleClear = () => {
    this.setState({
      num: 0,
    });
  };

  handleReset = () => {
    this.setState({
      num: 0,
      result: 0,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Screen value={this.state.num ? this.state.num : this.state.result} />
        <div className="Buttons">
          <Operator sign="/" handleOperator={this.handleOperator} />
          <Button number={1} handleNum={this.handleNum} />
          <Button number={2} handleNum={this.handleNum} />
          <Button number={3} handleNum={this.handleNum} />
          <Operator sign="+" handleOperator={this.handleOperator} />
          <Button number={5} handleNum={this.handleNum} />
          <Button number={6} handleNum={this.handleNum} />
          <Button number={7} handleNum={this.handleNum} />
          <Operator sign="x" handleOperator={this.handleOperator} />
          <Button number={8} handleNum={this.handleNum} />
          <Button number={9} handleNum={this.handleNum} />
          <Button number={0} handleNum={this.handleNum} />
          <Operator sign="-" handleOperator={this.handleOperator} />
          <Equals
            sign={this.state.sign}
            num={this.state.num}
            handleResult={this.handleResult}
          />
          <Clear handleClear={this.handleClear} />
          <Reset handleReset={this.handleReset} />
        </div>
      </div>
    );
  }
}
class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p className="screen">{this.props.value}</p>;
  }
}

class Button extends Component {
  render() {
    return (
      <button
        className="btn btn-block number"
        onClick={() => this.props.handleNum(this.props.number)}
      >
        {this.props.number}
      </button>
    );
  }
}

class Operator extends Component {
  render() {
    return (
      <button
        className="btn btn-block operator"
        onClick={() => this.props.handleOperator(this.props.sign)}
      >
        {this.props.sign}
      </button>
    );
  }
}

class Equals extends Component {
  render() {
    return (
      <button
        className="btn btn-block equals"
        onClick={() => this.props.handleResult(this.props.sign, this.props.num)}
      >
        {"="}
      </button>
    );
  }
}

function Clear(props) {
  return (
    <button className="btn btn-block clear" onClick={() => props.handleClear()}>
      {"C"}
    </button>
  );
}

function Reset(props) {
  return (
    <button className="btn btn-block clear" onClick={() => props.handleReset()}>
      {"R"}
    </button>
  );
}
export default App;
