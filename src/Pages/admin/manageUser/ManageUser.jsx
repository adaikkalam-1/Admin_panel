
import { useNavigate } from 'react-router-dom';

const ManageUser = () => {

  const navigate=useNavigate()
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
