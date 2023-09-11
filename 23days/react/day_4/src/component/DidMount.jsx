import { Component } from "react";

export default class Mount extends Component {
  constructor() {
    super();
    console.log("constuctor");

    this.state ={
        name :"amande"
    }
  }

  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    console.log("render life cycle method");
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"deep"})}}>change</button>
      </>
    );
  }
}
