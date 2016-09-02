import React from 'react';
import ReactDOM from 'react-dom';

export default class PanelCheckbox extends React.Component {
      constructor() {
        super();
        this.state = {
            checked: false            
        };
    }

  render() {
    return (
        <div>
            <div className="mypanel-shell pure-u-1-3">
                <div className="mypanel-title">another title</div>
                <div className="mypanel-body">more content
                <button>press</button>
            </div>
        </div>
     ); 
  }
}
