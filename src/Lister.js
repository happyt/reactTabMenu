import React from 'react';
 
export default class Lister extends React.Component {
    constructor() {
        super();
        this.state = { items: [{id:"1",name:"alan"}, {id:"2", name:"bob"}] };
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
                { this.state.items.map(item => { return <div key={item.id}>{item.name}, {item.username}</div>}) }          
            </div>  
        );
    }
}

module.exports = Lister;