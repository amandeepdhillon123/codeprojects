import Fun from "./Fun";


function PlayButton({name,msg,children,fun,onRam}){


    function Apple(){
        console.log("dhillon")
    }

    return(
        <>
        {/* <h1>{onRam()}</h1> */}
     {/* <button onClick={ console.log("amandeep")}>Play</button> */}
        
        
     {/* <button onClick={ () => console.log("amandeep")}>Play</button>   */}


       {/* <button onClick={Apple}>Play</button>     */}


       
       {/* <button onClick={() => Apple()}>Play</button>   */}
        
        {/* <button onClick={() => console.log(msg)}>Play</button> */}
        
        {/* <button onClick={() => console.log(msg)}>{children}</button> */}
        
        
        {/* <button onClick={() => console.log(fun())}>{children}</button> */}
        
        
        
        
        
        
        
        
        
        
        </>
    )
}

export default PlayButton;