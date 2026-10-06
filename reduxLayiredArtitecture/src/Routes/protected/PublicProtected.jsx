import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import DashboardSkeleton from '../../shared/ui/components/skelitons/DashboardSkeleton '

const PublicProtected = () => {

    const {isLoading,user} = useSelector(state => state.auth)

    console.log("publice protected roue loding state",isLoading)

  if(isLoading) return <DashboardSkeleton/>

  if(user) {
    return <Navigate to={'/main'}/>
  }


  return <Outlet/>
}

export default PublicProtected