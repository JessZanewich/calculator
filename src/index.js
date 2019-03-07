import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Display />
        <Buttons />
      </div>
    );
  }
}

class Display extends Component {
    render() {
        return (
            <div className="display"></div>
        )
    }
}

class Button extends Component {
    render() {
        return (
            <div className={`button ${this.props.className}`}>
                {this.props.value}
            </div>
        )
    }
}

class Buttons extends Component {
    render() {
        return (
            <div className="buttons">
                <Button value="7" />
                <Button value="8" />
                <Button value="9" />
                <Button value="+" />
                <Button value="4" />
                <Button value="5" />
                <Button value="6" />
                <Button value="-" />
                <Button value="1" />
                <Button value="2" />
                <Button value="3" />
                <Button value="x" />
                <Button value="0" />
                <Button value="." />
                <Button value="C" />
                <Button value="/" />
                <Button value="=" className="equals" /> 
            </div>
        )
    }
}

ReactDOM.render(
  <Calculator />, 
  document.getElementById('root')
);