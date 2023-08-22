document.querySelector("#form").addEventListener("submit", myFunction);

// var todoList = [];

if(localStorage.getItem("todoData")==null)
{
  todoList= [];
}
else
{
  todoList=JSON.parse(localStorage.getItem("todoData"));
}
function myFunction() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var quantity = document.querySelector("#qty").value;
  var prior = document.querySelector("#priority").value;
  
  // console.log(name,quantity,prior);
  var todoObj = {
    itemName: name,
    itemQty: quantity,
    itemPrior: prior,
  };
  // console.log(todoObj);
  todoList.push(todoObj);
  // console.log(todoList);  

  localStorage.setItem("todoData", JSON.stringify(todoList));

  // bugs  1.refreshing page give array emepty 
  // 2. when data will not there   give null output in console
}
