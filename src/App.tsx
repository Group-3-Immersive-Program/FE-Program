import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Login from "./pages/Login";
import Layout from "./component/Layout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Presensi from "./pages/Presensi/Presensi";
import TimeOff from "./pages/TimeOff/TimeOff";

import Target from "./pages/Target/Target";
import Employe from "./pages/Employe/Employe";
import AddEmploye from "./pages/Employe/AddEmploye";
import IndexRole from "./pages/RoleManagement/IndexRole";
import AddRole from "./pages/RoleManagement/AddRole";
import IndexUser from "./pages/UserManagement/IndexUser";
import AddUser from "./pages/UserManagement/AddUser";
import DetailUser from "./pages/UserManagement/DetailUser";
import EmployeeLevel from "./pages/EmployeeLevel/indexEmployeeLevel";
import AddEmployeeLevel from "./pages/EmployeeLevel/AddEmployeeLevel";
import AddTimeOff from "./pages/TimeOff/AddTimeOff";

export default function App() {
  axios.defaults.baseURL = "https://project2.otixx.online/";
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/User" element={<IndexUser />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/DetailUser/:id" element={<DetailUser />} />
          <Route path="/Role" element={<IndexRole />} />
          <Route path="/AddRole" element={<AddRole />} />
          <Route path="/EmployeeLevel" element={<EmployeeLevel />} />
          <Route path="/AddEmployeeLevel" element={<AddEmployeeLevel />} />
          <Route path="/Presensi" element={<Presensi />} />
          <Route path="/TimeOff" element={<TimeOff />} />
          {/* <Route path="/Remburse" element={<Remburse />} /> */}
          <Route path="/Target" element={<Target />} />
          <Route path="/Employe" element={<Employe />} />
          <Route path="/AddEmploye" element={<AddEmploye />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AddTimeOff" element={<AddTimeOff />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
