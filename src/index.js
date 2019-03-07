import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Display />
        <Buttons onClick={() => console.log("top level click")} />
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

function Button(props) {
    return (
        <div 
            className={`button ${props.className}`}
            onClick={props.onClick}>
            {props.value}
        </div>
    )
}
class Buttons extends Component {
    renderButton(i, className) {
        return (
            <Button 
                value={i}
                className={`button ${className}`}
                onClick={this.props.onClick} 
            />
        )
    }

    render() {
        return (
            <div className="buttons">
                {this.renderButton(7)}
                {this.renderButton(8)}
                {this.renderButton(9)}
                {this.renderButton('+')}
                {this.renderButton(4)}
                {this.renderButton(5)}
                {this.renderButton(6)}
                {this.renderButton('-')}
                {this.renderButton(1)}
                {this.renderButton(2)}
                {this.renderButton(3)}
                {this.renderButton('x')}
                {this.renderButton(0)}
                {this.renderButton('.')}
                {this.renderButton('C')}
                {this.renderButton('/')}
                {this.renderButton('=', 'equals')}
            </div>
        )
    }
}

ReactDOM.render(
  <Calculator />, 
  document.getElementById('root')
);