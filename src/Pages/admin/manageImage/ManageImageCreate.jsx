import { useState } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Modal from "../../../components/modal/Modal";

import "./image.css";
import { ImageUpload } from "../../../services/Index";

const ManageImageCreate = () => {
  const [showModel, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name, value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    ImageUpload(formData)
          .then((response) => {
            console.log(response.message);
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
                  />
                </div>
                <div className="input-container">
                  <Input
                    type="text"
                    label="Image Description"
                    placeholder="Image Description"
                    name="description"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <Input
                    type="file"
                    label="Select The Image"
                    placeholder="Select The Image"
                    name="image"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleChange}
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
      {/* <div className="card">
        <div className="card_container">
          <div className="card">
            <div className="card_content">
              <h3>Image</h3>
              <p>Description</p>
            </div>
            <a className="btn2" href="#">Edit</a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ManageImageCreate;
