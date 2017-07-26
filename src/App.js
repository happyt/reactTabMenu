import React from 'react';
import ReactDOM from 'react-dom';
import Lister from '../src/Lister.js';
import Fire from '../src/Fire.js';
import ToDoApp from '../src/ToDoApp.js';
import StrapAList from '../src/StrapAList.js';
import StrapBList from '../src/StrapBList.js';  // not working
import Sliders from '../src/Sliders.js';
import ListLines from '../src/ListLines.js';
import Actions from '../src/Actions.js';
import Theme from '../src/Theme.js';
import Config from '../src/Config.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tabList: tabList,
            currentTab : 7
        };
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(tab) {
        this.setState({ 
            currentTab: tab.id 
        });
    }

    render() {
        return (
            <div>
                <h2>Header</h2>
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
            </div>
        )
    }
}

var strapList = [
    { 'id': 1, 'title': 'Green', 'text': 'the quick brown fox' },
    { 'id': 2, 'title': 'Blue', 'text': 'alphabetti spaghetti' }
];

var tabList = [
    { 'id': 1, 'name': 'Users', 'url': '/one' },
    { 'id': 2, 'name': 'Fire', 'url': '/two' },
    { 'id': 3, 'name': 'ToDo', 'url': '/three' },
    { 'id': 4, 'name': 'StrapA', 'url': '/four' },
    { 'id': 5, 'name': 'StrapLean', 'url': '/five' },
    { 'id': 6, 'name': 'Sliders', 'url': '/six' },
    { 'id': 7, 'name': 'ListLines', 'url': '/seven' },
    { 'id': 8, 'name': 'Actions', 'url': '/eight' },
    { 'id': 9, 'name': 'Theme', 'url': '/nine' },
    { 'id': 10, 'name': 'Config', 'url': '/ten' }
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
                    <img  width="40" src="images/image1.png" />
                    <Lister />
                </div>
                :null}

                {this.props.currentTab === 2 ?
                <div className="Two">
                    <img width="32" src="images/image2.png" />
                    <Fire />
                </div>
                :null}

                {this.props.currentTab === 3 ?
                <div className="Three">
                    <img width="24" src="images/image3.png" />
                    <ToDoApp />
                </div>
                :null}
            
                {this.props.currentTab === 4 ?
                <div className="Four">
                    <img width="32" src="images/image4.png" />
                    <StrapAList straps={strapList} />
                </div>
                :null}

                {this.props.currentTab === 5 ?
                <div className="Five">
                    <img width="32" src="images/image5.jpg" />
                    <StrapBList straps={strapList} />
                </div>
                :null}

                 {this.props.currentTab === 6 ?
                <div className="Six">
                    <img width="60" src="images/image6.jpg" />
                    <Sliders />
                </div>
                :null}

                 {this.props.currentTab === 7 ?
                <div className="Seven">
                    <img width="40" src="images/image7.png" />
                    <ListLines />
                </div>
                :null}

                 {this.props.currentTab === 8 ?
                <div className="Eight">
                    <img width="40" src="images/image8.png" />
                    <Actions />
                </div>
                :null}

                 {this.props.currentTab === 9 ?
                <div className="Nine">
                    <img width="36" src="images/image9.jpg" />
                    <Theme />
                </div>
                :null}

                 {this.props.currentTab === 10 ?
                <div className="Ten">
                    <img width="48" src="images/image10.jpg" />
                    <Config />
                </div>
                :null}

            </div>
        );
    }
});

export default App