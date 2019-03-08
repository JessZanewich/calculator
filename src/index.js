import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNum: null,
            secondNum: null,
            operator: null,
            result: null
        }
    }
    registerValue(value) {
        const numbers = new RegExp('^[0-9]');
        console.log(value);
    }

    render() {
        return (
        <div className="calculator">
            <Display />
            <Buttons handleClick={(value) => this.registerValue(value)} />
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
    clickSend = () => this.props.clickSend(this.props.value);
    render() {
        return (
            <div 
                className={`button ${this.props.className}`}
                onClick={this.clickSend}>
                {this.props.value}
            </div>
        )
    }
}

class Buttons extends Component {
    handleClick = value => this.props.handleClick(value); // will pass the button value to top level component

    render() {
        return (
            <div className="buttons">
                <Button clickSend={this.handleClick} value='7' />
                <Button clickSend={this.handleClick} value='8' />
                <Button clickSend={this.handleClick} value='9' />
                <Button clickSend={this.handleClick} value='+' />
                <Button clickSend={this.handleClick} value='4' />
                <Button clickSend={this.handleClick} value='5' />
                <Button clickSend={this.handleClick} value='6' />
                <Button clickSend={this.handleClick} value='-' />
                <Button clickSend={this.handleClick} value='1' />
                <Button clickSend={this.handleClick} value='2' />
                <Button clickSend={this.handleClick} value='3' />
                <Button clickSend={this.handleClick} value='X' />
                <Button clickSend={this.handleClick} value='0' />
                <Button clickSend={this.handleClick} value='.' />
                <Button clickSend={this.handleClick} value='C' />
                <Button clickSend={this.handleClick} value='/' />
                <Button clickSend={this.handleClick} value='=' className='equals' />
            </div>
        )
    }
}

ReactDOM.render(
  <Calculator />, 
  document.getElementById('root')
);