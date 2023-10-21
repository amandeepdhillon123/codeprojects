import React,{Component} from "react"

export default class Data extends Component {
    
    constructor(){
        super();
        // this.state={
        //     data:"amandeep"
        // }
        this.state ={
            data : 0
        }
    }

    // apple(){
    //    this.setState({data:"ram"})
    // }

    inc(){
        this.setState({data : (this.state.data + 1)})
    }
    dec(){
        this.setState({data : (this.state.data - 1)})
    }
    reset(){
        this.setState({data : 0 })
    }
    
    render(){

        return(
            <>
             <h1>{this.state.data} </h1>
            
            <button onClick={()=>this.inc()}>update Data</button>
            <button onClick={()=>this.dec()}>update Data</button>
            <button onClick={()=>this.reset()}> reset</button>
            
            
            </>
        

        )
    }
}