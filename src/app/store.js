import { configureStore } from "@reduxjs/toolkit";
import counterReducerSlice from "../features/counter/counter";
import userReducerSlice from "../features/User/User"

// const store = configureStore({
//     reducer:{
//         counterReducer : counterReducerSlice,
//         userReducer : userReducerSlice
//     }
// })

const store = configureStore({
    reducer:{
        counterReducer: counterReducerSlice,
        userReducer: userReducerSlice
    }
})

export default store;