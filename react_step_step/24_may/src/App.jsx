import './App.css'
import React, { Component } from 'react'

export class App extends Component {

constructor(){
  super();
  console.log("constructor")
}
  render() {

    console.log("render")
    return (
      <div>App</div>
    )
  }
}

export default App
