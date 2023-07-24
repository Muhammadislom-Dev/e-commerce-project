import React from "react";
import "./Header.css";
import { SearchIcon } from "../../../../assets/icon";
import { data } from "./data";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useQuery } from "react-query";
import { fetchRegionData } from "../../../../api";

function Header() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { data, isLoading, isError } = useQuery('exampleData', fetchRegionData);

  if (isLoading) {
    return <p>Yuklanyapti...</p>;
  }

  if (isError) {
    return <p>Xatolik yuz berdi.</p>;
  }
  return (
    <div className="header">
      <div className="container">
        <h1>EHSONNING MUKOFATI EHSON</h1>
        <div className="header-item">
          <FormControl className="header-select">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="header-select">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
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
