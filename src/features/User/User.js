import { createSlice } from "@reduxjs/toolkit"

const userReducerSlice = createSlice({
    name: "user",
    initialState: {
        name: ""
    },
    reducers: {
        setName : (state, action) =>{
            state.name = action.payload
        }
    }

})

export default userReducerSlice.reducer;
export const {setName} = userReducerSlice.actions;