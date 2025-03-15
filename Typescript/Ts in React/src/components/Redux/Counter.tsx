import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionDispatch, RootState } from './Store'
import { increment,decrement } from './CounterSlice'
function Counter() {
    const count  = useSelector((state:RootState)=>state.counter.counter)
    const dispatch = useDispatch<ActionDispatch>() 
  return (
    <div>
      hi
    <h1>Count: {count}</h1>
    <button onClick={() => dispatch(increment())}>➕ Increment</button>
    <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
  </div>
  )
}

export default Counter