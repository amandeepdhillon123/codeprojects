
import React, { Component } from "react";

export default class User extends Component {

   

    render(){
        return(
            <>
            <h1 style={{background:"red"}}>hello {this.props.name}</h1>
            </>
        )
    }
}