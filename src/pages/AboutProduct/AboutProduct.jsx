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
import { useParams } from "react-router-dom";
import {
  getByIdCategoryData,
  getByIdProductData,
  getProductData,
} from "../../api";
import { useQuery } from "react-query";
import { Box, CircularProgress } from "@mui/material";

function AboutProduct() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(["product", id], () =>
    getByIdProductData(id)
  );
  const category = data?.category?.id;
  const { data: product } = useQuery("productData", getProductData);
  const { data: categoryData } = useQuery(["category", category], () =>
    getByIdCategoryData(category)
  );

  function formatSecondsToDateString(seconds) {
    const date = new Date(seconds * 1000);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  }

  const seconds = data?.user?.lastOnline / 1000; // 1690350791.702  uploadedAt
  const formattedDate = formatSecondsToDateString(seconds);

  const secondDate = data?.uploadedAt / 1000; // 1690350791.702  uploadedAt
  const formatUpdateDate = formatSecondsToDateString(secondDate);

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

  console.log(category);

  return (
    <>
      <div className="container">
        <div className="blok">
          <div className="blok__left">
            <img src={duvoyka} alt="duvoyka" className="blok__left_img" />
          </div>
          <div className="blok__right">
            <h1 className="blok__right_title">{data.name}</h1>
            <p className="blok__right_subTitle">{data.description}</p>

            <div className="blok__right_icons">
              {/* <a href="#" className="icons__link">
                O’rtacha
              </a> */}
              {data?.quality === "NEW" ? (
                <span className="icons__link card__new">Yangi</span>
              ) : data?.quality === "TOP" ? (
                <span className="icons__link card__medium">O'rtacha</span>
              ) : data?.quality === "AVERAGE" ? (
                <span className="icons__link">Eski</span>
              ) : (
                ""
              )}
              <div className="icons__oblast">
                <img
                  src={location}
                  alt="location"
                  className="icons__oblast_location"
                />
                <p className="icons__oblast_subTitle">
                  {data.region.name}, {data.district.name} tumani
                </p>
              </div>
              <div className="icons__oblast">
                <img
                  src={clock}
                  alt="clock"
                  className="icons__oblast_location"
                />
                <p className="icons__oblast_subTitle">{formatUpdateDate}</p>
              </div>
              <div className="icons__oblast">
                <img src={eye} alt="eye" className="icons__oblast_location" />
                <p className="icons__oblast_subTitle">{data.see} +</p>
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
                  <p className="orderer_subTitle">
                    So’ngi faolligi {formattedDate}
                  </p>
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
            {product?.content?.map((evt, index) => (
              <Card data={evt} key={index} />
            ))}
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
            {categoryData?.content?.map((evt, index) => (
              <Card data={evt} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutProduct;
