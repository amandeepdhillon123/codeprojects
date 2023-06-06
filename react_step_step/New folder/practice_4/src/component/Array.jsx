import React from 'react'

function Array() {

    const student =['anil1','anil2', 'anil3','anil4']

    // map 

    student.map((item) =>{
     
        console.log("my name is :", item)

    })

    for(let i=0; i<student.length; i++)
    {
        console.log(" in loop",student[i])
    }
  return (
    <div>Array</div>
  )
}

export default Array