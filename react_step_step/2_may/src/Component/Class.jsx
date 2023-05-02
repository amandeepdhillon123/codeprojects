

import React from "react";
import { Component } from "react";

export default class Demo extends Component {

    constructor(){
        super();
        // this.state= {
        //     name:"aman"
        // }

        this.state={
            num: 0 
        }
    }

    // apple(){

    //     this.setState({name:"amandeep dhillon"})
    // }

    inc(){

        this.setState({num: this.state.num  + 1})

    }

    dec(){

        this.setState({num: this.state.num  - 1})

    }

    render(){

        return(
            <>

            {/* <h1> {this.state.name}</h1> */}
                {/* <button onClick={() => this.apple()}>click me</button> */}
            
                <h1> {this.state.num}</h1>
                <button onClick={() => this.inc()}>click me</button>
            

                <button onClick={() => this.dec()}>click me</button>
            </>
        )
    }
}