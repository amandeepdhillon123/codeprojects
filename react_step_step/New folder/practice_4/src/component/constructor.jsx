
import React, { Component } from 'react'

export class Construct extends Component {

    constructor(){

        super();

        this.state={name:"amandeep"}

        

    //    console.log(this.props)

    }

        

    
render() {

    

    // console.log("render")
    return (
      <div>{this.state.name}</div>
    )
  }
}

export default Construct