

  import React from "react";
import { Component } from "react";

 export default  class State extends  Component{

    constructor(){
        super();

        this.state={name:"aman"}
    }
    render(){
        
       return(
        <>
            <h1>{this.state.name}</h1>

            <button onClick={() => this.setState({name:"peter"})}> Update  name</button>
        </>
       )
    }
  }