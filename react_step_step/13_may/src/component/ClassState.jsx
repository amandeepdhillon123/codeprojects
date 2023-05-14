
import React from "react";
import { Component } from "react";

class Update extends Component{

   constructor(){
        
    super();

    this.state={name:"Aman"}
    this.state={number: 0}
   }

   update(){

    this.setState({name:"Ram"})
   }

   inc(){

    this.setState({number: this.state.number + 1})
   }

   dec(){

    this.setState({number: this.state.number - 1})
   }

    render(){

        return(
            <div>
           <h1>Update with useState in class</h1>
             <h2>{this.state.name}</h2>
           {/* <button onClick={()=>this.setState({name:"ram"})}>Update</button>  */}
            
            <button onClick={() => this.update()}>Update</button> 
            <h2>{this.state.number}</h2>
            <button onClick ={() => this.inc()}>increase</button> 
            <button onClick ={() => this.dec()}>Decrease</button>
            </div>
        )
    }
}

export default Update;

