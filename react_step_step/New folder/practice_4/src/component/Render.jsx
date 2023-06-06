import React, { Component } from 'react'

export class Render extends Component {
 constructor(){
  
    super();
    this.state={
        name:"amandeep"
    }

    console.warn(this.props)

 }



  render() {

    console.log(this.props.logic)

    console.log("render")
    return (
   <>  
   <h2></h2>
     <h1>hello {this.state.name} {this.props.logic}</h1>
      <button onClick={()=> this.setState({name:"ram"})}>update</button>
   </>
    )
  }
}

export default Render