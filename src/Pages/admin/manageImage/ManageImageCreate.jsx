import { useState } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Modal from "../../../components/modal/Modal";
import "./image.css";
import { ImageUpload } from "../../../services/Index";

const ManageImageCreate = () => {
  const [showModel, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    image_name: "",
    description: "",
    file: null,
  });
  const [uploadedImages, setUploadedImages] = useState([]);
  const handleChange = (e) => {
    const { name, value ,file} = e.target;
    setFormData({
      ...formData,
      [name]: name === "file" ? file[0]:value,
    });
    console.log(name, value,file);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    ImageUpload(formData)
          .then((response) => {
            console.log(response.message);
            setUploadedImages([...uploadedImages, formData]); 
            setFormData({
              image_name:"",
              description:"",
              file:null
            })
          })

          .catch((error) => {
            console.log(error)
          })
            
    console.log(formData);
    setShowModal(false);  
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
                    value={formData.image_name}
                  />
                </div>
                <div className="input-container">
                  <Input
                    type="text"
                    label="Image Description"
                    placeholder="Image Description"
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
                  />
                </div>
                <div className="input-container">
                  <Input
                    type="file"
                    label="Select The Image"
                    placeholder="Select The Image"
                    name="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleChange}
                    value={formData.file}
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
      <div className="card">
      {uploadedImages.map((item,i)=>(
        <div className="card_container" key={i}>
          <div className="card">
            <img src={URL.createObjectURL(item.file)}/>
            <div className="card_content">

              <h3>{item.file}</h3>
              <p>{item.description}</p>
            </div>
            <a className="btn2" href="#">Edit</a>
          </div>
        </div>
  ))}
      </div>
    </div>
  );
};

export default ManageImageCreate;
