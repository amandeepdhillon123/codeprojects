
function Btn(){

    let name="amandeep"

    function Apple(){
            name = "dhillon"
        // alert("hello i am amandeep")

        alert(name)
    }

    return(
        <>

     <h1>{name}</h1>
        {/* <h1>hello Duniya</h1> */}
    {/* <button onClick={Apple()}>click me</button> */}
      <button onClick={Apple}>click me</button>

    {/* <button onClick={alert("hello ji ")}>click me</button> */}

    {/* <button onClick={() => alert("hello ji ")}>click me</button> */}
        </>
    )
}

export default Btn;