import { useState } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Modal from "../../../components/modal/Modal";
import "./image.css";
import { ImageUpload } from "../../../services/Index";
import ImageDisplay from "./ImageDisplay";

const ManageImageCreate = () => {
  const [showModel, setShowModal] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [formData, setFormData] = useState({
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
  const handleSubmit= async (e)=>{
    e.preventDefault()
    const file =new FormData()
  file.append("file_upload",formData.image)
  file.append("image_name",formData.image_name)
  file.append("upload_name",formData.upload_name)
  file.append("description",formData.description)
  console.log(file)
  try {
    const response = await ImageUpload(file);
    console.log(response.message);
    setUploadedImages([...uploadedImages, formData.image]); 
    setShowModal(false);
  } catch (error) {
    console.log(error);
  }
}
    
  return (
    <div>
      <Button
        className="btn1"
        onClick={() => setShowModal(true)}
        buttonName="Open"
      />
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
                />
              </form>
            </div>
          }
          close={setShowModal}
        />
      )}
  
   
     <ImageDisplay/>
    </div>
  );
};

export default ManageImageCreate;
