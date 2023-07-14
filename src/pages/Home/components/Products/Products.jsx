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
        <Card
          title="Erkaklar uchun yozgi fudbolka holati yangi..."
          img={tvSet}
          link="Eski"
        />
        <Card
          title="Erkaklar uchun yozgi fudbolka holati yangi..."
          img={car}
          link="O’rtacha"
        />
        <Card
          title="Erkaklar uchun yozgi fudbolka holati yangi..."
          img={tShirt}
          link="Yangi"
        />
        <Card
          title="Erkaklar uchun yozgi fudbolka holati yangi..."
          img={dazmol}
          link="Eski"
        />
        <Card
          title="Bolalar 2 etajli krovatlari. Barcha malumot pasda yozilgan."
          img={bed}
          link="O’rtacha"
        />
        <Card
          title="Shotlandiya mushukchasi Shotlandiya tekis bolasi"
          img={cat}
        />
        <Card title="Bog’ingiz uchun jihozalar" img={qaychi} link="Eski" />
        <Card title="Bolalaringiz uchun koptok" img={ball} link="O’rtacha" />
      </div>
    </>
  );
}

export default Products;
