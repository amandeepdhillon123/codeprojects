import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";
// store
const init ="init"
const inc = "increment";
const dec = "decrement";
const incByAmount = "incByAmount";
const store = createStore(combineReducers({account:accountReducer, bonus:bonusReducer}), applyMiddleware(logger.default,  thunk.default));

//   arry
const history = [];

// action contsatns

// reducers

function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
        return {amount: action.payload}
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case inc:
      return { amount: state.amount + 1 };
    case incByAmount:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
     
      case inc:
        return { points: state.points + 1 };
    
      default:
        return state;
    }
  }

//  global state
// store.subscribe(()=>{
//     history.push(store.getState())
//     console.log(history)
// })

// asynch api call 

// async function getUser(){
//      const {data} = await axios( `http://localhost:3000/accounts`)

//      console.log("----",data.amount)
// }

// getUser()

//  create Action s

async function initUser(dispatch,getState){
    const {data} = await axios( `http://localhost:3000/accounts/2`)
    dispatch ({type: init ,payload:data.amount})
}

function increment() {
  return { type: inc };
}
function decrement() {
  return { type: dec };
}
function incrementByAmount() {
  return { type: incByAmount, payload: 4 };
}


// store.dispatch(initUser)
// console.log(store.dispatch(increment()))
// store.dispatch(decrement())
// store.dispatch(incrementByAmount())

// setInterval(()=>{
//    console.log(store.dispatch(increment()))
// },2000)

