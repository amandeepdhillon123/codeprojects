import { Component } from "react";

export default class APP extends Component {
  constructor() {
    super();

    console.log("constructor life");
  }

  render() {
    console.log("render");

    return (
      <>
        <h1>hello jii</h1>
      </>
    );
  }
}
