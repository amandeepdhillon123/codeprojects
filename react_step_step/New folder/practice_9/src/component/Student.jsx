import React, { Component } from 'react'

export class Student extends Component {
 
    componentWillUnmount(){
        alert("mein gya")
    }
 
    render() {
    return (
      <div>Student</div>
    )
  }
}

export default Student