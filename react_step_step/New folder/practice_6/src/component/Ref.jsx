import React, { Component } from 'react'
 import { createRef } from 'react';
export class Ref extends Component {
  
    constructor(){
        super();
     this.inputRef = createRef();
    }

    componentDidMount(){
        // console.log(this.inputRef.current.value="amandeep");
    }

    getVal(){
        console.log(this.inputRef.current.value) 

        this.inputRef.current.style.color = "red"

    }
  
    render() {
    return (
        <>
         <div>Ref</div>
          <input type="text"  ref={this.inputRef}/>

          <button onClick={()=> this.getVal()}>check Reference</button>
        </>
     
    )
  }
}

export default Ref