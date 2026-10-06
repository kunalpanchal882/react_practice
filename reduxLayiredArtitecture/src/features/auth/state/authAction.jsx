import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/axiosInstance";

export const loginAuthAction = createAsyncThunk(
    'auth/login',
    async (credentials,thunkApi) => {
        try {
          const res = await api.post('/auth/login',credentials)
              localStorage.setItem('accessToken',res.data.accessToken)
              return res.data  
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue("login fails")
        }
    }
)

export const hudrateUserAction = createAsyncThunk(
    'auth/hudrate',
    async (_,thunkApi) => {
        const token = localStorage.getItem('accessToken')
        try {
           const reponse = await api.get('/auth/me',{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
    return reponse.data 
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue("hydrate fails")
        }
    }
)