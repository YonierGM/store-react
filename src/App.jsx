import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/cart/CartContext";

import { Toaster } from "react-hot-toast";

import "./App.css";
import { ProductList } from "./pages/ProductList/ProductList";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <section className="layout">
        <CartProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<ProductList />}></Route>
              <Route path="/products" element={<ProductList />}></Route>
              <Route path="/product/:id" element={<ProductDetail />}></Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </section>
    </>
  );
}

export default App;
