import { useState } from "react";
import "./Setup.css";
import defaultImg from "../../../../assets/img/default-profile-img.png";
import { FaCamera } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useMutation, useQuery } from "react-query";
import { getSetupData, uploadImage } from "../../../../api";

export default function Setup() {
  const [data, setData] = useState({ img: null });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const mutation = useMutation((post) => uploadImage(post), {
    onSuccess: (data) => {
      console.log(data.objectKoinot[0].id);
    },
  });

  const userData = useQuery("user data", getSetupData);

  return (
    <div className="setup">
      <div className="setup-img">
        <h3>Profil rasmi</h3>
        <label htmlFor="setup-profile-img" className="setup-img-upload">
          {data.img ? (
            <img src={URL.createObjectURL(data.img)} alt="error" />
          ) : (
            <div className="setup-img-default">
              <img src={defaultImg} alt="error" />
              <FaCamera />
            </div>
          )}
          <input
            type="file"
            id="setup-profile-img"
            accept="image/*"
            onChange={(e) => {
              mutation.mutate({ key: e.target.files[0] });
            }}
          />
          <span>Rasm yuklash</span>
        </label>
      </div>
      <form className="product-create-form" onSubmit={handleSubmit}>
        <label className="product-create-label">
          <h4>First Name</h4>
          <input
            onChange={(e) =>
              setData((state) => ({
                ...state,
                firstname: e.target.value,
              }))
            }
            type="text"
            maxLength={500}
            min={3}
            required
          />
        </label>
        <label className="product-create-label">
          <h4>Last Name</h4>
          <input
            onChange={(e) =>
              setData((state) => ({
                ...state,
                lastname: e.target.value,
              }))
            }
            type="text"
            maxLength={500}
            min={3}
            required
          />
        </label>
        <label className="product-create-label">
          <h4>Password</h4>
          <input
            onChange={(e) =>
              setData((state) => ({
                ...state,
                password: e.target.value,
              }))
            }
            type="password"
            maxLength={500}
            min={3}
            required
          />
        </label>
        <label className="product-create-label">
          <h4>Old Password</h4>
          <input
            onChange={(e) =>
              setData((state) => ({
                ...state,
                oldpassword: e.target.value,
              }))
            }
            type="password"
            maxLength={500}
            min={3}
            required
          />
        </label>
        <label className="product-create-label">
          <h4>Telefon raqam</h4>
          <input
            onChange={(e) =>
              setData((state) => ({
                ...state,
                name: e.target.value,
              }))
            }
            type="number"
            maxLength={500}
            min={3}
            required
          />
        </label>
        <div className="setup-btn-wrapper">
          <button className="product-create-form-button" type="submit">
            Yangilash
          </button>
          <button className="setup-logOut" type="button">
            <BiLogOut />
            <span>Profildan chiqish</span>
          </button>
        </div>
      </form>
    </div>
  );
}
