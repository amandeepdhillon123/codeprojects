import React, { Component } from 'react'
import Two from './two';
export class One extends Component {
    constructor(){
        super();
        this.state={
            show:true
        }
    }

render() {
    return (
      <div>
        <h1>
           {
            this.state.show ? <Two/> :<h1> child component removed </h1>
           }
        </h1>
          <button onClick={()=>this.setState({show : !this.state.show})}>update</button>
      </div>
    )
  }
}

export default One