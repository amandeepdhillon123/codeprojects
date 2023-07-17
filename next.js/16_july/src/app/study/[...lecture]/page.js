"use client"

function Leacture({params}) {


    const name = params.lecture;

    console.log(name)
  return (
  <div>
    <h1> leacture of 1 college</h1>

    {
        name.map((item)=>{

         return <li>{item}</li>
        }) 
    }
  </div>
  )
}

export default Leacture