import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../src/Icon.js';

class Footer extends React.Component {
  render() {
    return <h4>
            <Icon size="2rem" icon="alarm" />
            ...the bottom line...
            <Icon colour="red" size="1.5rem" icon="language" />
            <div>
                <span className="fa fa-camera-retro"></span> font-awesome
            </div>
            <div>
                <span className="icon-home">  </span>
                <span className="icon-folder-upload"> </span>
                <span> icomoon icons</span>
            </div>
          </h4>
  }
}

module.exports = Footer;