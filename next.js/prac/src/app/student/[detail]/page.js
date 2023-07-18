"use client"

const Deatals = ({params}) => {

    console.log(params)
  return (
    <div>
        <h1>student Details</h1>
        <h1>hello ji {params.detail}</h1>
    </div>
  )
}

export default Deatals