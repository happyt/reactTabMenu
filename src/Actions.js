import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../src/Icon.js';
import PanelCheck from '../src/PanelCheck.js';
import PanelCheckDrop from '../src/PanelCheckDrop.js';
import FlatDropExample from '../src/FlatDropExample.js';
import CheckboxInput from '../src/CheckboxInput.js';

class Actions extends React.Component {
      constructor() {
        super();
        this.state = {
            displayText : "starter",
            badger: false
            
        };
        this.update = this.update.bind(this);
   //     this.handleCheck = this.handleCheck.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.sendCommand = this.sendCommand.bind(this);
        this.showResults = this.showResults.bind(this);
    }

    handleCheck(e) {
//        debugger;
        console.log(e.state.badger);
        this.setState({badger: e.state.badger});
    }

    handleClick(e) {
        this.setState({badger: !this.state.badger});

        switch( e.target.textContent) {
            case "Action 1":
                this.sendCommand("http://jsonplaceholder.typicode.com/users?id=1");
                break;
            case "Action 2":
                this.sendCommand("http://jsonplaceholder.typicode.com/users?id=2");
                break;
           
            default:
                 this.setState( {displayText : "Unknown action" } );
        }
    }

    showResults(param) {
        this.setState( {displayText : param } );
    }

    sendCommand(url) {

        fetch(url, {method: "GET"} )
            .then((response) => response.json())
            .then((responseData) => {
        //        console.log("B>",this.state.displayText,"<");
       //         debugger;
                if (responseData[0].name) {
                    this.setState( {displayText : responseData[0].username} );
                } else {
                    this.setState( {displayText : "Unknown name"} );
                }
      //          console.log("A>",this.state.displayText,"<");
            })
            .catch((error) => {
                    console.warn(error);
            }); 
    }

    update (e) {
        this.setState( {displayText : e.target.value} );
    }

  render() {
    return (
        <div>
           <InputBox displayText={this.state.displayText} update={this.update} />
            <div>
            {this.state.badger ?
                <div>ON</div>
                :
                <div>OFF</div>
                }
                <Button  whenClicked={(e) => this.handleClick(e)}><Icon size="1.5rem" icon="alarm" />Action 1</Button>  
                <Button ref="abc" whenClicked={(e) => this.handleClick(e)}><Icon size="1.5rem" icon="language" />Action 2</Button>  
            </div>
            <br />
            <PanelCheck title="Try Mex" toggleName="Toggle thiss "
                     defaultChecked={true}
                     
                     whenClicked={(e) => this.handleCheck(this)}></PanelCheck>
            <br />
            <PanelCheckDrop title="Next option" dropTitle="Select value" toggleName="Toggle this "></PanelCheckDrop>
            <br />
            <CheckboxInput label=" The label" name="The name" />

            <FlatDropExample />
        </div>
    );
  }
}

class Button extends React.Component {
    render() {
        return (
            <button className="pure-button pure-button-success"
               onClick={(e) => this.props.whenClicked(e) } >
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
        <h1>{props.displayText}</h1>
        </div>
    );    
}

const PanelF = (props) => {
    return (
        <div>
            <div className="mypanel-shell pure-u-1-3">
                <div className="mypanel-title">another title</div>                    
                <div>
                    <input type="checkbox" name="vehicle" value="Bike">QQQ</input> 
                    <button className="pure-button pure-button-success"
                    onClick={() => this.props.whenClicked() } >
                    {this.props.children}
                    </button>
                </div>
            </div>
        </div>
    );    
}


            
const Camera = () => <span className="fa fa-camera-retro"></span>

module.exports = Actions;