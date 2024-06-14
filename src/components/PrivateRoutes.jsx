import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

const PrivateRoutes = () => {
    let auth = useAuth()
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes