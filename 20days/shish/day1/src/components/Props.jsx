
import Props2 from "./Props2";
function Ram(){

    function show(name){
           console.log(name)
    }
    return(
        <>
          <h1 > Hello</h1>
        {/* <Props2 name ="mandeep"/>
        <Props2 /> */}



        <button onClick={()=>show("amandeep")}>submit</button>
        </>
    )
}

export default Ram;
