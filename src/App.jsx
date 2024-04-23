import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ProtectedRoute from "./utils/ProtectedRoute";
import FolderCreate from "./Pages/admin/manageFolder/FolderCreate";
import SignUp from "./Pages/sign_up/SignUp";
import ManageImageCreate from "./Pages/admin/manageImage/ManageImageCreate";
import ManageUser from "./Pages/admin/manageUser/ManageUser";
import Dashboard from "./Pages/dashboard/Dashboard";
import LoginForm from "./Pages/login/LoginForm";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate replace to="dashboard"/>}/>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path='manage_user' element={<ManageUser />} />
            <Route path="manage_folder" element={<FolderCreate />} />
            <Route path="manage_image" element={<ManageImageCreate />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
