import React, { createContext } from 'react'
import Student from './Student';
  const data=createContext();
  const data2=createContext();
function Five() {

    // const name="amandeep Dhiilon"

    const studentObj= {
        name:"amandeep Dhillon",
        city :"hisar",
        surName:"Dhillon"
    }

    const email="aman@gmail.com"
  return (
    <div>
        <data.Provider value={studentObj}>
          <data2.Provider value={email}>
          <Student/>
          </data2.Provider>
          
        </data.Provider>
    </div>
  )
}

export default Five;

export {data,data2};