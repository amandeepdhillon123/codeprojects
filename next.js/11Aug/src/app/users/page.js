import React from 'react'
  async function Api(){
    let data = await fetch("https://dummyjson.com/users")
    data = await data.json();
    return (data.users)
  }
const Page = async() => {

  const data = await Api()
  console.log(data)
  return (
    <div>
      {
        data.map((ele)=>{
         return <h2>{ele.firstName}</h2>
        })
      }
    </div>
  )
}

export default Page
