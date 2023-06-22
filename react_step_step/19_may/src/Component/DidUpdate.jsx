

import React, { Component } from 'react'

export class DidUpdate extends Component {
  
  constructor(){
    super();

    this.state={
     count:0
    }

    console.log("construrctor")
  }
  componentDidUpdate(preProps,preState,snapshots){

    console.log("mount update",preState)
  }
  
    render()   {

        console.log("render")
    return (
        <>
          <div>DidUpdate{this.state.count}</div>
      <button onClick={()=>this.setState({count : this.state.count+ 1})}>update</button></>
    
    )
  }
}

export default DidUpdate