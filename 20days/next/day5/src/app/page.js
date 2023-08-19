
 async function productlist(){
  let data =await fetch("https://jsonplaceholder.typicode.com/users")
  data =await data.json();
  return data 
}

export default async function Home() {
  let products = await productlist()
    console.log(products)
  return (
    <div>
      <h1>{products.map((ele)=>{
    return(
      <h3>{ele.name}</h3>
    )
      })}</h1>
    </div>
  )
}
