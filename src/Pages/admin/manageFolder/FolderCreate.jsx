import { useState } from "react";
import "./folder_create.css";
import MultiSelection from "../../../components/multi_Selection/MultiSelection";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import Modal from "../../../components/modal/Modal";

const FolderCreate = () => {
  const options = [
    { id: 1, value: "image 1" },
    { id: 2, value: "image 2" },
    { id: 3, value: "image 3" },
    { id: 4, value: "image 4" },
    { id: 5, value: "image 5" },
    { id: 6, value: "image 6" },
  ];
  const [data, setData] = useState([])
  const [formValue,setFormValue]=useState({
    folder_name:"",
    description:"",
    multiselect:[]

  })

  const [showModel, setShowModal] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!data.includes(value)) {
      setData([...data, value]);
    }
  };
const handleFileChange=(e)=>{
  const{name,value}=e.target;
  setFormValue({
   ...formValue,
    [name]:value
  })
  console.log(name,value)

}
  const remove = (name) => {
    setData(data.filter((item) => item !== name));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setShowModal(false);
  };
  return (
    <div>
      <Button
        className="btn1"
        onClick={() => setShowModal(true)}
        buttonName="Open"
      />
      {showModel && (
        <Modal
          title={<div className="form-title">File Upload</div>}
          content={
            <div className="folder_container">
              <form className="form" onSubmit={handleSubmit}>
                <div className="input-container">
                  <Input
                    type="text"
                    label="Image Name"
                    placeholder="Image Name"
                    name="folder_name"
                    onChange={handleFileChange}
                    // value={formValue.folder_name}
                  />
                </div>
                <div className="input-container">
                  <Input
                    type="text"
                    label="Image Description"
                    placeholder="Image Description"
                    name="description"
                    onChange={handleFileChange}
                    // value={formValue.description}
                  />
                </div>

                <div className="box">
                  {data.map((name, index) => (
                    <MultiSelection
                      key={index}
                      value={name}
                      onClick={() => remove(name)}
                    />
                  ))}
                </div>

                <select name="multiselect" onChange={handleChange} className="dropdown">
                  {options.map((id) => (
                    <option key={id.id} value={id.value}>
                      {id.value}
                    </option>
                  ))}
                </select>

                <Button type="submit" className="submit" buttonName="submit" />
              </form>
            </div>
          }
          close={setShowModal}
        />
      )}
    </div>
  );
};

export default FolderCreate;
