import React, { Component } from 'react'

export class Unmount extends Component {
  componentWillUnmount(){
    // alert("will unmount")
    console.log("will unmount")
  }
    render() {
    return (
      <div>Unmount</div>
    )
  }
}

export default Unmount