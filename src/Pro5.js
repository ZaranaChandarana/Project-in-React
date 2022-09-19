import React from 'react';

class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount(){
        fetch('https://akashsir.in/myapi/crud/todo-list-api.php')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items:json
            })
        });
    }
    render(){
        var { isLoaded,items } =this.state;
        if(!isLoaded){
            return <div> Loading...</div>
        }
        return(
            <div classname = "Demo">
                <ul>
                    {items.map(item => (
                  <li key ="{item_id}">
                    Name : {item.todo_title} | Surname :{item.todo_details}
                  </li>      
                    ))}
                </ul>
            </div>
        )
    }
}
export default Demo;