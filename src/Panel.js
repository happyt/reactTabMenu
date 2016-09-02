import React from 'react';
import ReactDOM from 'react-dom';

class Panel extends React.Component {
      constructor() {
        super();
        this.state = {
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
    return (
        <div >
            <div>
                <a>Panel text</a>
            </div>
        </div>
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

const Camera = () => <span className="fa fa-camera-retro"></span>

module.exports = Panel;