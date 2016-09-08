import React from 'react';

class PanelCheckDrop extends React.Component {

    render() {
        return (
            <div>
                <div className="mypanel-shell pure-u-1-3">
                    <div className="mypanel-title">{this.props.title}</div>                    
                    <div  className="mypanel-body">
                        <h3>{this.props.toggleName} :
                          <input type="checkbox" 
                                className="move-over"
                                defaultChecked={this.props.defaultChecked}
                                onClick={() => this.props.whenClicked(this.state.checked) }></input> 
                          
                          <select className="move-over">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                        </h3>
                     </div>
                </div>
            </div>
        );
    }
}


module.exports = PanelCheckDrop;
    // {this.props.items.map(function(item, i) {
    //                <div onClick={handleClick.bind(this, i, props)} key={i}>{item}</div>
    //             );
