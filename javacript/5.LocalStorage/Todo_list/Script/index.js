
//   // bugs  1.refreshing page give array emepty 
//   // 2. when data will not there   give null output in console
// }

document.querySelector("#form").addEventListener('submit',myFun)
let array=[];
function myFun(){
    event.preventDefault();
    // console.log("amandeep")let name= document.querySelector("#name")
 let name= document.querySelector("#name").value;
 let quantity= document.querySelector("#qty").value;
 let priority= document.querySelector("#priority").value;

 console.log(name,quantity,priority)

 let obj={
    name:name,
    quantity:quantity,
    priority:priority
 }

//  console.log(obj)

 array.push(obj)
 console.log(array);

 localStorage.setItem("data",JSON.stringify(array))

 window.location.reload();



}