import { CiLogin, CiSearch, CiShoppingCart } from "react-icons/ci";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" w-[1200px] h-[53px] flex items-center justify-between ">
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul className=" flex items-center gap-[50px] ">
          <Link
            className=" font-bold text-[16px]  text-[rgba(61,61,61,1)] border-b border-b-2 border-[rgba(70,163,88,1)]"
            to="/home"
          >
            Home
          </Link>
          <Link className=" font-normal text-[rgba(61,61,61,1)] text-[16px] " >
            Shop
          </Link>
          <Link className=" font-normal text-[rgba(61,61,61,1)] text-[16px] " >
            Plant Care
          </Link>
          <Link className=" font-normal text-[rgba(61,61,61,1)] text-[16px] ">
            Blogs
          </Link>
        </ul>
      </nav>
      <div className=" flex items-center gap-[20px] ">
        <CiSearch className=" w-[24px] h-[24px] text-[rgba(61,61,61,1)] " />
        <CiShoppingCart className=" w-[24px] h-[24px] text-[rgba(61,61,61,1)] " />
        <button className=" w-[100px] h-[35px] bg-[rgba(70,163,88,1)] flex items-center justify-center rounded-[6px] text-white  gap-[5px] outline-0  ">
          <CiLogin /> Login
        </button>
      </div>
    </div>
  );
}

export default Header;
