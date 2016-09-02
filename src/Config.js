import React from 'react';
import ReactDOM from 'react-dom';

class Config extends React.Component {
      constructor() {
        super();
        this.state = {
            badger: false            
        };
    }

  render() {
    return (
        <div>
            Config
        </div>
    );
  }
}

module.exports = Config;