import React, { Component } from 'react'

export class Classs  extends Component {

    constructor(){
        super();

    //   this.state={name:"amandeep"}

    this.state={num: 0}
    }
    show(){

    //   this.setState({name:"ram"})

       this.setState({num: this.state.num + 1})
    }
    sho(){

        //   this.setState({name:"ram"})
    
           this.setState({num: this.state.num - 1})
        }
  render() {
    return (
      <>
      <h1>{this.state.num}</h1>


      {/* <button onClick={()=>this.show()}>update</button> */}
      
      <button onClick={()=>this.show()}>increase</button>
      <button onClick={()=>this.sho()}>decrease</button>
      </>
    )
  }
}

export default Classs 