import React, { PureComponent } from 'react'

export class Pure extends PureComponent {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
  render() {

    console.log("re-rendering")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={ ()=>this.setState({count : this.state.count + 1})}>increase</button>
        {/* <button onClick={ ()=>this.setState({count : 1 })}>increase</button> */}
      </div>
    )
  }
}

export default Pure