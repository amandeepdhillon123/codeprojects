import React from "react";
import { Component } from "react";

export class USTCL extends Component{
    constructor(){
        super();
        this.state={
            // data:"amandeep"

            num: 0
        }
    }

    // changeHandler(){
    //     this.setState({data:"deep"})
    // }
  

    render(){

        return(
            <div>
            <h1>{this.state.num}</h1>
            {/* <button onClick={()=> this.changeHandler()}>update</button> */}


      <button onClick={()=> this.setState({num: this.state.num + 1})}>Increase</button>
      <button onClick={()=> this.setState({num: this.state.num - 1})}>Decrease</button>

      <button onClick={()=> this.setState({num: 0 })}>Reset</button>
      {/* <button>decrease</button> */}


            </div>
           
        )
    }
}

