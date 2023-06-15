import React, { Component } from 'react'

export class Form1 extends Component {
     constructor(){

        super();
        this.state={
            name:"",
            email:""
        }
     }

     show=(e)=>{
        e.preventDefault();
  console.log(this.state.name)
  console.log(this.state.email)

        }
    render() {
    
    return (
        <>

        <form onSubmit={this.show}>
            <input type="text" onChange={(e)=> this.setState({name:e.target.value})} />
            
            <input type="text" onChange={(e)=> this.setState({email:e.target.value})} />
           <input type="submit" />
        </form>
        </>
    )
  }
}

export default Form1