import {ADD_TO_CART}  from "../Constants"


export const addToCart = ()=>{

  return {
    type:ADD_TO_CART,
    data:data
  }
}


export const removeToCart = ()=>{

  return {
    type:"Remove_TO_CART",
    data:data
  }
}