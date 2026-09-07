import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
<<<<<<< HEAD
=======
import HomeHero from "./components/homeHero/HomeHero";
import Checkout from './pages/checkout/Checkout';
>>>>>>> fa5aed4125ef59d3dd25aec9103db1a7f2da7afa

function App() {
  return (
    <div className=" container flex flex-col  items-center py-[25px]">
      <Header />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Footer/> */}
=======
      {/* <Home/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer />
>>>>>>> fa5aed4125ef59d3dd25aec9103db1a7f2da7afa
    </div>
  );
}

export default App;
