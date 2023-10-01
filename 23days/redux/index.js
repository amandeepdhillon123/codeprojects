import { createStore ,applyMiddleware } from "redux"

import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
const init ='init'
const inc  ="increment";
const dec  ="decrement";
const incByAmt ="incrementByAmount";


// store

const store = createStore(reducer,applyMiddleware(logger.default, thunk.default));


const history = []

function reducer(state={amount  : 1},action){

     switch(action.type)
     {
        case init:
            return {amount:action.payload};
    case inc:
        return {amount :state.amount + 1} ;
    case dec:
            return {amount :state.amount - 1} ;
    case incByAmt:
        return {amount :state.amount + action.payload} ;

        default:
            return state;

     }
    // if(action.type === 'increment')
    // if(action.type === inc)
    // {
    //     return {amount :state.amount + 1} 
    // }

    // if(action.type === 'decrement')
    // if(action.type === dec)
    // {
    //     return {amount :state.amount - 1} 
    // }

    // if(action.type === 'incrementByAmount')
    // if(action.type === incByAmt)
    // {
    //     return {amount :state.amount  + action.payload} 
    // }
    // return state ;
}

 //  http://localhost:3000/account

// globale state

// console.log(store.getState())

// dispatch

// store.dispatch({type:'increment'})
console.log(store.getState()) 

store.subscribe(()=>{
    history.push(store.getState())
    // console.log(store.getState())
    console.log(history)
})
// ==========================

// API call
// async function getUser(){
//    const {data} =await axios.get('http://localhost:3000/accounts/1')

//    console.log("========",data)
//   }

//   getUser()

// async function initUser(value){

//     const {data} =await axios.get('http://localhost:3000/accounts/1')
//     return{type:init ,payload:value}
// }

// async function initUser(dispatch,getState){
//     return async ()=>{
        
//     const {data} =await axios.get('http://localhost:3000/accounts/1')
//     dispatch({type:init ,payload:data.amount})

//     }

// }

function initUser(id){
    return async (dispatch,getState)=>{
        
    const {data} =await axios.get(`http://localhost:3000/accounts/${id}`)
    dispatch({type:init ,payload:data.amount})

    }

}
//    function increment(){
//     return {type:inc}
// }
// function decrement(){
//     return {type:"decrement"}
// }
// function incrementByAmount(){
//     return {type:"incrementByAmount", payload:4}
// }

// setInterval(()=>{
//     store.dispatch(initUser(5))
// },2000)

console.log(
    store.dispatch(initUser(1))
    )



//     setInterval(()=>{
//     store.dispatch(increment())
// },2000)

//     setInterval(()=>{
//     store.dispatch(decrement())
// },2000)

//     setInterval(()=>{
//     store.dispatch(incrementByAmount())
// },2000)







// =============================

// setInterval(()=>{
//     store.dispatch({type:'increment'})
// },2000)

// setInterval(()=>{
//     store.dispatch({type:'decrement'})
// },2000)


// setInterval(()=>{
//     store.dispatch({type:'incrementByAmount', payload:4})
// },2000)

// action creator 

// function increment(){
//     return {type:"increment"}
// }
// function decrement(){
//     return {type:"decrement"}
// }
// function incrementByAmount(){
//     return {type:"incrementByAmount", payload:4}
// }

//     setInterval(()=>{
//     store.dispatch(increment())
// },2000)

//     setInterval(()=>{
//     store.dispatch(decrement())
// },2000)

//     setInterval(()=>{
//     store.dispatch(incrementByAmount())
// },2000)


