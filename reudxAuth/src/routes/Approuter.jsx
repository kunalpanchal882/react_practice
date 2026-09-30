import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from "../layout/AuthLayout"
import LoginPages from "../pages/LoginPages"
import RegisterPages from "../pages/RegisterPages"
import HomePage from "../pages/HomePage"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { addUser } from "../features/authSlice/authSlice"
import { useEffect } from "react"
import PublicProtected from "./ProtectedRoutes/PublicProtected"
import MainProtected from "./ProtectedRoutes/MainProtected"


const Approuter = () => {
    const dispatch = useDispatch()

    const hydrateUser = () =>{
        console.log("hydrate user")
        let loggedInUser = JSON.parse(localStorage.getItem('logedUser'))

        if(!loggedInUser){
            toast.error('unAuthorized user')
            return
        }

        dispatch(addUser(loggedInUser))
    }

    useEffect(() => {
        hydrateUser()
    },[])


    const router = createBrowserRouter([
        {
            path:'/',
            element:<PublicProtected/>,
            children:[
                {
                    path:"",
                element:<AuthLayout/>,
            children:[
                {
                    path:'',
                    element:<LoginPages/>
                },
                {
                    path:'/register',
                    element:<RegisterPages/>
                },
            ]
                }
            ]
        },
        {
            path:"/main",
            children:[
                {
                    path:'',
                    element:<MainProtected/>,
                    children:[
                        {
                            path:'',
                            element:<HomePage/>
                        }
                    ]
                }
            ]
        }
        
    ])


  return <RouterProvider router={router}/>
}

export default Approuter