import { createSlice } from '@reduxjs/toolkit'

const counterReducerSlice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment: state => {state.count+=1},
        decrement: state => {state.count -=1},
        incrementByValue: (state, action) => void(state.count += action.payload),
        decrementByValue: (state, action) => {state.count -= action.payload} 
    }
});


export default counterReducerSlice.reducer;
export const {increment, decrement, incrementByValue, decrementByValue } = counterReducerSlice.actions;