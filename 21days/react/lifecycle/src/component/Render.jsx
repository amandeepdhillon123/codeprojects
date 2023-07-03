import React, { Component } from 'react'

export class Render extends Component {
    constructor(){
        super();

        this.state={
            count:0
        }

        console.log("constructor life cycle")
    }
    componentDidMount(){
        console.log("componentDid mount")
    }

    componentDidUpdate(preProps,preState,snapShot){
        console.log(preState)
        if(this.state.count > 10)
        {
          this.setState({count: this.state.count + 1})
        }
    }

     shouldComponentUpdate(){
     

       if(this.state.count < 10)
       {
       return true;
       }
       else{
        return false;
       }
     }
  render() {

    console.log("render life cycle method")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count: this.state.count + 1})}>update</button>
      </div>
    )
  }
}

export default Render