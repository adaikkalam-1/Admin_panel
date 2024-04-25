import { Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = () => {

   const user = JSON.parse(sessionStorage.getItem("user_data"))
   const token=sessionStorage.getItem("user_token")
   console.log(user);
   
   const result= user && token ? <Outlet/> : <Navigate to="/login" />
   return result ;

  
  
}

export default ProtectedRoute
