import { useNavigate } from "react-router";
import {useForm} from 'react-hook-form'
import { LoginApi } from "../api/authApi";
import {useDispatch} from 'react-redux'
import {addUser, setLoginLoading} from '../state/AuthSlice'

export const useAuth = () =>{
    let Navigate = useNavigate()
    let dispatch = useDispatch()

   const{register,handleSubmit,formState:{errors},reset} = useForm()

   const registerForm = () => {

   }

   const loginForm = async(data) => {
    try {
        dispatch(setLoginLoading(true));
        const response =await LoginApi(data)
        dispatch(addUser(response))
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