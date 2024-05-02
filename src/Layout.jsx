import { Outlet } from "react-router-dom";
import SideBar from "./Pages/sidebar/SideBar";
import "./layout.css";
import { AiOutlineLogin } from "react-icons/ai";

const Layout = () => {
  const handleClick = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };
  return (
    <div className="layout_grid">
      <SideBar />
      <div className="head-grid"> welcome
        <div className="icons">
          <div className="sign">
            <AiOutlineLogin onClick={handleClick} />
          </div>
          <div className="text_btn" onClick={handleClick}>
            Logout
          </div>
        </div>
      </div>

      <main className="outlet_grid">
        <div className="con">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Layout;
// import  { useState, useEffect } from 'react';
// import axios from 'axios';

// const ImageDisplay = () => {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await axios.get('/api/images/example.jpg');  const response = await axios.get('/// Replace 'example.jpg' with the actual image name
//         setImageUrl(response.data.imageUrl); // Assuming your API returns an object with the image URL
//       } catch (error) {
//         console.error('Error fetching image:', error);
//       }
//     };

//     fetchImage();
//   }, []); // Empty dependency array to run the effect only once when the component mounts

//   return (
//     <div>
//       {imageUrl ? (
//         <img src={imageUrl} alt="Image" />
//       ) : (
//         <p>Loading image...</p>
//       )}
//     </div>
//   );
// };

// export default ImageDisplay;