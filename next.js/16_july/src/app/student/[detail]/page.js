

 "use client"
function Page({params}) {

  console.log(params)
  return (
    <div>

      <h1>detail</h1>
      <h2>Name :{params.detail}</h2>
    </div>
  )
}

export default Page