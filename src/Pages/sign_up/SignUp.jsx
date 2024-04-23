import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://192.168.0.113/api/user/register", formData)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-title">Sign Up</div>
        <div className="input-container">
          <Input
            label="Name "
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="input-container"
            required="true"
          />
        </div>

        <div className="input-container">
          <Input
            label="Email "
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="input-container"
            required="true"
          />
        </div>
        <div className="input-container">
          <Input
            label="Password "
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="input-container"
            required="true"
          />
        </div>

        {error && <div className="input_error">{error}</div>}

        <Button type="submit" className="submit" buttonName="submit" />
        <p className="signup-link">
          No account?
          <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
