import React, { useState } from 'react'

function Form() {

    const[data,setData]= useState({
         "name":"",
         "email":"",
         "comment":"",
         "visible":false,
         "mode" :"",
          "favCar":""
    })    

    function changeHandler(e){

    //   setData({...data,[e.target.name]:e.target.value})
    const{name,value,checked,type}= event.target
    setData({...data, [name] : type === "checkbox" ? checked : value})
    }

    
   function getData(e){
       e.preventDefault();

    // console.log(data.name)
    // console.log(data.email)
    // console.log(data.comment)
    // console.log(data.visible)

    console.log(data)
   }
  return (
    <div>
        <form onSubmit={getData}>
           Name : <input name='name' type="text" value={data.name}  onChange={changeHandler}/>  <br /> <br />
           Email :<input name='email' type="text" value={data.email}  onChange={changeHandler}/>   <br /> <br />
           
           <textarea name='comment' value={data.comment} placeholder='enter your comment ' onChange={changeHandler}/><br /> <br />
             <input name='visible' id="visible" checked={data.visible} type="checkbox" onChange={changeHandler}/>  
              <label htmlFor="visible">visibel</label><br /> <br />
              <input type="radio" 
              name='mode' 
              onChange={changeHandler} 
              value="online-Mode" 
              checked={data.mode === "online-Mode"}
              id="online-Mode"/>
                 <label htmlFor="online-Mode">hello</label><br /> <br />
                 
                 
                 <input type="radio" name='mode'
                  onChange={changeHandler}
                   value="offline-Mode" 
                   checked={data.mode === "offline-Mode" }
                   id="offline-Mode"/>


                 <label htmlFor="offline-Mode">hello</label><br /> <br />

                  <select name='favCar'
                   id='favCar'
                   onChange={changeHandler}
                   value={data.favCar}
                  
                  
                  
                  >
                    <option value="scorpio">scorpio</option>
                    <option value="fortuner">fortuner</option>
                    <option value="thar">thar</option>
                    <option value="legender">legender</option>
                    <option value="defender">defender</option>
                  </select> 
                    
                    <label htmlFor="favCar"> tell me about car</label>
                  
                  <br /><br />
             <input type="submit" />
        </form>
    </div>
  )
}

export default Form