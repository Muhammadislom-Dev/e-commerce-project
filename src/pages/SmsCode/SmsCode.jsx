import React, { useState } from "react";
import { PhoneSmsCode } from "../../api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

function SmsCode({ phoneNumber, handleClose }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    token: token,
    phoneNumber: phoneNumber,
    code: "",
  });
  const { mutate, isLoading } = useMutation((userData) =>
    PhoneSmsCode(userData, navigate, handleClose)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={"80vh"}>
        <CircularProgress
          color="success"
          style={{ width: "100px", height: "100px" }}
        />
      </Box>
    );
  }

  return (
    <div>
      <h3 className="register-name">SMS kod</h3>
      <form onSubmit={handleSubmit} action="" className="register-form">
        <label htmlFor="code">
          SMS kod
          <input
            type="text"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="register-input"
            required
          />
        </label>
        <p>{phoneNumber} telefon raqamiga tasdiqlash kodi jo’natildi</p>
        <button type="submit" className="form-button">
          Tasdiqlash
        </button>
      </form>
    </div>
  );
}

export default SmsCode;
