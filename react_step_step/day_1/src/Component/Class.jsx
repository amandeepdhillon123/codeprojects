 
import React, { Component } from "react";

class Class extends Component {
    constructor()
    {
        super();
        // this.state=({data:"amadeep"})


        this.state=({data: 0})

    }

    apple() {
       
        // alert("apple")

        this.setState({data:"aman"})

       
    }

    inc(){
        this.setState({data:this.state.data+1})
    }

    dec(){
        this.setState({data:this.state.data-1})
    }
    render(){
            
       return(
        <div>
            <h1>{this.state.data}</h1>
            <button onClick={() => this.apple()}>Updata Data</button>
             

            <button onClick={() => this.inc()}>inc</button>
          

            <button onClick={() => this.dec()}>dec</button>
        
        
        
        
        
        </div>
       )
    }
}

export default Class;