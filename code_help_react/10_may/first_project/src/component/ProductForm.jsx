import { useState } from "react";

import './ProductForm'


const ProductForm = (props) => {

    // multiple stete handle 
     
  const[newTitle,setTitle]=useState('');

  const[newDate,setDate] =useState('');


  function titleChangeHandler(event){
     
     setTitle(event.target.value)

    //  console.log(event.target.value)

  }

  function dataChangeHandler(event){
     
    setDate(event.target.value)

    // console.log(event.target.value)

 }

 function submitHandler(event){
     
   event.preventDefault();
//    console.log(event)

const productData={

    title: newTitle,
    date: newDate

}

// console.log(productData)
props.onSaveProduct(productData)
setTitle('')
setDate('')

 }




// by object thandle 


// const[FullProductInput,setfullProductInput] =useState({title:'', date:''});






//   function titleChangeHandler(event,prevState){
     
//     let obj ={...prevState,title:event.target.value}

//     console.log(obj)

//     return obj;

//   }

//   function dataChangeHandler(event){
     
//     setDate(event.target.value)

//     console.log(event.target.value)

//  }

//  function submitHandler(event){

//        event.preventDefault();
    
//       console.log(setTitle(event.target.value))

//        setTitle('')
//        setDate('')
//  }
    
return(
    <form   onSubmit={submitHandler} >
   <div className='new-product_controls'>

        
      
       <div className="new-product_control">
         <label>Title</label>
         <input type="text" value={newTitle} onChange={titleChangeHandler}/>
       </div>
       <div className="new-product_control">
         <label>Date</label>
         <input type="date" value={newDate} onChange={dataChangeHandler}/>
       </div>
       <div className="new-product_control">
   
       <button type="submit">Add to cart</button>
       </div>
   </div>

   </form>
)

}

export default ProductForm;