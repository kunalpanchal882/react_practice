
import { api } from "../../../config/axiosInstance";

export const LoginApi = async (credentials) =>  {
   try {
    const res = await api.post('/auth/login',credentials)
    console.log("resp",res)
    localStorage.setItem('accessToken',res.data.accessToken)
    return res.data
   } catch (error) {
    console.log('error in login api',error)
   }
}

export const HudrateUserapi = async () =>  {
    const token = localStorage.getItem('accessToken')
   try {
    const reponse = await api.get('/auth/me',{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
    return reponse.data
   } catch (error) {
    console.log('error in login api',error)
   }
}