import React from 'react'

var Fire = React.createClass({
    getInitialState: function() {
        return {

            items : [
                { 'id': 1, 'name': 'One', 'url': '/one' },
                { 'id': 2, 'name': 'Two', 'url': '/two' },
                { 'id': 3, 'name': 'Three', 'url': '/three' },
                { 'id': 4, 'name': 'FourZ', 'url': '/four' }
            ]
        };
    },

  componentWillMount: function() {
    this.firebaseRef  = firebase.database().ref("table");
    console.log("Mounting...", firebase);
    this.firebaseRef.on("value", function(dataSnapshot) {
        this.items.push(dataSnapshot.val());
        console.log("Value...", dataSnapshot.val());
        this.setState({
             items: this.items
         });
     }.bind(this));
  },

  componentWillUnmount: function() {
    this.firebaseRef.off();
  },

  render() {        
        return(
            <div>
                <div>Table:</div>
                 { this.state.items.map(item => { return <div key={item.id}>{item.name}</div>}) } 
           </div>  
        );
    }
});

module.exports = Fire;