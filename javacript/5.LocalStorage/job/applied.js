

let data1=JSON.parse(localStorage.getItem("data")) || [];

console.log(data1)
data1.map((ele,index) =>{
   
    let tr=document.createElement("tr");
    
    let td1=document.createElement("td");
      td1.innerText=ele.name;
    let td2=document.createElement("td");
    td2.innerText=ele.email;
    let td3=document.createElement("td");
    td3.innerText=ele.role;
    let td4=document.createElement("td");
    td4.innerText=ele.salary;

    let button=document.createElement("button");
     button.innerText="Mark as Bookmark"
     let td5 = document.createElement("td");
     td5.append(button)

     button.addEventListener("click" ,function() {
        btnOutput(ele,index)
        button.style.cssText="color:green"
     })

    tr.append(td1,td2,td3,td4,td5)
    document.querySelector("#body").append(tr);
   

})

function btnOutput(ele,index){
    
   data1.push(ele);

  
   localStorage.setItem("complete",JSON.stringify(data1));
   
   window.location.reload()
  
}