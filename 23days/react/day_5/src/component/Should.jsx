import React, { Component } from 'react'

export class Should extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
}
shouldComponentUpdate(){
    console.log("should",this.state.count)
    return true
}
    render() {
    return (
      <div>
       <h1>{this.state.count}</h1>
       <button onClick={()=> this.setState({count : this.state.count + 1})}>change</button>
      </div>
    )
  }
}

export default Should