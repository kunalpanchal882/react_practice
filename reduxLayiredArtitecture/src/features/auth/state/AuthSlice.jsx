import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticate:false,
        isLoading:true,
        loading:false,
    },
    reducers:{
        addUser:(state,action) => {
            state.user = action.payload
            state.isAuthenticate = true;
            state.isLoading = false
        },
        removeUser:(state) => {
            state.user = null
            state.isAuthenticate = false;
            state.isLoading = true
        },
        setLoginLoading: (state, action) => {
      state.loading = action.payload;
    },

    }
})

export const {addUser,removeUser,setLoginLoading} = authReducer.actions

export default authReducer.reducer