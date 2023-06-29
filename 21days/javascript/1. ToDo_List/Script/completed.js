

//  var sun= JSON.parse(localStorage.getItem("result")) ;
// if(localStorage.getItem("result")==null)
// {
//   sun= [];
// }
// else
// {
//   sun=JSON.parse(localStorage.getItem("result"));
// }
// // console.log(sun);

// sun.map(function(ele){

    
//     var tr= document.createElement("tr");
    
//     var td5= document.createElement("td")
//     td5.innerText=ele.name;
    
//     var td6= document.createElement("td")
//     td6.innerText=ele.quantity;
    
//     var td7= document.createElement("td")
//     td7.innerText=ele.priority;

//     tr.append(td5,td6,td7)

//     document.querySelector("#body").append(tr);

    
// });

var obj =JSON.parse(localStorage.getItem("result"))
console.log(obj)

obj.map((ele) =>{

  tr=document.createElement('tr');
  td1=document.createElement('td');
  td1.innerText=ele.name;

  td2=document.createElement('td');
  td2.innerText=ele.quantity;
  td3=document.createElement('td');
  td3.innerText=ele.priority;

  tr.append(td1,td2,td3);

  document.querySelector("#body").append(tr)


})