import React, { Component } from 'react'

export class Render extends Component {
    constructor(){
        super();
        this.state={
            num: 0
        }

        console.log("constructor")
     
    }

    componentDidMount(){
        console.log("didmount")
    }
    render() {

        console.log("render")
    return (
      <div>
         <h1>{this.state.num}</h1>
         <button onClick={()=> this.setState({num: this.state.num + 1})}>update</button>
      </div>
    )
  }
}

export default Render