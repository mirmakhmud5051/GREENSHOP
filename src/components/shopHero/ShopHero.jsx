import { Link } from "react-router-dom";
import shopGrow from "../../assets/shopGrow.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaRegHeart,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";

const ShopHero = () => {
  const [active, setActive] = useState("");
  const [count, setCount] = useState(1);
  return (
    <div className="w-full max-w-[1540px] m-auto">
      <section className="flex gap-[30px] items-center pt-[36px]">
        <div>
          <p className="mb-[10px]">
            <strong>Home</strong> / Shop
          </p>
          <img src={shopGrow} alt="" />
        </div>
        <div>
          <h1 className="font-bold text-[28px] mb-[10px]">Barberton Daisy</h1>
          <div className="flex mb-[10px] items-center justify-between">
            <p className="font-bold text-[22px] text-[#46A358]">$119.00</p>
            <p>
              ⭐⭐⭐⭐⭐{" "}
              <span className="text-[#3D3D3D]">19 Customer Review</span>
            </p>
          </div>
          <h4 className="font-medium text-[15px] mb-[10px]">
            Short Description:
          </h4>
          <p className="font-normal text-sm w-[573px] text-[#727272] mb-[10px]">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the
            ground.{" "}
          </p>
          <h4 className="font-medium text-[15px] mb-[10px]">Size</h4>
          <div className="flex gap-[10px] mb-[23px]">
            {["S", "M", "L", "XL"].map((item) => (
              <div
                key={item}
                onClick={() => setActive(item)}
                className={`w-[28px] h-[28px] rounded-[50%] border-2 flex items-center justify-center cursor-pointer
        ${
          active === item
            ? "border-[#46A358] text-[#46A358]"
            : "border-[#727272] text-[#727272]"
        }`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[23px] mb-[20px]">
            <button
              onClick={() => setCount(count - 1)}
              className="w-[33px] h-[38px] rounded-[29px] bg-[#46A358CC] text-white"
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="w-[33px] h-[38px] rounded-[29px] bg-[#46A358CC] text-white"
            >
              +
            </button>
            <div className="flex gap-[10px]">
              <Link to={"/cart"}>
                <button className="w-[130px] h-[40px] bg-[#46A358] text-[#FFFFFF] rounded-[6px]">
                  Buy Now
                </button>
              </Link>
              <Link>
                <button className="w-[130px] h-[40px] border-2 border-[#46A358] text-[#46A358] rounded-[6px]">
                  Add to cart
                </button>
              </Link>
              <div className="w-[40px] h-[40px] rounded-[6px] border-2 border-[#46A358] flex items-center justify-center text-[#46A358]">
                <FaRegHeart />
              </div>
            </div>
          </div>
          <p className="mb-[5px]">
            <span className="text-[gray]">SKU:</span> 1995751877966
          </p>
          <p className="mb-[5px]">
            <span className="text-[gray]">Categories:</span> Potter Plants
          </p>
          <p className="mb-[5px]">
            <span className="text-[gray]">Tags:</span> Home, Garden, Plants
          </p>
          <p className="flex items-center gap-[15px]">
            Share this products: <FaFacebookF /> <FaTwitter /> <FaLinkedinIn />{" "}
            <FaRegEnvelope />
          </p>
        </div>
      </section>
    </div>
  );
};

export default ShopHero;
