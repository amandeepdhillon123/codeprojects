import React, { Component } from 'react'
import Pure1 from './Pure1';
export class Pure extends Component {

    constructor(){
        super();
        this.state={
            count:0
        }
    }
  render() {
    console.log("rendering")
    return (
      <div>

      <Pure1 count={this.state.count}/>
        <button onClick={()=> this.setState({count: this.state.count })}>update</button>

    
      </div>
    )
  }
}

export default Pure