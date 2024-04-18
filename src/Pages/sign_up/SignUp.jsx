import { useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate ,Link} from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name:"",
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
      .post("http://192.168.0.108/api/user/register", formData)
      .then((response)=> {
        console.log(response)

        navigate("/Login")  
    
      })
      .catch((error)=> {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <Form onFinish={handleSubmit} onFinishFailed={(e) => console.log(e)}>
        <h1>Sign Up</h1>
        
       
        <Form.Item
          name="Name"
          rules={[
            {
              type: "Name",
              message: "The input is not valid Name!",
            },
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </Form.Item>
        
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
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>
       
        <Form.Item
          wrapperCol={{
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Link to='/login' className="btn"> Login </Link>
        </Form.Item>

      </Form>
    </div>
  );
};

export default SignUp;
