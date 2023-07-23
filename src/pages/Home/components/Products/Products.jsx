import React, { useState } from "react";
import qaychi from "../../../../assets/qaychi.png";
import ball from "../../../../assets/ball.png";
import "./Products.css";
import Card from "../../../../components/Card/Card";

function Products() {
  const [popular, setPopular] = useState("YANGILARI");
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
          <Card title="Bog’ingiz uchun jihozalar" img={qaychi} link="Eski" />
        </div>
      ) : (
        <div className="products">
          <Card title="Bog’ingiz uchun jihozalar" img={qaychi} link="Eski" />
          <Card title="Bolalaringiz uchun koptok" img={ball} link="O’rtacha" />
        </div>
      )}
    </div>
  );
}

export default Products;
