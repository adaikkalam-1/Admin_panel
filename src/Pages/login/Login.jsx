import { useState } from "react";
import Input from "../../components/input/Input";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/button/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // setError("");
  };

  const handleSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/api/user/login`, formData)
      .then((response) => {
        const user = response.data.user;
        const token = response.data.token;
        sessionStorage.setItem("user_data", JSON.stringify(user));
        sessionStorage.setItem("user_token", token);
        navigate("/");
      })
      .catch((error) => {
        // setError(error.response.data.message);
        console.log(error)
      });
  };

  return (
   
      <div className="container">
      <form  className="form"onSubmit={handleSubmit}>
      <div className="form-title">Sign In</div>
      <div className="input-container">
        <Input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="input-container"
        />
        </div><div className="input-container">
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="input-container"
        />
        </div>
        
        {/* {error && <div className="error_msg">{error}</div>} */}
           <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
        <Button type="submit" className="submit" buttonName="submit" />
        <p className="signup-link">
        No account?
        <Link to="/sign_up" >Sign Up</Link>
        
      </p>
      </form>

      </div>
 
  );
};

export default Login;
