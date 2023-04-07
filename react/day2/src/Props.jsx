function Props(props){

    console.log(props.name)
    return(

        // props     
        // <div style={{color:"red" , margin:40 , fontSize:15, background:"green"}}>
        //    <h1>hello {props.name}</h1>
        //    <h2>{props.email}</h2>
        //    <h3>Addrss: {props.other.address} Mobile: {props.other.mobile}</h3>
        // </div>

        // button 

        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Props;