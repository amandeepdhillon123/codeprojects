

function Dem({name,age,address}){

    

    return(
        <div style={{background:"green"}}>
       <h1>{name}</h1>
       <h1>{age}</h1>
       <h1>{address.city} {address.pincode}</h1>
        </div>
    )
}

export default Dem;