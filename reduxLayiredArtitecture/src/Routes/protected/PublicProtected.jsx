import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import DashboardSkeleton from '../../shared/ui/components/skelitons/DashboardSkeleton '

const PublicProtected = () => {

    const {isAuthenticate,isLoading} = useSelector(state => state.auth)

  if(!isLoading) return <DashboardSkeleton/>



  if(isAuthenticate) {
    return <Navigate to={'/main'}/>
  }


  return <Outlet/>
}

export default PublicProtected