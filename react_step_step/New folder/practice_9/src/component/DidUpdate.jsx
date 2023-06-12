import React, { Component } from 'react'

export class DidUpdate extends Component {
     constructor(){
        super();
   this.state={
       count: 0
   }
     }
     componentDidMount(){

        console.log("did mount")
     }
     componentDidUpdate(preProps,preState,snapShot){
        console.log(preState)
         
     }
    
    render(){

        console.log("render")
    return (
      <div>

        <h1> hello {this.state.count}</h1>
        <button onClick={()=> this.setState({count:this.state.count + 1})}>Increase</button>
      
      </div>
    )
  }
}

export default DidUpdate