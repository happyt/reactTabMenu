import React from 'react';
import ReactDOM from 'react-dom';

class ScrollingList extends React.Component {
      constructor() {
        super();
        this.state = {
            txt : "starter",
            items: [
                {line:1, text: "abcd"},
                {line:2, text: "bbbb"},
                {line:3, text: "cccc"},
                {line:4, text: "dddd"}
            ]
        };
        this.update = this.update.bind(this);
    }

   update (e) {
        this.setState(
            {
                txt : e.target.value
            }
        );
    }
  
    render() {
    }

}