import React, { Component } from "react";

class Render extends Component {

    constructor(){
          super();
          this.state={
          email:"zyz@gmail.com"
          }

    
    }

   

    render(){


        //   using props
        // console.log("render method",this.props.name )


        // console.log("ram")



        console.log("render methd",this.state.email)

        // using state 
      
        return(
        
            <>
                {/* <h1>{this.props.name}</h1> */}


                <h1>User Component</h1>

                <button onClick={() => this.setState({email:"ras@mail.com"})}> Update email address</button>
            </>
        )
        
    }
}

export default Render;