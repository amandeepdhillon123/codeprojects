
var todoItems = JSON.parse(localStorage.getItem("todoData"));

console.log(todoItems);
// var completed=[];
var completed= JSON.parse(localStorage.getItem("completed")) || [] ;

todoItems.map(function(elem){

    console.log(elem);
    var tr =  document.createElement("tr");

    var td1 =  document.createElement("td");
    td1.innerText=elem.itemName;
    var td2 =  document.createElement("td");
    td2.innerText=elem. itemQty;
    var td3 = document.createElement("td");
    td3.innerText=elem.itemPrior;
    var td4 = document.createElement("td");
    var btn=document.createElement("button")
    btn.innerText="Mark as completed";
    btn.style.cursor="pointer";
    btn.style.backgroundColor="red"
    td4.append(btn);

    td4.addEventListener("click", function (){
        markCompleteFunction(elem)
    })


    tr.append(td1,td2,td3,td4)

    document.querySelector("#body").append(tr);

});

function  markCompleteFunction(elem) {
    console.log(elem);
    completed.push(elem);
    console.log(completed);
    localStorage.setItem("completeTodo",JSON.stringify(completed));
}

