import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import DashboardSkeleton from '../../shared/ui/components/skelitons/DashboardSkeleton '

const MainProtected = () => {

  const {isLoading,user} = useSelector(state => state.auth)
    console.log("main protected roue loding state",isLoading)


  if(isLoading) return <DashboardSkeleton/>

  if(!user) {
    return <Navigate to={'/'}/>
  }
 
  return <Outlet />
}

export default MainProtected