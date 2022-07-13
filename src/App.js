import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

      this.state = {
        lastNum: 0,
        num: 0,
        sign: "",
        result: 0
      }
    }

  handleNum = (value) => {
    this.setState({
      num: value
    });
  }

  handleOperator = (value) => {
    this.setState({
      sign: value,
      lastNum: this.state.num
    });

  }

  handleResult = (sign, value) => {
    if (sign === '+') {
      let newResult = this.state.lastNum + this.state.num
      this.setState({
        num: newResult,
        result: newResult
      });
      console.log(sign);
    }
    if (sign === '-') {
      let newResult = this.state.lastNum - this.state.num
      this.setState({
        num: newResult,
        result: newResult 
      });
      console.log(sign);
    }
    if (sign === 'x') {
      let newResult = this.state.lastNum * this.state.num
      this.setState({
        num: newResult,
        result: newResult
      });
      console.log(sign);
    }
    if (sign === '/') {
      let newResult = this.state.lastNum / this.state.num
      this.setState({
        num: newResult,
        result: newResult
      });
      console.log(sign);
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Calculator</h1>
        <Screen value={this.state.num ? this.state.num : this.state.result} />
        <Button number={0} handleNum={this.handleNum} />
        <Button number={1}  handleNum={this.handleNum} />
        <Button number={2}  handleNum={this.handleNum} />
        <Button number={3}  handleNum={this.handleNum} />
        <Button number={4}  handleNum={this.handleNum} />
        <Button number={5}  handleNum={this.handleNum} />
        <Button number={6}  handleNum={this.handleNum} />
        <Button number={7}  handleNum={this.handleNum} />
        <Button number={8}  handleNum={this.handleNum} />
        <Button number={9}  handleNum={this.handleNum} />
        <Operator sign='+'  handleOperator={this.handleOperator} />
        <Operator sign='x'  handleOperator={this.handleOperator} />
        <Operator sign='-'  handleOperator={this.handleOperator} />
        <Operator sign='/'  handleOperator={this.handleOperator} />
        <Equals sign={this.state.sign} num={this.state.num} handleResult={this.handleResult} />
      </div>
    );

    
  } 

}

class Screen extends Component {
 
  constructor(props) {
    super(props);

    }

  render() {
    return (<h1>{this.props.value}</h1>);
  }

}

class Button extends Component {
  
  render() {
    return <button onClick={() => this.props.handleNum(this.props.number)}>{this.props.number}</button>;
  }

}

class Operator extends Component {

  render() {
    return <button onClick={() => this.props.handleOperator(this.props.sign)}>{this.props.sign}</button>;
  }
}

class Equals extends Component {
  render () {
    return <button onClick={() => this.props.handleResult(this.props.sign, this.props.num)}>{'='}</button>;
}

}
export default App;
