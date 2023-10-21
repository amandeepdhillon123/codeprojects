

function Ram({name,other,ram}){
//   console.log(props)

console.log(name)
    return (
        <>
        <h1>Hello : {name}</h1>
        <h2>{other.name}  {other.surName}</h2>
        <button onClick={()=>ram()}>click</button>
        </>
    )
}

export default Ram;