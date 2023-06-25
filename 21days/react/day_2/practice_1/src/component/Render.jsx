import React, { Component } from 'react'

export class Render extends Component {
    constructor(){
        super();
        this.state={
            num: 0
        }

        console.log("constructor")
     
    }
    componentDidUpdate(preProp,preState,snapShot){
        console.log("did update", preState.num)
        console.log(preProp)
    }

    shouldComponentUpdate(){
        if(this.state.num > 5 &&  this.state.num < 10 )
        {
              return true;
        }
        else{
            return false;
        }
    }

    componentDidMount(){
        console.log("didmount")
    }
    render() {

        console.log("render")
    return (
      <div>
        <h2>{this.props.ram}</h2>
         <h1>{this.state.num}</h1>
         <button onClick={()=> this.setState({num: this.state.num + 1})}>update</button>
      </div>
    )
  }
}

export default Render