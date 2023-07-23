import React from "react";
import duvoyka from "../../assets/duvoyka.png";
import location from "../../assets/location.svg";
import clock from "../../assets/clock.svg";
import eye from "../../assets/eye.svg";
import children from "../../assets/children.svg";
import left from "../../assets/left.svg";
import slider1 from "../../assets/slider1.svg";
import slider2 from "../../assets/slider2.svg";
import slider3 from "../../assets/slider3.svg";
import right from "../../assets/right.svg";
import "./AboutProduct.css";
import Card from "../../components/Card/Card";
import qaychi from "../../assets/qaychi.png";

function AboutProduct() {
  return (
    <>
      <div className="container">
        <div className="blok">
          <div className="blok__left">
            <img src={duvoyka} alt="duvoyka" className="blok__left_img" />
          </div>
          <div className="blok__right">
            <h1 className="blok__right_title">
              Erkaklar uchun yozgi ko‘ylak holati o‘rtacha
            </h1>
            <p className="blok__right_subTitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <div className="blok__right_icons">
              <a href="#" className="icons__link">
                O’rtacha
              </a>
              <div className="icons__oblast">
                <img
                  src={location}
                  alt="location"
                  className="icons__oblast_location"
                />
                <p className="icons__oblast_subTitle">
                  Toshkent, Mirzo ulug’bek tumani
                </p>
              </div>
              <div className="icons__oblast">
                <img
                  src={clock}
                  alt="clock"
                  className="icons__oblast_location"
                />
                <p className="icons__oblast_subTitle">21:30 | 17.05.2023</p>
              </div>
              <div className="icons__oblast">
                <img src={eye} alt="eye" className="icons__oblast_location" />
                <p className="icons__oblast_subTitle">186 +</p>
              </div>
            </div>
            <div className="blok__right_call">
              <a href="#" className="call__link">
                Qo’ng’iroq qilish
              </a>
              <div className="call__children">
                <img src={children} alt="children" />
                <div className="call__children_orderer">
                  <h4 className="orderer_title">E’lon beruvchi</h4>
                  <p className="orderer_subTitle">So’ngi faolligi 12.06.2023</p>
                </div>
              </div>
            </div>
            <p className="blok__right_note">
              <b className="note__span">Muhim eslatma:</b> Qo’ngiroq qilish
              uchun 1 oyga 10 ta limit beriladi va kunlik limit 3 ta. Undan
              tashqari qo’ng’rioq qilishingiz uchun siz saytdan ro’yhatdan
              o’tgan bo’lishingiz kerak bo’ladi.
            </p>
          </div>
        </div>
        <div className="slider">
          <img src={left} alt="left" className="slider__left" />
          <img src={slider1} alt="slider1" className="slider__one" />
          <img src={slider2} alt="slider2" className="slider__two" />
          <img src={slider3} alt="slider3" className="slider__three" />
          <img src={right} alt="right" className="slider__right" />
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="about-top">
            <button className="about-button">BOSHQA E’LONLARI</button>
          </div>
          <div className="products">
            <Card title="Bog’ingiz uchun jihozalar" img={qaychi} link="Eski" />
          </div>
          <button className="about-more">Barchasini ko‘rish</button>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="about-top">
            <button className="about-button">O‘XSHASH E’LONLAR</button>
          </div>
          <div className="products">
            <Card title="Bog’ingiz uchun jihozalar" img={qaychi} link="Eski" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutProduct;
