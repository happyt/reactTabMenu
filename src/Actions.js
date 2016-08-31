import React from 'react';
import ReactDOM from 'react-dom';

class Actions extends React.Component {
      constructor() {
        super();
        this.state = {
            txt : "starter"
            
        };
        this.update = this.update.bind(this);
    }

    update (e) {
        this.setState(
            {
                txt : e.target.value
            }
        );
    }
  
  render() {
    return <h4>
        <InputBox txt={this.state.txt} update={this.update} />
        <br />
        <Button><Camera/> Click</Button>  
    </h4>
  }
}

class Button extends React.Component {
    render() {
        return <button className="pure-button pure-button-success">{this.props.children}</button>
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

const Camera = () => <span className="fa fa-camera-retro"></span>

module.exports = Actions;