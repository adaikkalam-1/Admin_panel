import { useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate ,Link} from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      .post("http://192.168.0.108/api/user/login", formData)
      .then((response)=> {
        const user= response.data.user;
        const token=response.data.token;
        sessionStorage.setItem("user_data",JSON.stringify(user));
        sessionStorage.setItem("user_token",token);
        navigate("/")
    
      })
      .catch((error)=> {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <Form onFinish={handleSubmit} onFinishFailed={(e) => console.log(e)}>
        <h1>Login</h1>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            name="password" 
            value={formData.password}
            onChange={handleChange}
            className="input"
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Link to='/Sign up' className="btn"> Sign Up </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
