
function PlayButton({name,msg}){

// function PlayButton({msg,children}){
     

    // handler function 

    function handleClick(){
            
//   console.log("amandeep")

// console.log({name})

console.log({msg})

    }

    return(
        <>      
        {/* call    1  */}
            
            {/* <button onClick={console.log("amandeep")}>Play</button> */}
         
          {/* it will defined functiono for small function -- 2--- */}
            
            {/* <button onClick={() => console.log("amandeep")}>Play</button> */}
        
            {/* handler function 3 */}

            {/* <button onClick={handleClick}>{msg}</button> */}


            {/* { children prop} */}

            <button onClick={handleClick}>{children}</button>
        </>
    )

}

export default PlayButton;