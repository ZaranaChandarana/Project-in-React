
import React from 'react';

class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : ''
        }
    }
    handleChange = event => {
        this.setState({name : event.target.value});
   }
   handleSubmit = event => {
    const user = {
        name : this.state.name
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method : 'POST',
        body : JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json) 
    });
    event.preventDefault();
   }
   render(){
    return(
        <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person Name :
                    <input type="text" name="name" onChange={this.handleChange}/>
               </label>
               <button type = "submit">Add</button>
            </form>
        </>
    )
   }
}
export default Demo;