
import React, { Component } from 'react'

export class Student extends Component {
  
  
    render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default Student