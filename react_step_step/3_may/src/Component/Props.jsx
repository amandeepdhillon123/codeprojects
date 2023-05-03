
function Pro({name,sur,address,Fun}){
    console.log(Fun)

 return(
    <>
   <h1 style={{color:"green"}}>{name} {sur}</h1> 
  
   <h1>{address.city}</h1>
    </>
 )
}

export default Pro;