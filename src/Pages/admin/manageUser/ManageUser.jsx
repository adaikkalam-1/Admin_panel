
import { Navigate } from 'react-router-dom';

const ManageUser = () => {

  const navigate=Navigate()
  return (
    <div>
    <button
      onClick={()=>{
        sessionStorage.clear();
        navigate("/login")
      }}>
        Log Out

    </button>
  </div>
  )
}

export default ManageUser
