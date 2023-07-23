import React from "react";
import './Register.css'

function Register() {
  return (
    <div>
      <h3 className="register-name">Ro‘yhatdan o‘tish</h3>
      <form action="" className="register-form">
        <label htmlFor="">
          Telefon raqam
          <input type="number" className="register-input" />
        </label>
        <p style={{width:"450px"}}>
          Men <a href="#">xizmatdan foydalanish qoidalarini</a>, shuningdek
          Tekin Marketga mening ma’lumotlarimni uzatish va qayta ishlashga
          rozilik bildiraman. Men voyaga yetganligimni va e’lon joylashtirish
          uchun javobgarligimni tasdiqlayman.
        </p>
        <div className="register-label" >
          <input type="checkbox" />
          <p>
            Ha, men Tekin Market dagi yangiliklar va aksiyalar haqida ma’lumot
            olishni xohlayman.
          </p>
        </div>
        <button type="submit" className="form-button">
          Ro‘yhatdan o‘tish
        </button>
      </form>
    </div>
  );
}

export default Register;
