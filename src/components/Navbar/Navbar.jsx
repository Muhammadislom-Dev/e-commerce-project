import React, { useState } from "react";
import "./Navbar.css";
import {
  CategoryIcon,
  DocumentIcon,
  HeartIcon,
  LogoIcon,
} from "../../assets/icon";
import { Link } from "react-router-dom";
import LoginModal from "../Modal/Modal";
import Language from "../Language/Language";
import Category from "../Category/Category";

function Navbar() {
  const [isCategory, setisCategory] = useState(false);
  return (
    <div className="navbar">
      {isCategory ? <Category setisCategory={setisCategory} /> : null}
      <div className="container">
        <div className="navbar-left">
          <Link to="/">
            <img src={LogoIcon} alt="" className="navbar-icon navbar__icon" />
          </Link>
          <button
            className="navbar-category"
            onClick={() => setisCategory((state) => !state)}
          >
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
          <Language />
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
