import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Validation from "../../common/Validation";
import { Register } from "../../services/Index";

const SignUp = () => {
  const {
    validateSign_up,
    validateName,
    validateEmailAddress,
    validatePassword,
  } = Validation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState(validateSign_up);
  const [error, setError] = useState("");
  const [serverResponse, setServerResponse] = useState("");

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    let temp = { ...formData };
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name == "name") {
      let validationResult = validateName(value);
      temp[name] = validationResult.value;
      setValidate((prevState) => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          error: !validationResult.error,
        },
      }));
    } else if (name === "email") {
      let validationResult = validateEmailAddress(value);
      temp[name] = validationResult.value;
      setValidate((prevState) => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          error: !validationResult.error,
        },
      }));
    } else if (name === "password") {
      let validationResult = validatePassword(value);
      temp[name] = validationResult.value;
      setValidate((prevState) => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          error: !validationResult.error,
        },
      }));
    }
    console.log(name, value);
  };
  console.log(validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.name && formData.email && formData.password !== " "
      ? Register(formData)
          .then((response) => {
            navigate("/login");
            console.log(response.message);
          })
          .catch((error) => {
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
            ) {
              setError(error.response.data.message);
              setServerResponse(error.response.data.error.email);
            }
          })
      : "";
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
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
            required={true}
            error={!validate.name.error ? validate.name.message : ""}
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
            required={true}
            error={!validate.email.error ? validate.email.message : ""}
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
            required={true}
            error={!validate.password.error ? validate.password.message : ""}
          />
        </div>
        {serverResponse && <div className="input_error">{serverResponse}</div>}
        <br></br>
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
