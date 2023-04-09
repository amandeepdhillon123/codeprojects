
document.querySelector("#form").addEventListener("submit",myForm)

let array=JSON.parse(localStorage.getItem("data")) || [];
function myForm(){
    event.preventDefault();
    
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let role=document.querySelector("#role").value;
    let salary=document.querySelector("#salary").value;
      
    let obj={
        name:name,
        email:email,
        role:role,
        salary:salary
    }

    array.push(obj);

    console.log(array);
     
    
    localStorage.setItem("data",JSON.stringify(array))

    // displayData(array);

    window.location.reload();
 

}

