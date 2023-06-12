import React, { Component } from 'react'

export class Cla extends Component {

    constructor(){
        super()
        this.state={
            email:'',
            pass:'',
            name:'',
            city:''
        }
    }

   getData=(e)=>{
    e.preventDefault();
    console.log(this.state.name,' ',this.state.email,' ',this.state.city,' ',this.state.pass)
   }
  render() {
    return (
        <div>
        <h1>Registeration form</h1>
         <form onSubmit={this.getData}>
             <label htmlFor="name">UserName : </label>
          <input type="text" id="name"  onChange={(e) =>this.setState({name:e.target.value})} /> <br /> <br />
          <label htmlFor="name">Password : </label>
          <input type="password" id="name"  onChange={(e) =>this.setState({pass:e.target.value})} /> <br /> <br />
          <label htmlFor="name"> Email : </label>
          <input type="email" id="name"  onChange={(e) =>this.setState({email:e.target.value})}  /> <br /> <br />
          <label htmlFor="name">City: </label>
          <input type="text" id="name"  onChange={(e) =>this.setState({city:e.target.value})}/> <br /> <br />
          <button>Register</button>
         </form>
     
         </div>
    )
  }
}

export default Cla;