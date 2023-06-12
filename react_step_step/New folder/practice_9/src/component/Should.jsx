import React, { Component } from 'react'

export class Should extends Component {
     constructor(){
        super();
   this.state={
       count: 0
   }
     }
    //  componentDidMount(){

    //     console.log("did mount")
    //  }
    //  componentDidUpdate(preProps,preState,snapShot){
    //     console.log(preState)
         
    //  }
     shouldComponentUpdate(){
        console.log("should update", this.state.count)
        if(this.state.count > 5 && this.state.count < 10 )
        {
            return true;
        }
        else{
            return false;
        }
    }
    
    render(){

        console.log("render")
    return (
      <div>

        <h1> hello {this.state.count}</h1>
        <button onClick={()=> this.setState({count:this.state.count + 1})}>Increase</button>
      
      </div>
    )
  }
}

export default Should