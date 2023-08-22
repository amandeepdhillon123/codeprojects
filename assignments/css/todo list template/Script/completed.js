

// var sun= JSON.parse(localStorage.getItem("completeTodo")) ;
if(localStorage.getItem("completeTodo")==null)
{
  sun= [];
}
else
{
  sun=JSON.parse(localStorage.getItem("completeTodo"));
}
// console.log(sun);

sun.map(function(elem){

    
    var tr= document.createElement("tr");
    
    var td5= document.createElement("td")
    td5.innertext=elem.itemName;
    
    var td6= document.createElement("td")
    td6.innerText=elem.itemQty;
    
    var td7= document.createElement("td")
    td7.innerText=elem.itemPrior;

    tr.append(td5,td6,td7)

    document.querySelector("#body").append(tr);

    
});