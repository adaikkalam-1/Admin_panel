import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Pages/login/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import FolderCreate from "./Pages/admin/manageFolder/FolderCreate";
import SignUp from "./Pages/sign_up/SignUp";
import ManageImageCreate from "./Pages/admin/manageImage/ManageImageCreate";
import ManageUser from "./Pages/admin/manageUser/ManageUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<ManageUser />} />
            <Route path="/folder_create" element={<FolderCreate />} />
            <Route path="/manage_image_create" element={<ManageImageCreate />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
