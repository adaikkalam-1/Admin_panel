import { useEffect, useState } from "react";
import { DisplayImage } from "../../../services/Index";

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState([]);
  useEffect(() => {
    DisplayImage()
      .then((response) => {
        setImageUrl(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
 
    <div className="card">
      {imageUrl.map((data) => (
       
          <div className="card_container" key={data.id}>
            <img src={data.file_path} />
            <div className="card_content">
              <h4 >{data.upload_name}</h4>
              <p>{data.description}</p>
            </div>
            <a className="btn2" href="#">
              Edit
            </a>
          </div>
      
      ))}
    </div>
 
  );
};

export default ImageDisplay;
