import React from 'react'

function Nested() {
const user =[
        {name:"anil1", emial :"anil@gmial1.com", address:
        [{hn:'10', city :'noida', country :'india'},
        {hn:'11', city :'noida', country :'india'},
        {hn:'12', city :'noida', country :'india'},
        {hn:'13', city :'noida', country :'india'},
        ]},
        {name:"anil2", emial :"anil@gmial223.com", address:[{hn:'10', city :'noida', country :'india'},
        {hn:'11', city :'noida', country :'india'},
        {hn:'12', city :'noida', country :'india'},
        {hn:'13', city :'noida', country :'india'},
        ]},
        {name:"anil3", emial :"anil@gmial33.com", address:[{hn:'10', city :'noida', country :'india'},
        {hn:'11', city :'noida', country :'india'},
        {hn:'12', city :'noida', country :'india'},
        {hn:'13', city :'noida', country :'india'},
        ]},
        {name:"anil4", emial :"anil@gmial3333.com", address:[{hn:'10', city :'noida', country :'india'},
        {hn:'11', city :'noida', country :'india'},
        {hn:'12', city :'noida', country :'india'},
        {hn:'13', city :'noida', country :'india'},
        ]},
    ]
  return (
    <div>Nested

        <table>
            <tbody>
                 <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
                </tr>
            </tbody>
            {
             user.map((item) =>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.emial}</td>
                    <td>{
                        item.address.map((data) =>
                           
                        <tr>
                            <td>{data.hn}</td>
                            <td>{data.city}</td> 
                            <td>{data.country}</td> 
                        </tr>
                        )
                    }
                    </td>
                </tr>
             )
            }
        </table>
    </div>
  )
}

export default Nested