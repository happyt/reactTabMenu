import React from 'react';
 
export default class Lister extends React.Component {
    constructor() {
        super();
        this.state = { items: [{key:"1",name:"alan"}, {key:"2", name:"bob"}] };
    }
    
    componentDidMount() {
        fetch(`http://jsonplaceholder.typicode.com/users`) 
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        this.setState({items: json});
                    });
    }
    
    render() {        
        return(
            <div>
                <div>Items:</div>
                { this.state.items.map(item => { return <div key={item.key}>{item.name}, {item.username}</div>}) }          
            </div>  
        );
    }
}

module.exports = Lister;