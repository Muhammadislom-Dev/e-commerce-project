import React from "react";
import "./Header.css";
import { SearchIcon } from "../../../../assets/icon";
import { data } from "./data";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <h1>EHSONNING MUKOFATI EHSON</h1>
        <div className="header-item">
          <select name="" id="">
            <option value="Barchasi">Barchasi</option>
            <option value="Barchasi1">Barchasi1</option>
            <option value="Barchasi2">Barchasi2</option>
          </select>
          <select name="" id="">
            <option value="Shahar">Shahar</option>
            <option value="Shahar2">Shahar3</option>
            <option value="Shahar3">Shahar4</option>
          </select>
          <label htmlFor="">
            <img src={SearchIcon} alt="" className="header-icon" />
            <input
              type="search"
              placeholder="Nimadir qidiramizmi?"
              className="header-input"
            />
          </label>
        </div>
        <div className="header-list">
          {data.map((data) => (
            <Link key={data.id} to="/" className="header-link">
              <img src={data.img} alt="" className="header-icons" />
              <p className="header-subname">{data.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
