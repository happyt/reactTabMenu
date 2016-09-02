import React from 'react';
import ReactDOM from 'react-dom';

class Buttons extends React.Component {
      constructor() {
        super();
        this.state = {
            txt : "starter",
            badger: false
            
        };
        this.update = this.update.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({badger: !this.state.badger});
    }

    update (e) {
        console.log("click");
        this.setState( {txt : e.target.value} );
    }
  
  render() {
    return <h4>
        <InputBox txt={this.state.txt} update={this.update} />
        <br />
        {this.state.badger ?
        <div>ON</div>
        :
        <div>OFF</div>
        }
        <ButtonSimple><div onClick={this.handleClick}><Camera/> DIV onClick</div></ButtonSimple>  
        <Button  whenClicked={(e) => this.handleClick(e)}><Camera/> Raised Click</Button>  
        
    </h4>
  }
}

class ButtonSimple extends React.Component {
    render() {
        return (
            <button className="pure-button pure-button-success">
            {this.props.children}
            </button>
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            <button className="pure-button pure-button-success"
               onClick={() => this.props.whenClicked() } >
            {this.props.children}
            </button>
        );
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

module.exports = Buttons;