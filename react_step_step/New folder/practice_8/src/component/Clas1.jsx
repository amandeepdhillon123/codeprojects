import React, { Component } from 'react'

export class Clas1 extends Component {
  render() {
    return (
      <div>
    <h1>Props in class component</h1>
    <h1>{this.props.name}</h1>
    <h2>{this.props.email}</h2>

      </div>
    )
  }
}

export default Clas1