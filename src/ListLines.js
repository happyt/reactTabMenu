import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../src/Icon.js';
import PartyIcon from '../src/PartyIcon.js';
            
class ListLines extends React.Component {
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
        
        <br /><br />
        <div className="bordered">
            <ListLine linetext="Some text describing the result" />
            <ListLine linetext="The quick brown fox jumped over the lazy dog"/>
            <ListLine />        
        </div>

        <PartyIcon kind="donkey-democrat" />
        <PartyIcon kind="elephant-republican" size="48" />
        <PartyIcon kind="republican" colorA="#88aa88" colorB="#ff00ff"/>
        <PartyIcon kind="democrat" />
        <PartyIcon kind="donkey" size="128" colorC="#00ff00"/>
        <PartyIcon kind="donkey" />
        <Button  whenClicked={(e) => this.handleClick(e)}><div><PartyIcon kind="plus" /></div></Button>  
        <Button  whenClicked={(e) => this.handleClick(e)}><div><PartyIcon kind="play" colorA="#0aaa00" /></div></Button>  

    </h4>
  }
}

class ListLine extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="bordered">
            <ButtonPlay><PartyIcon size="1.6rem" colorA="#ffffff" kind="play" /></ButtonPlay>
            {this.props.linetext}
            <div className="alignright">
                <ButtonDelete><PartyIcon size="1.6rem" kind="cross" colorA="#fff" /></ButtonDelete>
                <ButtonParty><PartyIcon size="1.6rem" kind="republican" /></ButtonParty>
            </div>
        </div>
        );
    }
}

ListLine.defaultProps = {
    linetext : "This will be a default?"
};

class ButtonSimple extends React.Component {
    render() {
        return (
            <button className="pure-button pure-button-success">
            {this.props.children}
            </button>
        );
    }
}

class ButtonPlay extends React.Component {
    render() {
        return (
            <button className="pure-button pure-button-success">
            {this.props.children}
            </button>
        );
    }
}


class ButtonParty extends React.Component {
    render() {
        return (
            <button className="pure-button pure-button-tertiary">
            {this.props.children}
            </button>
        );
    }
}

class ButtonDelete extends React.Component {
    render() {
        return (
            <button className="pure-button pure-button-error">
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

module.exports = ListLines;