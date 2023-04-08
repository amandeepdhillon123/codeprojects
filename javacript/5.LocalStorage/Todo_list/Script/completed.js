

//  var sun= JSON.parse(localStorage.getItem("result")) ;
if(localStorage.getItem("result")==null)
{
  sun= [];
}
else
{
  sun=JSON.parse(localStorage.getItem("result"));
}
// console.log(sun);

sun.map(function(ele){

    
    var tr= document.createElement("tr");
    
    var td5= document.createElement("td")
    td5.innerText=ele.name;
    
    var td6= document.createElement("td")
    td6.innerText=ele.quantity;
    
    var td7= document.createElement("td")
    td7.innerText=ele.priority;

    tr.append(td5,td6,td7)

    document.querySelector("#body").append(tr);

    
});