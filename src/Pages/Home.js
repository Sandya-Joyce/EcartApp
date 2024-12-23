
import React from "react";
import Navbar from "../Components/Navbar";
import ProductsCard from "../Components/ProductCard";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      {/* Adjust the top margin to ensure content is not hidden */}
      <main style={{ flex: 1, marginTop: "64px" }}>
        <ProductsCard />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
