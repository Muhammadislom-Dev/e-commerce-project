import React from "react";
import "./Navbar.css";
import {
  CategoryIcon,
  DocumentIcon,
  HeartIcon,
  LogoIcon,
  UserIcon,
} from "../../assets/icon";
import { Link } from "react-router-dom";
import LoginModal from "../Modal/Modal";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-left">
          <Link to="/">
            <img src={LogoIcon} alt="" className="navbar-icon" />
          </Link>
          <button className="navbar-category">
            <img src={CategoryIcon} alt="" className="navbar-icons" />
            Barcha bo‘limlar
          </button>
        </div>
        <div className="navbar-right">
          <Link to="/blog" className="navbar-link">
            <img src={DocumentIcon} alt="" className="navbar-icon" />
            Blog
          </Link>
          <Link to="/like" className="navbar-link">
            <img src={HeartIcon} alt="" className="navbar-icon" />
            Sevimlilar
          </Link>
          <LoginModal />
          <Link to="/profile" className="navbar-submit">
            E’lon berish
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
