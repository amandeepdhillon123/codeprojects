import {configureStore} from "@reduxjs/toolkit";
import { customReducer } from "./Reducer";

const store = configureStore({
    reducer:{
        customReducer: customReducer
    }
})

export default store;