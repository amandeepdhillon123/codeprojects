import React from "react";

function Nested() {
  // const student =['Anil','Sidhu','Sam','Peter']

  const student = [
    {
      name: "anil_1",
      email: "anil@gmial.com",
      address: [
        { Hn: "10", city: "Noida", country: "india" },
        { Hn: "13", city: "delhi", country: "india" },
        { Hn: "19", city: "gurugram", country: "india" },
        { Hn: "30", city: "chandigarh", country: "india" },
        { Hn: "55", city: "mumbai", country: "india" },
      ],
    },

    {
      name: "anil_1",
      email: "anil@gmial.com",
      address: [
        { Hn: "10", city: "Noida", country: "india" },
        { Hn: "13", city: "delhi", country: "india" },
        { Hn: "19", city: "gurugram", country: "india" },
        { Hn: "30", city: "chandigarh", country: "india" },
        { Hn: "55", city: "mumbai", country: "india" },
      ],
    },
  ];

  return (
   <div>
      <h1>array with nested </h1>
      <table variant="dark" >
        <tbody>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
            </tr>
        </tbody>
        {
            student.map((item)=>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        {
                            item.address.map((data)=>
                               <tr>
                                <td>{data.Hn}</td>
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
