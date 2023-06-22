import React, { Component } from 'react'

export class Rerender extends Component {
    constructor(){
        super();
        this.state={
            email:'xyz@gmial.com'

            
        }
    }
  render() {
  console.log(this.state.email)
    // console.log("class update",this.props)
    return (
        <>
      <div>Rerender</div>
      <button onClick={() =>this.setState({email:"ram2gmail"})}>update email</button>
      </>
    )
  }
}

export default Rerender