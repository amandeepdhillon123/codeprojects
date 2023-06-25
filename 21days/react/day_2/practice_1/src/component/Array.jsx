import React from 'react'

function Array() {
    // const student =['Anil','Sidhu','Sam','Peter']

    const student =[{name:"anil_1", email:"anil@gmial.com", contact:"000"},
                    {name:"anil_2", email:"anil@gmial.com", contact:"111"},
                    {name:"anil_3", email:"anil@gmial.com", contact:"222"},
                    {name:"anil_4", email:"anil@gmial.com", contact:"333"},
                    {name:"anil_5", email:"anil@gmial.com", contact:"444"}

                ]

  return (

    <div>
        <h1>Array listed</h1>
        {
            student.map((data)=>
                  <table border="1px">
                       <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.contact}</td>
                       </tr>
                  </table>
                 
           
            )
        }
    </div>
  )
}

export default Array