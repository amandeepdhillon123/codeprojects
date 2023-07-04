import React, { Component,createRef } from 'react'

export class Ref1 extends Component {
    constructor(){
        super();
        this.inputRef= createRef();
   
}

componentDidMount(){
    
        // this.inputRef.current.value ="1000"

        // this.inputRef.current.style.color= "red"

        // this.inputRef.current.style.backgroundColor="black"
}
  
render() {
    
    return (
      <>
       <h1>hello </h1>
       <input type="text" ref={this.inputRef}/>

      </>
    )
  }
}

export default Ref1