
async function productList(){
   
    let data = await fetch("https://dummyjson.com/products")
     data= await data.json();
    //  console.log(data.products)
     return (data.products)
    
}

const page = async () => {
    let products= await productList()
    console.log(products)
  return (
    <div>
        { products.map((ele)=>(
             <h1>{ele.title}</h1>
        ))}
    </div>
  )
}

export default page