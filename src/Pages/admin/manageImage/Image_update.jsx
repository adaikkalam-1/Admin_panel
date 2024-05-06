import { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import Modal from "../../../components/modal/Modal";
import Input from "../../../components/input/Input";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Image_update = () => {
    const [showModel, setShowModal] = useState(true);
    const {id}=useParams()

const [formData, setFormData] = useState({
  id:id,
  image_name: "",
  description: "",
  upload_name:"",
  image: "",
});
const handleChange = (e) => {
  const { name, value} = e.target;
  setFormData({
    ...formData,
    [name]: value,
  })
  console.log(name, value);
};
const handleFileChange=(e)=>{
    const { name, files} = e.target;
    console.log(e)
    setFormData({
      ...formData,
      [name]: files[0],
    })
    console.log(name, files);
    
  }
  const page=()=>{
    navigate("/manage_image")
   
  }
 
  useEffect(()=>{
    axios.get('http:localhost:3000/user/'+id)
     .then((res)=>{
  setFormData({...formData,
    image_name:res.data.image_name,
    description:res.data.description,
    upload_name:res.data.upload_name,
    image:res.data.image,
  })

})
     .catch((error)=>{
        console.log(error)
      })

  },[])
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put('http:localhost:3000/user/'+id,formData)
   .then((res)=>{
    console.log(res)
    navigate("/manage_image")
    setShowModal(false)
    })
   .catch((error)=>{
      console.log(error)
    })
}
  return (
    
    <div>
    
      {showModel && (
        <Modal
          title={<div className="form-title">Image Upload</div>}
          content={
            <div className="container-img">
              <form onSubmit={handleSubmit} className="form">
                <div className="input-container">
                  <Input
                    type="text"
                    label="Image Name"
                    placeholder="Image Name"
                    name="image_name"
                    onChange={handleChange}
                    // value={formData.image_name}
                  />
                </div>
                <div className="input-container">
                  <Input
                    type="text"
                    label="Image Description"
                    placeholder="Image Description"
                    name="description"
                    onChange={handleChange}
                    // value={formData.description}
                  />
                </div>
                <div className="input-container">
                  <Input
                    type="text"
                    label="Upload Name"
                    placeholder="Upload_Name"
                    name="upload_name"
                    onChange={handleChange}
                    // value={formData.upload_name}
                  />
                </div>
                <div className="input-container">
                  <Input
                    type="file"
                    label="Select The Image"
                    placeholder="Select The Image"
                    name="image"
                    accept= "image/*"
                    onChange={handleFileChange}
                    
                  />
                </div>
                <Button
                  type="submit"
                  className="submit"
                  buttonName="submit"
                  onClick={page}
                />
              </form>
            </div>
          }
          close={page}
        />
      )}
    </div>
  )
}

export default Image_update
