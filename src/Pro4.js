import React from 'react';
class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount(){
        fetch(                                          )
            .then(response => response.json())
            .then(response => {
               console.log(response);
            })
        }
        render(){
            return(
                <>
                <h1>Json data is loading in console</h1>
                </>
            );
        }
    }
export default Demo;