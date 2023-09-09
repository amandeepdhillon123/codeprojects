import { Component } from "react";

class Function extends Component    {
    constructor(){
        super();
        this.state={
            // data:"anil"
            count:0
        }
    }

    render(){
        return(
            <>
             <h1>{this.state.count} </h1>
             <button onClick={()=> this.setState({count: this.state.count + 1})}>inc</button>
             <button onClick={()=> this.setState({count: this.state.count - 1})}>dec</button>
            </>
        )
    }
}    

export default Function