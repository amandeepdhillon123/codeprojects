import React, { PureComponent } from 'react'

export class Pure1 extends PureComponent {

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
       <h1>Pure component {this.state.count}</h1>
        
        <button onClick={()=> this.setState({count: this.state.count })}>update</button>

    
      </div>
    )
  }
}

export default Pure1