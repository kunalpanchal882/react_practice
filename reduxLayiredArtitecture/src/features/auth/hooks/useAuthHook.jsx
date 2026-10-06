import { useNavigate } from "react-router";
import {useForm} from 'react-hook-form'
import { LoginApi } from "../api/authApi";
import {useDispatch} from 'react-redux'
import { setLoginLoading} from '../state/AuthSlice'
import { loginAuthAction } from "../state/authAction";


export const useAuth = () =>{
    let Navigate = useNavigate()
    let dispatch = useDispatch()

   const{register,handleSubmit,formState:{errors},reset} = useForm()

   const registerForm = () => {

   }

   const loginForm = (data) => {
    try {
        dispatch(setLoginLoading(true));
        // const response =await LoginApi(data)
        // const response = loginAuthAction(data)
        dispatch(loginAuthAction(data))
        reset()
    } catch (error) {
        console.log("error in login api",error)
    }finally{
        dispatch(setLoginLoading(false))
    }
   }


    return{
        Navigate,
        register,
        handleSubmit,
        errors,
        reset,
        registerForm,
        loginForm
    }

}