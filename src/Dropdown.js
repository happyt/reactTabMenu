React

import React from 'react'

var Dropdown = React.createClass({
    getInitialState: function() {
        return {
            listVisible: false,
            selected: this.props.selected
        };
    },

    select: function(item) {
        this.state.selected = item;
    },

    show: function() {
        this.setState({ listVisible: true });
        console.log("show");
        document.addEventListener("click", this.hide);
    },

    hide: function() {
        this.setState({ listVisible: false });
        console.log("hide");
        document.removeEventListener("click", this.hide);
    },

    render: function() {
        return (
            <div className="Dropdown">
                <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
                    <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
                        <span style={{ background: this.state.selected.hex }}>{this.state.selected.name}</span>
                        <i className="fa fa-angle-down"></i>
                    </div>
                    <div className="dropdown-list">
                        <div>
                            {this.renderListItems()}
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    renderListItems: function() {
        var items = [];
        for (var i = 0; i < this.props.list.length; i++) {
            var item = this.props.list[i];
            items.push(<div onClick={this.select.bind(null, item)}>
                <span style={{ color: item.hex }}>{item.name}</span>
            </div>);
        }
        return items;
    }
});

module.exports = Dropdown;