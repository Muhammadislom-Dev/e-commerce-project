import React from "react";
import Like from "../../components/Like/Like";
import Products from "../Home/components/Products/Products";
import Card from "../../components/Card/Card";
import qaychi from "../../assets/qaychi.png";
import "./LikePage.css";

function LikePage() {
  return (
    <div>
      <Like />
      <div className="like">
        <div className="container">
          <div className="product-list">
            <h2 className="product-name">TANLANGANLAR</h2>
          </div>
          <div className="products">
            <Card title="Bog’ingiz uchun jihozalar" img={qaychi} link="Eski" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikePage;
