import requests from "./httpServices";

//=============================POST METHOD=================================//

// personalInfo
export const Login = async (data) => {
  return await requests.post(`/user/login`, data);
};
export const Register = async(data)=>{
  return await requests.post(`/user/register`, data);
}
