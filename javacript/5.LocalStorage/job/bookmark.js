
let bookmark=JSON.parse(localStorage.getItem("complete")) || [];

  console.log(bookmark)
bookmark.map((ele) => {

    let tr=document.createElement("tr");
    
    
    let td1 = document.createElement("td");
    td1.innerText=ele.name;

    let td2 = document.createElement("td");
    td2.innerText=ele.email;
    let td3 = document.createElement("td");
    td3.innerText=ele.role;
    tr.append(td1,td2,td3)

    document.querySelector("#body").append(tr);
})