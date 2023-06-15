import React from 'react'
  
function Promis() {

    let mypromise= new Promise((resolve,reject)=>{
        let x= 5;
        if(x>4)
        {
          resolve(x);
        }
       
        else{
          reject();
        }
        
    });

    mypromise.then((x)=>{
        console.log("sucess",x);
    }).catch((x)=>{
      console.log("dhd")
    }).finally(()=>{
      console.log("amandeep")
    })
  return (
    <div>
 welcome to user


    </div>
  )
}

export default Promis