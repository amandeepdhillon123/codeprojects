
import React from "react";
import { Component } from "react";

class Life extends Component {

    constructor(){

        super();
        console.log("jello")

        this.state={
            name:"amandeep"
        }
    }
  

  render() {
    return (
      <div>

        <h1>hello {this.state.name }</h1>
      </div>
    )
  }
}

export default Life;
