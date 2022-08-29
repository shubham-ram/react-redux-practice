import React from 'react';
import {useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByValue, decrementByValue } from './features/counter/counter';
import {setName} from "./features/User/User"

function App() {

  const count = useSelector(state => state.counterReducer.count)
  const name = useSelector(state =>state.userReducer.name)
  const dispatch = useDispatch();
  return (
    <div>
      <div>count : {count}</div>
      <div>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={() =>dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByValue(2))}>Increment By 2</button>
        <button onClick={() => dispatch(decrementByValue(2))}>Increment By 2</button>

      </div>
      <br/><br/>

      <div>
        <input type="text" value={name} onChange={(e) => dispatch(setName(e.target.value))}/>
        <button>submit</button>
      </div>
    </div>
  );
}

export default App;
