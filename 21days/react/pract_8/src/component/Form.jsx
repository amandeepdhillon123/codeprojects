import React from 'react'
import { useState } from 'react'
function Form() {
      
    // const[firstName,setFirstName] = useState("")
    // const[lastName,setLastName] = useState("")
       
    // console.log(firstName)
    // console.log(lastName)
    // function changeFirstHandler(e){
    //     console.log(e.target.value)
    // }
    // function changeLastHandler(e){
    //     console.log(e.target.value)
    // }

    const[formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        comment:"",
        isVisible:true,
        mode:"",
        favCar:""
    })

    // console.log(formData.email)
    // console.log(formData.firstName)
    // console.log(formData.lastName)
    // console.log(formData.comment)
    console.log(formData)

    function changeHandler(e){
        const{name,value,checked ,type } = e.target
       console.log(checked)
        setFormData(preFormData =>{
            return {
                // ...preFormData,[e.target.name] : e.target.value

                ...preFormData,[name] : type == 'checkbox' ? checked : value
            }
        })
    }

    function formHandler(e)
    {
        e.preventDefault();
        console.log(formData.firstName)
    }
  return (
    <div>
        <form onSubmit={formHandler}>
            <input
            value={formData.firstName}
            name='firstName'
             type="text" 
            placeholder='firstname'
            onChange={changeHandler}

            /> <br /> <br />

             <input
              value={formData.lastName}
             name='lastName' 
             type="text" 
            placeholder='last name'
            onChange={changeHandler}
            />

            <br /> <br />

            <input
            value={formData.email}
            name='email' 
            type="email" 
            placeholder='write email'
            onChange={changeHandler}
            />
             <br /><br />
           

            <textarea
            placeholder='enter your comments'
            onChange={changeHandler} 
            name='comment'
            value={formData.comment}
            />

            <br /> <br />

            <input
            value={formData.isVisible}
            name='isVisible' 
            type="checkbox" 
            id='isVisible'
            checked={formData.isVisible}
         
            onChange={changeHandler}
            /> <label htmlFor="isVisible">Are you Visble ?</label>

            


             <br /> <br />
             <fieldset>
                <legend>mode:</legend>
                <input
            value="Online-Mode"
            id='Online-Mode'
            name='mode' 
            type="radio" 
            onChange={changeHandler}
            checked = {formData.mode ==="Online-Mode"}
            />
            <label htmlFor="Online-Mode">onlien mode</label>
             

            <input
            value="Offline-Mode"
            id='Offline-Mode'
            name='mode' 
            type="radio" 
            onChange={changeHandler}
            checked={formData.mode ==="Offline-Mode"}
            />
            <label htmlFor="Offline-Mode">onlien mode</label>


             <br /><br />

             </fieldset>

            
            <label htmlFor="favCar">tell me about</label>
             <select
             name='favCar'
             id='favCar'
             value={formData.favCar}
             onChange={changeHandler}

             >
                <option value="scorpio">scorpio</option>
                <option value="alto">alto</option>
                <option value="swift">swift</option>

               
             </select> <br /><br />


          <input type="submit" />

        </form>
    </div>
  )
}

export default Form