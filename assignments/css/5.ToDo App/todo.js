// document.querySelector("form").addEventListener("submit",submitFun)
   
//    function submitFun() {
//     console.log(event);
//    event.preventDefault();
//     var name = document.querySelector("#name").value;
//     var age = document.querySelector("#qty").value;
//     var gender = document.querySelector("#priority").value;
   
 

   

//     console.log(name, age,gender);

//     var tr=document.createElement("tr");

//     var td1=document.createElement("td");
//     td1.innerText= name;

//     var td2=document.createElement("td");
//     td2.innerText= age;
    
//     var td3=document.createElement("td");
//     td3.innerText= gender;

//     tr.append(td1,td2,td3);

//     document.querySelector("tbody").append(tr);
    


//   }

document.querySelector('form').addEventListener('submit',myFun)

function myFun(event){
  event.preventDefault();
 let nam =  document.querySelector("#name").value;
  let qty=document.querySelector("#qty").value;
  let priority =document.querySelector("#priority").value;
  console.log(nam,qty,priority)
  let tr = document.createElement("tr");

let td1= document.createElement("td")
td1.innerText= nam;
let td2= document.createElement("td")
td2.innerText=qty;
let td3= document.createElement("td")
td3.innerText=priority;

tr.append(td1,td2,td3);

document.querySelector("tbody").append(tr)
}



