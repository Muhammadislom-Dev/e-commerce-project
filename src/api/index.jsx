import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = "http://64.227.105.70:1777/api"; // API ning manzili

// Register uchun POST so'rov yuborish uchun funktsiya
export const registerUser = async (userData, setCode) => {
  const response = await axios
    .post(`${API_BASE_URL}/auth/v1/register`, userData)
    .then((res) => {
      if (res.status === 200) {
        setCode(true);
      }
      localStorage.setItem("token", `${res?.data?.objectKoinot?.token}`);
    });
  return response.data;
};

export const PhoneSmsCode = async (userData) => {
  const navigate = useNavigate();
  const response = await axios
    .post(`${API_BASE_URL}/auth/v1/verify`, userData)
    .then((res) => {
      localStorage.setItem("token", `${res?.data?.objectKoinot?.accessToken}`);
      if (res?.data?.message === "successful") {
        navigate("/profile");
      }
    })
    .catch((err) => console.log(err));
  return response.data;
};
