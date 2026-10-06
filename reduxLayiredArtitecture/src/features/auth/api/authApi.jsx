
import { api } from "../../../config/axiosInstance";

export const LoginApi = async (credentials) =>  {
    const res = await api.post('/auth/login',credentials)
    console.log("resp",res)
    localStorage.setItem('accessToken',res.data.accessToken)
    return res.data
}

export const HudrateUserapi = async () =>  {
    const token = localStorage.getItem('accessToken')
    const reponse = await api.get('/auth/me',{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
    return reponse.data
}