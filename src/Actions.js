import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../src/Icon.js';

class Actions extends React.Component {
      constructor() {
        super();
        this.state = {
            displayText : "starter",
            badger: false
            
        };
        this.update = this.update.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.sendCommand = this.sendCommand.bind(this);
        this.showResults = this.showResults.bind(this);
    }

    handleClick(e) {
        this.setState({badger: !this.state.badger});
   //     debugger;
   //     this.setState( {displayText : e.target.textContent} );
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
    return <h4>
        <InputBox displayText={this.state.displayText} update={this.update} />

        {this.state.badger ?
        <div>ON</div>
        :
        <div>OFF</div>
        }
        <Button  whenClicked={(e) => this.handleClick(e)}><Icon size="1.5rem" icon="alarm" />Action 1</Button>  
        <Button ref="abc" whenClicked={(e) => this.handleClick(e)}><Icon size="1.5rem" icon="language" />Action 2</Button>  
        <PanelCheck />

    </h4>
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

class PanelCheck extends React.Component {
    render() {
        return (
            <div>
                <div className="mypanel-shell pure-u-1-3">
                    <div className="mypanel-title">another title</div>                    
                    <div>
                    XXX
                        <button className="pure-button pure-button-success"
                        onClick={() => this.props.whenClicked() } >
                        {this.props.children}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const Camera = () => <span className="fa fa-camera-retro"></span>

module.exports = Actions;