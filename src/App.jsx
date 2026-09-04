import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className=' container flex flex-col  items-center py-[25px]'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
