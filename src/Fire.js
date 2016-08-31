import React from 'react'

var ListItems = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(item, index) {
      return (
        <li key={ index }>
          { item.text }
        </li>
      );
    };
    if (Array.isArray(this.props.items) && this.props.items.length > 0) {
//        console.log("Length...", this.props.items.length);
        return <ul>{ this.props.items.map(createItem) }</ul>;
    } else {
        return <div>No entries</div>
    }
  }
});

var Fire = React.createClass({
    getInitialState: function() {
        return {
            items : []
        };
    },

  componentWillMount: function() {
    this.firebaseRef  = firebase.database().ref("table");
    this.firebaseRef.on('value', function(dataSnapshot) {
        var items = [];
        dataSnapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item['.key'] = childSnapshot.key;
            items.push(item);
        }.bind(this));
        this.setState({
             items: items
         });
     }.bind(this));
  },

  componentWillUnmount: function() {
    this.firebaseRef.off();
  },

  render: function() {        
        return(
            <div>
                <div>Firebase table:</div>
                <ListItems items={ this.state.items } /> 
           </div>  
        );
    }
});

module.exports = Fire;