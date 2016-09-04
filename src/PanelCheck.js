import React from 'react';

class PanelCheck extends React.Component {
    constructor() {
        super();
        this.state = {
            onOff: false            
        };
    }
    render() {
        return (
            <div>
                <div className="mypanel-shell pure-u-1-3">
                    <div className="mypanel-title">{this.props.title}</div>                    
                    <div  className="mypanel-body">
                        <h3>{this.props.toggleName} .
                       <input type="checkbox" name="vehicle" 
                                defaultChecked={this.props.defaultChecked}
                                onClick={(e) => this.props.whenClicked(e) }></input> 
                        </h3>
                     </div>
                </div>
            </div>
        );
    }
}


module.exports = PanelCheck;