

import React, { Component } from "react";

class Class extends Component {

    render(){

        return(
            <>
                <h1> I am class component</h1>
                <Demo/>
            </>
           
        )

    }
}


class Demo extends Component{
    render(){

        return(
            <>
                <h1> i am demo component</h1>
            </>
        )
    }
}

export default Class;