// 

const container= document.getElementById('container')

const url=`https://fakestoreapi.com/products`;

// console.log(url)

// let x= fetch(url)

// console.log(x)

let res;
fetch(url)

.then(function(res){
    // console.log("res",res);

 return res.json()
})

.then(function(res) {

    // console.log(res)
    appendData(res)
})
.catch(function(err){

    console.log("err",err);
})

// appendData(res)

function appendData(data){

    data.forEach(function(el){
        let div=document.createElement('div')

        let title=document.createElement('p')

        title.innerText=el.title;

        let price=document.createElement('p')

        price.innerText=el.price;

        let image=document.createElement('img')

        image.src=el.image;

        div.append(image,title,price)

        container.append(div)

        
    })

}

