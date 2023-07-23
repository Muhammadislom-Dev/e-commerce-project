import React from "react";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import Products from "./components/Products/Products";

function Home() {
  return (
    <>
      <Header />
      <Products />
      <Blog />
    </>
  );
}

export default Home;
