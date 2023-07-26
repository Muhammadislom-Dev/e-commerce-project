import React, { useState } from "react";
import qaychi from "../../../../assets/qaychi.png";
import ball from "../../../../assets/ball.png";
import "./Products.css";
import Card from "../../../../components/Card/Card";
import { getProductData } from "../../../../api";
import { useQuery } from "react-query";
import { Box, CircularProgress } from "@mui/material";

function Products() {
  const [popular, setPopular] = useState("YANGILARI");
  const { data, isLoading, isError } = useQuery("productData", getProductData);

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
    <div className="container">
      <div className="product-list">
        <button
          value="YANGILARI"
          onClick={(e) => setPopular(e.target.value)}
          style={{
            color: popular === "YANGILARI" ? "#000" : null,
            borderBottom: popular === "YANGILARI" ? "2px solid #000" : null,
          }}
          className="product-name">
          YANGILARI
        </button>
        <button
          value="OMMABOP"
          onClick={(e) => setPopular(e.target.value)}
          style={{
            color: popular === "OMMABOP" ? "#000" : null,
            borderBottom: popular === "OMMABOP" ? "2px solid #000" : null,
          }}
          className="product-name">
          OMMABOP
        </button>
      </div>
      {popular === "YANGILARI" ? (
        <div className="products">
          {data.content.map((evt, index) => (
            <Card data={evt} key={index} />
          ))}
        </div>
      ) : (
        <div className="products">
          {data.content.map((evt, index) => (
            <Card data={evt} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
