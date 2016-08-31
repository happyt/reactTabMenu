import React from 'react';
import ReactDOM from 'react-dom';

class Sliders extends React.Component {
      constructor() {
        super();
        this.state = {
            txt : "starter",
            red : 0,
            green : 0,
            blue : 0
        };
        this.update = this.update.bind(this);
    }

    update (e) {
        this.setState(
            {
                red : ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
                green : ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
                blue : ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
                txt : e.target.value
            }
        );
    }
  
  render() {
    return <h4>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br />
        <InputBox txt={this.state.txt} update={this.update} />
        <br />
        <Button>I <Heart/> choose this</Button>  
    </h4>
  }
}

class Button extends React.Component {
    render() {
        return <button>{this.props.children}</button>
    }
}

const InputBox = (props) => {
    return (
        <div>
        <input type="text"
                onChange = {props.update} />
        <h1>{props.txt}</h1>
        </div>
    )    
}

const Heart = () => <span className="fa fa-camera-retro"></span>

class Slider extends React.Component {
    render() {
        return (
            <div>
            <input ref="inp" type="range"
                min="0"
                max="255"
                onChange={this.props.update} />
            </div>
        );
    }
}

module.exports = Sliders;