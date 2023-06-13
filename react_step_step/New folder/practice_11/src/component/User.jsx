import React, { Component } from 'react'

export class User extends Component {
    componentWillUnmount(){
        alert("taget complete ")
    }
  render() {
    return (
      <div>User</div>
    )
  }
}

export default User