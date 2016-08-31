import React from 'react';
import ReactDOM from 'react-dom';
import Lister from '../src/Lister.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt : "starter",
            red : 0,
            green : 0,
            blue : 0,
            tabList: tabList,
            currentTab : 1
        };
        this.update = this.update.bind(this);
        this.changeTab = this.changeTab.bind(this);
    }

    update (e) {
        this.setState(
            {
                red : ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
                green : ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
                blue : ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
                txt : e.target.value
            }
        );
    }

    changeTab(tab) {
        this.setState({ 
                currentTab: tab.id 
        });
    }

    render() {
        return (
            <div>
            <div>
                <Tabs
                    currentTab={this.state.currentTab}
                    tabList={this.state.tabList}
                    changeTab={this.changeTab}
                />
                <Content
                    currentTab={this.state.currentTab}
                 />
            </div>
                <Slider ref="red" update={this.update} />
                {this.state.red}
                <br />
                <Slider ref="green" update={this.update} />
                {this.state.green}
                <br />
                <Slider ref="blue" update={this.update} />
                {this.state.blue}
                <br />
                <InputBox txt={this.state.txt} update={this.update} />
                <br />
                <Button>I <Heart/> choose this</Button>    
            </div>
        )
    }
}

class Button extends React.Component {
    render() {
        return <button>{this.props.children}</button>
    }
}

const Heart = () => <span className="fa fa-camera-retro"></span>

class Slider extends React.Component {
    render() {
        return (
            <div>
            <input ref="inp" type="range"
                min="0"
                max="255"
                onChange={this.props.update} />
            </div>
        );
    }
}

const InputBox = (props) => {
    return (
        <div>
        <input type="text"
                onChange = {props.update} />
        <h1>{props.txt}</h1>
        </div>
    )    
}

var tabList = [
    { 'id': 1, 'name': 'One', 'url': '/one' },
    { 'id': 2, 'name': 'Two', 'url': '/two' },
    { 'id': 3, 'name': 'Three', 'url': '/three' },
    { 'id': 4, 'name': 'FourZ', 'url': '/four' }
];

var Tab = React.createClass({
    handleClick: function(e){
        e.preventDefault();
        this.props.handleClick();
    },
    
    render: function(){
        return (
            <li className={this.props.isCurrent ? 'pure-menu-item pure-menu-selected' : 'pure-menu-item'}>
                <a onClick={this.handleClick} href={this.props.url} className="pure-menu-link">
                    {this.props.name}
                </a>
            </li>
        );
    }
});

var Tabs = React.createClass({
    handleClick: function(tab){
        this.props.changeTab(tab);
    },
    
    render: function(){
        return (
            <nav className="pure-skin-mine pure-menu-horizontal">
                <ul className="pure-skin-mine pure-menu-list">
                {this.props.tabList.map(function(tab) {
                    return (
                        <Tab
                            handleClick={this.handleClick.bind(this, tab)}
                            key={tab.id}
                            url={tab.url}
                            name={tab.name}
                            isCurrent={(this.props.currentTab === tab.id)}
                         />
                    );
                }.bind(this))}
                </ul>
            </nav>
        );
    }
});

var Content = React.createClass({
    render: function(){
        return(
            <div className="content">
                {this.props.currentTab === 1 ?
                <div className="One">
                    <Lister />
                </div>
                :null}

                {this.props.currentTab === 2 ?
                <div className="Two">
                    <img src="images/image2.png" />
                </div>
                :null}

                {this.props.currentTab === 3 ?
                <div className="Three">
                    <img src="images/image3.png" />
                </div>
                :null}
            
                {this.props.currentTab === 4 ?
                <div className="Four">
                    <img src="images/image4.png" />
                </div>
                :null}
            </div>
        );
    }
});

export default App