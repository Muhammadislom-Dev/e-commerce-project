import React from "react";
import "./Profile.css";
import { PersonImage } from "../../assets/img";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Announcement from "./components/Announcement/Announcement";
import ProductCreate from "./components/ProductCreate/ProductCreate";
import Setup from "./components/Setup/Setup";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="profile-list">
            <img src={PersonImage} alt="" className="profile-img" />
            <div className="profile-item">
              <h3 className="profile-name">User Name</h3>
              <a href="tel:+998991234567" className="profile-number">
                +99899 123 45 67
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-tab">
        <div className="container">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "#E9E9E9" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="E’LONLARIM" {...a11yProps(0)} />
                <Tab label="E’LON QO’SHISH" {...a11yProps(1)} />
                <Tab label="SOZLAMALAR" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Announcement />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <ProductCreate />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Setup />
            </CustomTabPanel>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Profile;
