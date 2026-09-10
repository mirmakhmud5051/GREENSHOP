import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Checkout from "./pages/checkout/Checkout";
import Shop from "./pages/shop/Shop";
import Address from "./pages/address/Address";
import Modal from "./components/modal/Modal";
import ThankYouModal from "./components/modal/ThankYouModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  return (
    <div className="container flex flex-col items-center py-[25px]">
      <Header onLoginClick={() => setIsModalOpen(true)} />

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      {isThankYouOpen && (
        <ThankYouModal onClose={() => setIsThankYouOpen(false)} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/address" element={<Address />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={<Checkout onPlaceOrder={() => setIsThankYouOpen(true)} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
