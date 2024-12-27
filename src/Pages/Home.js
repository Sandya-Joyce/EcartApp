
import React from "react";
import Navbar from "../Components/Navbar";
import ProductList from "../Components/ProductList";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, marginTop: "64px" }}>
        <ProductList/>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
