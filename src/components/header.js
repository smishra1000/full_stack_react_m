import React from "react";

import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Employee from "./company/Company";
import Users from "./users/Users";
import Company from "./company/Company";
import Login from "./auth/Login";
import PrivateRoutes from "./auth/PrivateRoutes"
import Dashboard from "./Dashboard";

function Header() {
  return (
    <Router>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Motivity
        </a>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/employee">Employee</Link>
            </li>
          </ul>
        </div>
      </nav> */}
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/dashboard" element={<PrivateRoutes path="/">
            <Dashboard/>
        </PrivateRoutes>}/>
        <Route exact path="/users" element={<PrivateRoutes path="/">
            <Users/>
        </PrivateRoutes>}/>
        {/* <Route exact path="/employee" element={<Employee />} /> */}
      </Routes>
    </Router>
   
  );
}
export default Header;
