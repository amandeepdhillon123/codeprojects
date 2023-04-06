
 


 
document.querySelector('form').addEventListener('submit',myForm)
let data1=JSON.parse(localStorage.getItem("data"));

if(data1 == null)
{
    arr=[] 
}
else{
    arr= [] && data1;
}

  displayData(arr)
  function myForm(){
    event.preventDefault();

 let name= document.querySelector("#name").value;
 let math= document.querySelector("#math").value;
 let english= document.querySelector("#eng").value;
 let science=  document.querySelector("#sci").value;


 console.log(name,math,science,english)
 let obj={
    name:name,
    math:math,
    english:english,
    science:science
 }
 arr.push(obj);
 
 displayData(arr)
   localStorage.setItem("data",JSON.stringify(arr)) 
   
}


function displayData(arr){
   document.querySelector("tbody").innerText="";
   
    arr.map((ele) =>{
    

        let tr=document.createElement('tr');
        
        let td1=document.createElement('td');
         td1.innerText=ele.name;
        
        let td2=document.createElement('td');
        td2.innerText=ele.math;
        // console.log(td2);
        
        let td3=document.createElement('td');
        td3.innerText=ele.english;
           // console.log(td2);
        

        let td4=document.createElement('td');
        td4.innerText=ele.science;
        //    console.log(td4);

        let td5=document.createElement('td');
        td5.innerText= parseInt(ele.math) + parseInt(ele.english) + parseInt(ele.science);
        // console.log(td5)
        // console.log(td1,td2,td3,td4,td5)
      
        tr.append(td1,td2,td3,td4,td5)
      document.querySelector("tbody").append(tr)

    })
}
