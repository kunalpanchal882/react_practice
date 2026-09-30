import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        counter:0
    },
    reducers:{
        increment:(state)=>{
            state.counter++
        }
    }
})

export const {increment} = counterSlice.actions

export default counterSlice.reducer