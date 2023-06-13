import React, { Component } from 'react'

export class Cons extends Component {

    constructor(){
        super();

        this.state={
            num: 0
        }

        console.log("constructor")
    }

    

    componentDidUpdate(preProps,preState,snapShot){
        console.log("update" , preState)
    
    }

    componentDidMount( ){
        console.log("did mount ")

     
    }

    shouldComponentUpdate(){

        console.log(" should")
        return false
    }
  render() {

    console.log("reder")
    return (
      <>
      <h1>{this.state.num}</h1>

      <button onClick={()=> this.setState({num: this.state.num + 1 })}>update</button>
      </>
    )
  }
}

export default Cons