import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Accountant from "./pages/Accountant";
import Notification from "./pages/Notification";
import Logout from "./pages/Logout";
import Sidebar from "./components/Sidebar";
import FeeStructure from "./pages/FeeStructure";
import Login from "./components/Login";
import Payments from "./pages/payment/Payments";
import CreateStudent from "./pages/createStudent/CreateStudent";
import Profile from "./pages/My profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/" element={<Logout />} />
      </Routes>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Students" element={<Students />} />
          <Route path="/accountant" element={<Accountant />} />
          <Route path="/feeStructure" element={<FeeStructure />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/Payments" element={<Payments />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/CreateStudent" element={<CreateStudent />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
