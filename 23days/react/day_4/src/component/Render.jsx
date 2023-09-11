import { Component } from "react";

export default class Render extends Component{
    constructor(){
        super();
        this.state={
            name:"amandee"
        }
    
    }

    render(){

        console.log(this.props.name)
        console.log(this.state.name)
        return(
            <>
             <h1>{this.props.name}</h1>
             <h1>{this.state.name}</h1>
            <button onClick={()=> this.setState({name:"rahul"})}>change</button>
            </>
        )
    }
}