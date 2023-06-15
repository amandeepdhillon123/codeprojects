import React, { PureComponent } from 'react'

export class Pure extends PureComponent {
    constructor(){
        super();
        this.state={
            count: 0
        }
    }
  render() {
    console.log("re-rendering")
    return (
      <div>
        <h3>Pure Component {this.state.count}</h3>
        <button onClick={()=>this.setState({count : this.state.count +1 })}>update</button>
      </div>
    )
  }
}

export default Pure