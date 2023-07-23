import React from "react";
import tvSet from "../../../../assets/tvSet.png";
import car from "../../../../assets/car.png";
import tShirt from "../../../../assets/tShirt.png";
import dazmol from "../../../../assets/dazmol.png";
import bed from "../../../../assets/bed.png";
import cat from "../../../../assets/cat.png";
import qaychi from "../../../../assets/qaychi.png";
import ball from "../../../../assets/ball.png";
import "./Products.css";
import Card from "../../../../components/Card/Card";

function Products() {
  return (
    <>
      <div className="products">
        <Card title="Bog’ingiz uchun jihozalar" img={qaychi} link="Eski" />
        <Card title="Bolalaringiz uchun koptok" img={ball} link="O’rtacha" />
      </div>
    </>
  );
}

export default Products;
