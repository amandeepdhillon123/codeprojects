



let output= JSON.parse(localStorage.getItem("data"))
 
console.log(output);

let obj=JSON.parse(localStorage.getItem("data")) || []

output.map((ele)=>{

    tr=document.createElement('tr');

    td1=document.createElement('td');
    td1.innerText=ele.name;

    td2=document.createElement('td');
      td2.innerText=ele.quantity;
    
      td3=document.createElement('td'); 
      td3.innerText=ele.priority;

          var td4 = document.createElement("td");
         var btn=document.createElement("button")
         btn.style.cssText="background:red; cursor:pointer; padding:0.5em; border-radius:10px; color:white;"
         btn.innerText="Mark as completed";
        //  btn.style.cursor="pointer";
        //  btn.style.backgroundColor="red"
         td4.append(btn);

         td4.addEventListener('click',function() {
             btnfun(ele)
         })

      console.log(td1,td2,td3,td4)

      tr.append(td1,td2,td3,td4)

      document.querySelector("#body").append(tr)
  

})

function btnfun(ele){
    console.log(ele);
    obj.push(ele);
    console.log(obj)
    localStorage.setItem("result",JSON.stringify(obj))

}

