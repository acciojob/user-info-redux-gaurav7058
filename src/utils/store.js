import {configureStore} from "@reduxjs/toolkit";
import addUser from "./useReducer"
const store=configureStore({
    reducer:{
        user:addUser
    }
})

export default store;