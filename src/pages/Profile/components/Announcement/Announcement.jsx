import React from "react";
import "./Announcement.css";
import images24 from "../../../../assets/images24.png";
import edit from "../../../../assets/edit.svg";
import backet from "../../../../assets/backet.svg";
import cricle from "../../../../assets/cricle.svg";

function Announcement() {
  return (
    <div className="announcement">
      <div className="container">
        <div className="announcement-list">
          <div className="announcement-card">
            <div className="card__left">
              <img src={images24} alt="images24" />
            </div>
            <div className="card__right">
              <h2 className="card__right_title">
                Erkaklar uchun yozgi fudbolka holati yangi...
              </h2>
              <div className="card__right_subTitle">
                Toshkent, Mirzo ulu’bek tumani Bugun 13:11
              </div>
              <div className="card__right_blok">
                <a href="#" className="blok__old">
                  Eski
                </a>
                <p className="blok__edit">
                  <span>
                    <img src={edit} alt="edit" />
                  </span>
                  Tahrirlash
                </p>
                <img src={backet} alt="backet" className="blok__backet" />
              </div>
              <div className="card__left__check">
                <div className="check__circle"></div>
              </div>
            </div>

            <img src={cricle} alt="cricle" className="card__cricle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
