import { useState } from "react";
import Input from "../../components/input/Input";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { Login } from "../../services/Index";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  
  });
  const [error,setError]=useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("")
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
      Login(formData).then((response) => {
        const user=response.user;
        const token=response.token;
        sessionStorage.setItem("user_data", JSON.stringify(user));
        sessionStorage.setItem("user_token", token);
        navigate("/");
       console.log(response)
      })
    .catch((error)=>{
      if (
        error.response &&
              error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
      
      // console.log(error);
      
      // setError(error.response.data.message)
    })
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-title">Login</div>
        <div className="input-container">
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="input-container"
        
          />
        </div>

        <div className="input-container">
          <Input
           label="Password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="input-container"
          
          />
        </div>
        <span className="forgot-password">
          <a href="#">Forgot Password ?</a>
        </span>
      {error && <div className="input_error">{error}</div> }
        <Button type="submit" className="submit" buttonName="submit" />
        <p className="signup-link">
          No account?
          <Link to="/sign_up">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
