import React,{Component} from "react";
// import { useState } from "react";

export default class Stateclass extends Component{
   
    constructor()
    {
        super();
        this.state={
            // data:"aman"
            data:1
        }
    }

    apple()
    {
        // alert("hello ji")
        // this.setState({data:'amandeep'})
        this.setState({data:this.state.data+1})
    }

    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={() => this.apple()}> click me</button>
            </div>
        )
    }
}