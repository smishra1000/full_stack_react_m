import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Employee from "./Employee";
import Users from "./Users";
import Company from "./Company";

function Header() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      </nav>
      <Routes>
        <Route exact path="/" element={<Company />}></Route>
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/employee" element={<Employee />} />
      </Routes>
    </Router>
  );
}
export default Header;
