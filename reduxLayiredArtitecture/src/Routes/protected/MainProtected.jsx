import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import DashboardSkeleton from '../../shared/ui/components/skelitons/DashboardSkeleton '

const MainProtected = () => {

  const {isAuthenticate,isLoading} = useSelector(state => state.auth)

  if(isLoading) return <DashboardSkeleton/>


  if(!isAuthenticate) {
    return <Navigate to={'/'}/>
  }

  return <Outlet />
}

export default MainProtected