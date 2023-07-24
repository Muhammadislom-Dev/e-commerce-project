import React, { useState } from "react";
import { PhoneSmsCode } from "../../api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

function SmsCode({ phoneNumber, handleClose }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    token: token,
    phoneNumber: phoneNumber,
    code: "",
  });
  const mutation = useMutation((userData) =>
    PhoneSmsCode(userData, navigate, handleClose)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

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
