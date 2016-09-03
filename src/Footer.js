import React from 'react';
import ReactDOM from 'react-dom';

import Icon from '../src/Icon.js';

class Footer extends React.Component {
  render() {
    return <h4>
            <Icon size="2rem" icon="alarm" />
            ...the bottom line...
            <Icon size="2rem" icon="language" />
          </h4>
  }
}

module.exports = Footer;