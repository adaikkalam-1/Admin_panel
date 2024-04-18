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
            <Route path="/ManageUser" element={<ManageUser />} />
            <Route path="/FolderCreate" element={<FolderCreate />} />
            <Route path="/ManageImageCreate" element={<ManageImageCreate />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Sign up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
