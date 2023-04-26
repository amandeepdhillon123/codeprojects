
function Fun({name,surName,verified})
{    

    // 1st way 
   let ram;
   let shyam;
// if(verified)
// {
//     ram= <h1>{name}😀</h1>
// }
// else{
//     shyam=<h1>{surName}</h1>
// }


// 2nd way 
// { verified ? ram =<h1>{name}😀</h1>: shyam =<h1>{surName}</h1>}
 
     
  return(
      <div>

      {/* 3rd way  */}
        <h1>{name} {verified ? '😀' : null } </h1> 
   {/* 4th way  short circuit   */}
        <h1>{name} {verified && '😀' } </h1> 
        <h2>{shyam}</h2>
      </div>
  )
}
  

export default Fun;