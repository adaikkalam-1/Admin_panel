import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const FolderCreate = () => {
  const navigate=useNavigate()
  return (
    <div>
      <Button
        onClick={()=>{
          sessionStorage.clear();
          navigate("/login")
        }}>
          Log Out

      </Button>
    </div>
  )
}

export default FolderCreate
