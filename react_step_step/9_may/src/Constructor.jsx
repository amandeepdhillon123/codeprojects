

import React, { Component } from "react";

class Constructor extends Component {

    constructor(){
        super();

        this.state ={
             data:"anil"
        }

        console.log("amandeep")
    }

    render(){

        // console.log("ram")
      
        return(
        
            <>
                <h1>hello world {this.state.data}</h1>
            </>
        )
        
    }
}

export default Constructor;