import React from "react";
import "./nav.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import { auth } from "../Firebase/firebase";
import { signOut } from "firebase/auth";

const logout = async () => {
  await signOut(auth);
  console.log("clicked");
};

const Nav = () => {
  return (
    <nav className="nav-container">
      <Link to="/home" className="logo">
        <div className="nav-logo">
          <img src={Logo} alt="gymshark logo" />
        </div>
      </Link>
      <Link to="/favorite" className="favorites">
        My Favorites
      </Link>
      <div className="logout">
        <div onClick={logout}>
          <Link to="/" className="logout">
            {" "}
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
