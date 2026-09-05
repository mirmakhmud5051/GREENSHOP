import cactus from "../../assets/cactus.png";
import renovation from "../../assets/renovation.png";
import social from "../../assets/social.png";
import icons from "../../assets/icons.png";
import teapot from "../../assets/teapot.png";
import logo from "../../assets/logo.png";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

function Footer() {
  return (
    <div className=" w-[1200px] h-[650px] flex flex-col  gap-[90px]  ">
      <div className=" w-[1200px] h-[250px] flex items-center justify-between ">
        <div className=" w-[204px] h-[201px]  ">
          <img src={cactus} alt="" />
          <h3 className=" font-bold text-[17px] text-[rgba(61,61,61,1)] ">
            Garden Care
          </h3>
          <p className=" w-[204px] h-[66px] text-sm font-normal text-[rgba(114,114,114,1)] ">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className=" w-[204px] h-[201px]  ">
          <img className=" w-[260px] " src={renovation} alt="" />
          <h3 className=" font-bold text-[17px] text-[rgba(61,61,61,1)] ">
            Garden Care
          </h3>
          <p className=" w-[204px] h-[66px] text-sm font-normal text-[rgba(114,114,114,1)] ">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className=" w-[204px] h-[201px]  ">
          <img src={teapot} alt="" />
          <h3 className=" font-bold text-[17px] text-[rgba(61,61,61,1)] ">
            Plant Renovation
          </h3>
          <p className=" w-[204px] h-[66px] text-sm font-normal text-[rgba(114,114,114,1)] ">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="  flex flex-col gap-[10px] ">
          <h3 className=" text-[rgba(61,61,61,1)] text-[18px] font-bold ">
            Would you like to join newsletters?
          </h3>
          <div className=" flex items-center  bg-[rgba(255,255,255,1)] rounded-2xl w-[354px] h-[40px] ">
            <input
              className=" w-[300px] :placeholder = text-[rgba(172,172,172,1)] "
              type="email"
              placeholder=" Enter your email address...  "
            />{" "}
            <button className=" bg-[rgba(70,163,88,1)] px-[20px] py-[8px] rounded-2xl ">
              Join
            </button>
          </div>
          <p className=" text-[rgba(114,114,114,1)] font-normal text-[13px] w-[354px] ">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to
            yours!{" "}
          </p>
        </div>
      </div>
      <div className=" w-[1200px] h-[88px] flex bg-[rgba(70,163,88,0.1)] items-center  justify-around ">
        <img src={logo} alt="" />
        <div className=" flex items-center gap-[10px] ">
          <CiLocationOn className=" text-[rgba(70,163,88,1)] " />
          <h3 className=" w-[176px] font-normal text-sm  ">
            70 West Buckingham Ave. Farmingdale, NY 11735
          </h3>
        </div>
        <div className=" flex items-center gap-[10px] ">
          <CiMail className=" text-[rgba(70,163,88,1)] " />

          <h3>contact@greenshop.com</h3>
        </div>
        <div className=" flex items-center gap-[10px] ">
          <CiPhone className=" text-[rgba(70,163,88,1)] " />
          <h3>+88 01911 717 490</h3>
        </div>
      </div>
      <div className=" w-[1200px] h-[200px] flex items-center justify-around  ">
        <ul className=" flex flex-col gap-[10px] text-[rgba(61,61,61,1)] font-normal text-sm">
          <li className=" text-[rgba(61,61,61,1)]  text-[18px] font-bold">
            My Account
          </li>
          <li> My Account</li>
          <li> Our stores</li>
          <li>Contact us</li>
          <li>Career</li>
          <li>Specials</li>
        </ul>
        <ul className=" flex flex-col gap-[10px] text-[rgba(61,61,61,1)] font-normal text-sm ">
          <li className=" text-[rgba(61,61,61,1)]  text-[18px] font-bold">
            Help & Guide
          </li>
          <li>Help Center</li>
          <li>How to Buy</li>
          <li>Shipping & Delivery</li>
          <li>Product Policy</li>
          <li>How to Return</li>
        </ul>
        <ul className=" flex flex-col gap-[10px] text-[rgba(61,61,61,1)] font-normal text-sm">
          <li className=" text-[rgba(61,61,61,1)]  text-[18px] font-bold">
            Categories
          </li>
          <li>House Plants</li>
          <li>Potter Plants</li>
          <li>Seeds</li>
          <li>Small Plants</li>
          <li>Accessories</li>
        </ul>
        <ul className=" flex flex-col gap-[14px]  ">
          <li className=" text-[rgba(61,61,61,1)]  text-[18px] font-bold">
            Social Media
          </li>
          <img src={social} alt="" />
          <li className=" text-[rgba(61,61,61,1)]  text-[18px] font-bold">
            We accept
          </li>
          <img src={icons} alt="" />
        </ul>
      </div>
      
    </div>
  );
}

export default Footer;
