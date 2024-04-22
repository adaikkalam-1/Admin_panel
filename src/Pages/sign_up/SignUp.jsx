import { useState } from "react";
import axios from "axios";
import { useNavigate ,Link} from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
    confirm_password:""
  });


  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name,value);
  };

  const handleSubmit =() => {
    axios
      .post("http://192.168.0.108/api/user/register", formData)
      .then((response)=> {
        console.log(response)

        navigate("/login")  
    
      })
      .catch((error)=> {
        console.log(error);
      });
  };

  return (
    <div className="container">
    <form  className="form"onSubmit={handleSubmit}>
    <div className="form-title">Sign Up</div>
    <div className="input-container">
      <Input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
        className="input-container"
      />
      </div>
      <div className="input-container">
      <Input
        type="email"
        placeholder="E-mail"
        name="email"
        onChange={handleChange}
        className="input-container"
      />
      </div>
      <div className="input-container">
      <Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        className="input-container"
      />
      </div>
      <div className="input-container">
      <Input
        type="password"
        placeholder="Confirm Password"
        name="confirm_password"
        onChange={handleChange}
        className="input-container"
      />
      </div>
      
      {/* {error && <div className="error_msg">{error}</div>} */}
        
      <Button type="submit" className="submit" buttonName="submit" />
      <p className="signup-link">
      No account?
      <Link to="/login" >Sign in</Link>
      
    </p>
    </form>

    </div>
  );
};

export default SignUp;
