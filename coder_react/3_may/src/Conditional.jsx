
function Condition({name,surName,verified}){
    //  console.log(name)
// let text;
// let tex;
//     if(verified)
//     {
//        text= <h2>{name}</h2> 
       
//     }
//     else{
//        tex = <h2>{surName}</h2>
//     }
    return(
        <>

          {/* 2nd way  */}
        <h1>{ verified ? name : surName}</h1>
         {/* <h2>{tex}</h2> */}

         {/* 3rd way */}

          <h1>{name} {verified ? "1" :null}</h1> 
        

        <h1>{name} {verified && 3}</h1>
        </>
    )
}

export default Condition;