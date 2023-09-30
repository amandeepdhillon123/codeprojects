import { createStore ,applyMiddleware } from "redux"

import logger from "redux-logger";

// store

const store = createStore(reducer,applyMiddleware(logger.default));

const history = []

function reducer(state={amount  : 1},action){
    if(action.type === 'increment')
    {
        return {amount :state.amount + 1} 
    }

    if(action.type === 'decrement')
    {
        return {amount :state.amount - 1} 
    }

    if(action.type === 'incrementByAmount')
    {
        return {amount :state.amount  + action.payload} 
    }
    return state ;
}



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
function incrementByAmount(){
    return {type:"incrementByAmount", payload:4}
}

//     setInterval(()=>{
//     store.dispatch(increment())
// },2000)

//     setInterval(()=>{
//     store.dispatch(decrement())
// },2000)

//     setInterval(()=>{
//     store.dispatch(incrementByAmount())
// },2000)


