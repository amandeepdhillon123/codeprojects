import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class class2 extends Component {

  show(){
    console.log(this)
  }
  render() {
    return (
      <div>

<button onClick={()=>this.show()}>clir</button>
      </div>
     
    )
  }
}

export default class2