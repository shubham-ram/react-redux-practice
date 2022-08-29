import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "./features/User/User";

const userInfo = () =>{

    const {name} = useSelector(state => {state.userReducer})
    const dispatch = useDispatch();

    const nameHandler =(e) =>{
        dispatch(setName(e.target.value))
    }

    return <>
        
        <input type="text" onChange={nameHandler} value={name}/>
        <button>submit</button>
    </>
}

export default userInfo;