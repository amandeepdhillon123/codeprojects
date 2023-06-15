import React, { Component ,createRef} from 'react'

export class Ref  extends Component {

    constructor(){
        super();
        this.inputRef= createRef();
    }
    // componentDidMount(){
    //       console.log(this.inputRef.current.value="amandeep")

    // }

     show(){
          console.log(this.inputRef.current.value)
     }
  render() {
    return (
      <div> 
        <h1>input ref</h1>
    <input type="text" ref={this.inputRef} />

    <button onClick={()=>this.show()}> update</button>
      </div>
    )
  }
}

export default  Ref