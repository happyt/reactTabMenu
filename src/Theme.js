import React from 'react';
import ReactDOM from 'react-dom';

class Theme extends React.Component {
      constructor() {
        super();
        this.state = {
            badger: false            
        };
    }

  render() {
    return (
        <div>
            <h2>Example Theme</h2>
            <div>
                <a className="pure-button pure-button-active" href="#">Link Button</a>
                <button className="pure-button pure-button-active">Pure Button</button>
                <button className="pure-button pure-button-success">Success Button</button>
                <button className="pure-button pure-button-error">Error Button</button>
                <button className="pure-button pure-button-warning">Warning Button</button>
                <button className="pure-button pure-button-secondary">Secondary Button</button>            
            </div>
            <br />
            <table className="pure-skin-mine pure-table">
                <thead  className="pure-skin-mine pure-table">
                    <tr>
                        <th>#</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="pure-table-odd">
                        <td>1</td>
                        <td>Honda</td>
                        <td>Accord</td>
                        <td>2009</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Toyota</td>
                        <td>Camry</td>
                        <td>2012</td>
                    </tr>
                    <tr className="pure-table-odd">
                        <td>3</td>
                        <td>Hyundai</td>
                        <td>Elantra</td>
                        <td>2010</td>
                    </tr>
                </tbody>
            </table>

            <div className="pure-g">
                <div className="pure-u-1-4"><p>Grid plain</p></div>
                <div className="pure-u-1-4 pure-button-success"><p>Grid rounded</p></div>
                <div className="pure-u-1-4 pure-button-primary"><p>Grid square</p></div>
            </div>
            <br />
            <div className="pure-g">
                <div className="pure-u-1-3 pure-button-secondary">
                    <div className="pure-button-success">the title</div>
                    <div>the content
                        <button>press this</button>
                        </div>
                    </div>
                </div>
                <br />

                <div className="mypanel-shell pure-u-1-3">
                    <div className="mypanel-title">another title</div>
                    <div className="mypanel-body">more content
                    <button>press</button>
                </div>
            </div>
        </div>
     ); 
  }
}


module.exports = Theme;