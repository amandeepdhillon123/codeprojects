import React, { Component } from 'react'

export class two extends Component {
    componentWillUnmount(){
        alert("component will unmount")
    }
  render() {
    return (
      <div>two</div>
    )
  }
}

export default two