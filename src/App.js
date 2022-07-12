import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

var result = 0

class App extends Component {

  constructor(props) {
    super(props);

      this.state = {
        num: 0,
        sign: "",
        result: 0
      }
    }

  changeNum(value) {
    this.setState({
      num:value
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>Calculator</h1>
        <Screen value={this.state.num ? this.state.num : this.state.result} />
        <Button number={1} changeNum={this.changeNum} />
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
  constructor(props) {
    super(props);

  }

  render() {
    return <button onClick={this.props.changeNum(this.props.number)}>{this.props.number}</button>
  }

}

export default App;
