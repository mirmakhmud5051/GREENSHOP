import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Checkout from "./pages/checkout/Checkout";
import Shop from "./pages/shop/Shop";
import Address from "./pages/address/Address"

function App() {
  return (
    <div className=" container flex flex-col  items-center py-[25px]">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/address' element={<Address/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
