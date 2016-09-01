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
            <div style="background:#f7f8fa;display:flex; display: -webkit-box; display: -webkit-flex;margin:1px;">
            <a>React Native</a></div>
    
        </div>
    );
  }
}


const Camera = () => <span className="fa fa-camera-retro"></span>

module.exports = Panel;