import React, { Component, createRef } from 'react'

export class Ref extends Component {

    constructor(){
        super();
        this.inputRef= createRef();
    }

    componentDidMount(){
          this.inputRef.current.value="1000"
          this.inputRef.current.style.color="red"
        //   this.inputRef.current.style.display="none"

    }

  getValue(){
    this.inputRef.current.style.display="none"
  }
  render() {
    return (
      <div>
    <input type="text" ref={this.inputRef} />
    <button onClick={()=>this.getValue()}>update</button>
      </div>
    )
  }
}

export default Ref