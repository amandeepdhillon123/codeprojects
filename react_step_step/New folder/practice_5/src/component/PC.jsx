

import React from 'react'



export class PC extends React.PureComponent {
     
    constructor(){
        super();
        this.state={
            count:1
        }
    }

  render() {
    console.log("check-rendering")
    return (
      <div>
        <h1>pure component in react {this.state.count}</h1>
        <button onClick={()=> this.setState({count : this.state.count })}>increase</button>
      </div>
    )
  }
}

export default PC