// function Prop({title,bg}){
    // 1srt way 
// function Prop(props) {
//   return(
//      <>
//        <h1>Name:{ props. name}</h1>
//        <h1>age:{ props. age}</h1>
//   </>
//   )
// }

// export default Prop;

//    2nd way 
// function Prop({name,age,color}) {
//     return(
//        <>
//          <h1 style={{background:color}}>Name:{name}</h1>
//          <h1>age:{age}</h1>
//     </>
//     )
//   }
  
//   export default Prop;


//   3rd pronlem   access children 

// function Prop({child}) {
      
    
//     return(
//        <>
      
//          <h1>{child}</h1>
        
//         </>
//     )
//   }
  
//   export default Prop;

//   4th way access data from objects 


// function Prop({name,age}) {
      
    
//     return(
//        <>
      
//          <h1>{name}</h1>
//          <h1>{age}</h1>
        
//         </>
//     )
//   }
  
  // export default Prop;



  function Prop({name,age}) {
       
    
    return(
       <div>
      
         <h1> {name} </h1>
         <h1> {age} </h1>
        
        </div>
    )
  }
export default Prop;


  // 5ht 





