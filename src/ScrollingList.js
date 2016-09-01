import React from 'react';
import ReactDOM from 'react-dom';

class ScrollingList extends React.Component {
      constructor() {
        super();
        this.state = {
            txt : "starter",
            items: [
            {   content: "Item One",
                complete: true,
                order: 1
            },
            {   content: "Item Two",
                complete: false,
                order: 2
            },
            {   content: "Item Three",
                complete: false,
                order: 3
            },
            {   content: "Item Four",
                complete: false,
                order: 4
            }
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