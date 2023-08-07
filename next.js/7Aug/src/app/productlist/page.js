"use client";


import { useEffect, useState } from "react";
const List = () => {
  const {product, setProduct } = useState([]);



  useEffect(async () => {
    let data = await fetch("https://dummyjson.com/products");

    data = await data.json();

    console.log(data.products);

    setProduct(data.products);
  },[]);
  return (
    <div>
      <h1>data</h1>
      {  product &&
        product.map((ele)=>(
             <h1>{ele.title}</h1>
        ))
      }
    </div>
  );
};

export default List;
