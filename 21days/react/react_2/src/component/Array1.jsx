import React from 'react'
 

function Array1() {

    const student =[
        {name:"aman1", email:"aman@gmail.com", contact:394},
        {name:"aman2", email:"ashi@gmail.com", contact:395},
        {name:"aman3", email:"roh@gmail.com", contact:396},
        {name:"aman4", email:"avih@gmail.com", contact:397},
        {name:"aman5", email:"snm@gmail.com", contact:399},
    
    ]
  return (
    <div>
     <table border="1">
        <tr>
            <td>Name</td>
            <td>email</td>
            <td>contact</td>
        </tr>
       
        {
            student.map((ele)=>
            <tr>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>{ele.contact}</td>
            </tr>
            
       )
        }
    
     </table>

    </div>
  )
}

export default Array1