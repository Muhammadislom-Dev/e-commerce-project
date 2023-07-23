import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <h3 className="register-name">Ro‘yhatdan o‘tish</h3>
      <form action="" className="register-form">
        <label htmlFor="">
          Telefon raqam
          <input type="number" className="register-input" />
        </label>
        <button type="submit" className="form-button">
          Kirish
        </button>
      </form>
    </div>
  );
}

export default Login;
