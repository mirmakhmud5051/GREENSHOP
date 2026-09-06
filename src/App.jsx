import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className=' container flex flex-col  items-center py-[25px]'>
      <Header/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
