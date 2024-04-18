import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Pages/login/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import FolderCreate from "./Pages/admin/manageFolder/FolderCreate";
import SignUp from "./Pages/sign_up/SignUp";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<FolderCreate />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path='/Sign up' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
