
let mensData = [
            {
                img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                name:"rahit",
                price:"234",
                strikedoffprice:"$20"
            },
            {
                img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                name:"rahit",
                price:"234",
                strikedoffprice:"$20"
            },
            {
                img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                name:"rahit",
                price:"234",
                strikedoffprice:"$20"
            },
            {
                img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                name:"rahit",
                price:"234",
                strikedoffprice:"$20"
            },
            {
                img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                name:"rahit",
                price:"234",
                strikedoffprice:"$20"
            },
            {
                img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                name:"rahit",
                price:"234",
                strikedoffprice:"$20"
            },
            {
                img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                name:"rahit",
                price:"234",
                strikedoffprice:"$20"
            },
            {
                img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                name:"rahit",
                price:"234",
                strikedoffprice:"$20"
            },
            
  ]; 

let obj= JSON.parse(localStorage.getItem("cartData")) || [];
  mensData.map((ele) =>{

    let div=document.createElement("div");
      div.setAttribute("class","div")

    let img=document.createElement("img");
    img.src=ele.img;
    img.setAttribute("class","img")

    console.log(img)
    img.setAttribute("class","img")

    let name=document.createElement("h5");
    name.innerText=ele.name
    name.setAttribute("class","h5")
    
    let div2=document.createElement("div");
    div2.setAttribute("class","div2")
    let price=document.createElement("p");
    price.innerText=ele.price
    let strikedoffprice=document.createElement("p");
    strikedoffprice.innerText=ele.strikedoffprice

    div2.append(price,strikedoffprice)

    let button=document.createElement("button")
     button.innerText="Add to cart"

     button.addEventListener("click",function() {

          addToCart(ele)
     })

  div.append(img,name,div2,button)

  document.querySelector(".container").append(div)



  })

  function addToCart(ele){
    // console.log(ele);
    obj.push(ele);
    console.log(obj)

    localStorage.setItem("cartData",JSON.stringify(obj))

  }