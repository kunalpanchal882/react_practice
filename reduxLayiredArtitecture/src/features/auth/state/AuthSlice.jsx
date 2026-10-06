import { createSlice } from "@reduxjs/toolkit";
import { hudrateUserAction, loginAuthAction } from "./authAction";

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
            state.isLoading = false
        },
        setAuthLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setLoginLoading: (state, action) => {
      state.loading = action.payload;
    },

    },
  extraReducers:(builder) => {
    builder
    .addCase(loginAuthAction.pending,(state) => {
        state.isLoading = true
    })
    .addCase(loginAuthAction.fulfilled,(state,action) => {
        state.user = action.payload
        state.isLoading = false
        state.isAuthenticate = true
    })
    .addCase(loginAuthAction.rejected,(state) => {
        state.isLoading = false
    })
    .addCase(hudrateUserAction.pending,(state) => {
        state.isLoading = true
    })
    .addCase(hudrateUserAction.fulfilled,(state,action) => {
        state.user = action.payload
        state.isLoading = false
        state.isAuthenticate = true
    })
    .addCase(hudrateUserAction.rejected,(state) => {
        state.isLoading = false
    })
  }
})

export const {addUser,removeUser,setAuthLoading,setLoginLoading} = authReducer.actions

export default authReducer.reducer