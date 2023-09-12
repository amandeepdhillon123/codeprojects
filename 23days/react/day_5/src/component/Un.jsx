import React, { Component } from 'react'
import Unmount from './Unmount';
export class Un extends Component {
    constructor(){
        super();
        this.state={
            show:true
        }
    }
  render() {
    return (
      <div>
       
        {
            this.state.show ?  <Unmount/> : <h1>child compnenet</h1>
        }
        {/* <h1>component will unmount</h1> */}
        <button onClick={()=> this.setState({show :!this.state.show})}>toggle</button>
      </div>
    )
  }
}

export default Un