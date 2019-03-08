import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
        <div className="calculator">
            <Display />
            <Buttons onClick={(i) => console.log(i)} />
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
            <div 
                className={`button ${this.props.className}`}
                onClick={this.props.onClick}>
                {this.props.value}
            </div>
        )
    }
}

class Buttons extends Component {
    render() {
        return (
            <div className="buttons">
                <Button onClick={this.props.onClick} value='7' />
                <Button onClick={this.props.onClick} value='8' />
                <Button onClick={this.props.onClick} value='9' />
                <Button onClick={this.props.onClick} value='+' />
                <Button onClick={this.props.onClick} value='4' />
                <Button onClick={this.props.onClick} value='5' />
                <Button onClick={this.props.onClick} value='6' />
                <Button onClick={this.props.onClick} value='-' />
                <Button onClick={this.props.onClick} value='1' />
                <Button onClick={this.props.onClick} value='2' />
                <Button onClick={this.props.onClick} value='3' />
                <Button onClick={this.props.onClick} value='X' />
                <Button onClick={this.props.onClick} value='0' />
                <Button onClick={this.props.onClick} value='.' />
                <Button onClick={this.props.onClick} value='C' />
                <Button onClick={this.props.onClick} value='/' />
                <Button onClick={this.props.onClick} value='=' className='equals' />
            </div>
        )
    }
}

ReactDOM.render(
  <Calculator />, 
  document.getElementById('root')
);