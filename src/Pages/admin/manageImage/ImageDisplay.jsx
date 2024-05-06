import { useEffect, useState } from "react";
import { DisplayImage } from "../../../services/Index";
import IMG1 from "../../../assets/img2.jpg";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState([
    {
      id: 0,
      file_path: IMG1,
      upload_name: "img 1",
      description: "welcome to all Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam provident ipsum non dolor reprehenderit delectus maiores neque ex deleniti?",
    },
    {
      id: 1,
      file_path: IMG1,
      upload_name: "img 2",
      description: "welcome to all Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam provident ipsum non dolor reprehenderit delectus maiores neque ex deleniti?",
    },
    {
      id: 2,
      file_path: IMG1,
      upload_name: "img 3",
      description: "welcome to all Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam provident ipsum non dolor reprehenderit delectus maiores neque ex deleniti? "
      },
  ]);

  useEffect(() => {
    DisplayImage()
      .then((response) => {
        setImageUrl(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleView = () => {
    console.log("view");
  };
  const handleDelete = (id) => {
    console.log(id);
    const updatedImages = imageUrl.filter((image) => image.id !== id);
    setImageUrl(updatedImages);
  };
  const image_show = () => {
    console.log("image_show");
  };
  return (
    
    <div className="card_container">
      {imageUrl.map((data) => (
        <div className="card" key={data.id}>
          <div className="gallery">
            <img src={data.file_path} onClick={image_show} />
          </div>

          <div className="card_content">
            <h4>{data.upload_name}</h4>
            <p>{data.description}</p>
          </div>
          <div className="icons_container">
            <Link to={`/image_update/${data.id}`}>
              <FiEdit
                onClick={handleView}
                className="icons_edit"
                style={{ color: "magenta", fontSize: "19px" }}
              />
            </Link>
            &nbsp;
            <MdOutlineDeleteOutline
              onClick={() => handleDelete(data.id)}
              className="icons_edit"
              style={{
                color: "magenta",
                fontSize: "20px",
                fontWeight: "normal",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
