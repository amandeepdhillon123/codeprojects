
async function productList(){

  let data = await fetch("https://dummyjson.com/products")

  data = await data.json();
  return data.products
}

const Page = async() => {

  let product = await productList();

  // console.log(product)
  return (
    <div>
      {product.map((ele)=>(
        <h1>{ele.title}</h1>
      ))}
    </div>
  )
}

export default Page