import React, { Component } from 'react'

export class Sholudmount extends Component {
     constructor(){
        super();

        this.state={
            name:0
        }

        console.log("constructor");
     }

     shouldComponentUpdate(){
        console.log("component update", this.state.name);
        // return false;
      

        if( this.state.name >= 5 && this.state.name  < 10 )
        {
            return true;
        }
        else{
              return false;
        }
     }

  render() {

    console.log("render")
    return (
   <>
     <h1> hello Amandeep {this.state.name}</h1>

     <button onClick={()=> this.setState({name: this.state.name+ 1})}>update</button>
   
   </>
    )
  }
}

export default Sholudmount