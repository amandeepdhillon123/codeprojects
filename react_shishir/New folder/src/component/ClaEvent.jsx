import React, { Component } from 'react'

export class ClaEvent extends Component {
  
    constructor(){
        super();
         
    }

    //  show(event){
    //     console.log(event.target.value)
    //  }

    show=()=>{
        console.log(this.show.name)
    }
    render() {
    return (
      <>
      <h1>class event</h1>

      {/* <button onClick={()=>this.show("amandeep")}>showme</button> */}
      {/* <input type="text" onChange={this.show}/> */}
      
      <button onClick={this.show}>showme</button>
      
      </>
    )
  }
}

export default ClaEvent