
import { useNavigate } from 'react-router-dom'

const FolderCreate = () => {
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

export default FolderCreate
