
function Fun({msg,children,onClick}){

    // function Fun({msg,children,onRam}){
  function handle(){
    // console.log({msg})

    onClick();
    // onRam();
  }
    return(
        <>
       <button onClick={handle}>{children}</button>
      
           
        </>
    )



}

export default Fun;
