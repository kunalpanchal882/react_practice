import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment} from './features/counterSlicer'

const App = () => {

const {counter} =  useSelector((state) => state.counter )
const dispatch = useDispatch()
console.log( counter)

  return (
    <div>
      <h1>`count == ${counter}`</h1>
      <button onClick={() => dispatch(increment())}>incremet</button>
    </div>
  )
}

export default App