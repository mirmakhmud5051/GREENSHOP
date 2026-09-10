import { FaRegTrashCan } from "react-icons/fa6";
import img from "../../assets/image 1.png";
import img2 from "../../assets/image 2.png";
import img3 from "../../assets/image.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function CartHero() {
  const [count, setCount] = useState(1);
  const [second, setSecond] = useState(1);
  const [third, setThird] = useState(1);
  return (
    <div>
      <section className="w-[1200px] h-[448px] mt-[36px] mb-[87px]">
        <p className="font-normal mb-[50px] text-[15px] text-[#3D3D3D]">
          <span className="font-bold">Home</span> / Shop / Shopping Cart
        </p>
        <div className="flex gap-[86px]">
          <div className="w-[782px] h-auto">
            <div className="flex items-center justify-between border-b border-[#46A35880] mb-[11px] pb-[11px]">
              <h2 className="font-bold text-[16px] text-[#3D3D3D] mr-[165px]">
                Products
              </h2>
              <h2 className="font-bold text-[16px] text-[#3D3D3D]">Price</h2>
              <h2 className="font-bold text-[16px] text-[#3D3D3D]">Quantity</h2>
              <h2 className="font-bold text-[16px] text-[#3D3D3D] mr-[90px]">
                Total
              </h2>
            </div>
            <div className="w-[782px] h-[70px] bg-[#FBFBFB] flex items-center mb-[10px]">
              <img className="w-[85px] h-[70px]" src={img2} alt="" />
              <div className="mr-[138px]">
                <h2 className="font-medium text-[15px] text-[#3D3D3D] mb-[6px]">
                  Barberton Daisy
                </h2>
                <p className="font-normal text-[11px] text-[#727272]">
                  SKU: 1995751877966
                </p>
              </div>
              <p className="mr-[92px]">$119.00</p>
              <div className="mr-[82px] flex items-center gap-[17px]">
                <button
                  className="w-[21px] h-[25px] bg-[#46A358CC] rounded-[29px] text-[#fff]"
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
                <button className="font-normal text-[17px] text-[#3D3D3D]">
                  {count}
                </button>
                <button
                  className="w-[21px] h-[25px] bg-[#46A358CC] rounded-[29px] text-[#fff]"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              <b className="mr-[50px]">$238.00</b>
              <FaRegTrashCan className="text-[#727272] mr-[10px]" />
            </div>
            <div className="w-[782px] h-[70px] bg-[#FBFBFB] flex items-center mb-[10px]">
              <img className="w-[85px] h-[70px]" src={img} alt="" />
              <div className="mr-[138px]">
                <h2 className="font-medium text-[15px] text-[#3D3D3D] mb-[6px]">
                  Barberton Daisy
                </h2>
                <p className="font-normal text-[11px] text-[#727272]">
                  SKU: 1995751877966
                </p>
              </div>
              <p className="mr-[92px]">$119.00</p>
              <div className="mr-[82px] flex items-center gap-[17px]">
                <button
                  className="w-[21px] h-[25px] bg-[#46A358CC] rounded-[29px] text-[#fff]"
                  onClick={() => setSecond(second - 1)}
                >
                  -
                </button>
                <button className="font-normal text-[17px] text-[#3D3D3D]">
                  {second}
                </button>
                <button
                  className="w-[21px] h-[25px] bg-[#46A358CC] rounded-[29px] text-[#fff]"
                  onClick={() => setSecond(second + 1)}
                >
                  +
                </button>
              </div>
              <b className="mr-[50px]">$238.00</b>
              <FaRegTrashCan className="text-[#727272] mr-[10px]" />
            </div>
            <div className="w-[782px] h-[70px] bg-[#FBFBFB] flex items-center mb-[10px]">
              <img className="w-[85px] h-[70px]" src={img3} alt="" />
              <div className="mr-[138px]">
                <h2 className="font-medium text-[15px] text-[#3D3D3D] mb-[6px]">
                  Barberton Daisy
                </h2>
                <p className="font-normal text-[11px] text-[#727272]">
                  SKU: 1995751877966
                </p>
              </div>
              <p className="mr-[92px]">$119.00</p>
              <div className="mr-[82px] flex items-center gap-[17px]">
                <button
                  className="w-[21px] h-[25px] bg-[#46A358CC] rounded-[29px] text-[#fff]"
                  onClick={() => setThird(third - 1)}
                >
                  -
                </button>
                <button className="font-normal text-[17px] text-[#3D3D3D]">
                  {third}
                </button>
                <button
                  className="w-[21px] h-[25px] bg-[#46A358CC] rounded-[29px] text-[#fff]"
                  onClick={() => setThird(third + 1)}
                >
                  +
                </button>
              </div>
              <b className="mr-[50px]">$238.00</b>
              <FaRegTrashCan className="text-[#727272] mr-[10px]" />
            </div>
          </div>
          <div className="h-auto w-[332px]">
            <h2 className="font-bold text-[18px] text-[#3D3D3D] mb-[8px]">
              Cart Totals
            </h2>
            <div className="w-full h-[1px] bg-[#46A35880] mb-[11px]"></div>
            <h3 className="font-normal mb-[8px] text-[14px] text-[#3D3D3D]">
              Coupon Apply
            </h3>
            <div className="w-full border border-[#46A358] rounded-[3px] h-[40px] flex items-center p-[5px] mb-[30px]">
              <input
                className="w-[230px] outline-0"
                type="number"
                placeholder="Enter coupon code here..."
              />
              <button className="p-[8px_35px] ml-[20px] rounded-[3px] text-[15px] text-[#FFFFFF] font-bold bg-[#46A358]">
                Apply
              </button>
            </div>
            <div className="flex items-center justify-between mb-[15px]">
              <p className="font-normal text-[15px] text-[#3D3D3D]">Subtotal</p>
              <span className="font-bold text-[18px] text-[#3D3D3D]">
                $2,683.00
              </span>
            </div>
            <div className="flex items-center justify-between mb-[15px]">
              <p className="font-normal text-[15px] text-[#3D3D3D]">
                Coupon Discount
              </p>
              <span className="font-bold text-[18px] text-[#3D3D3D]">
                (-) 00.00
              </span>
            </div>
            <div className="flex items-center justify-between mb-[8px]">
              <p className="font-normal text-[15px] text-[#3D3D3D]">Shiping</p>
              <span className="font-bold text-[18px] text-[#3D3D3D]">
                $16.00
              </span>
            </div>
            <div className="text-end font-normal text-[12px] text-[#46A358] mb-[26px]">
              View shipping charge
            </div>
            <div className="flex items-center justify-between mb-[29px]">
              <p className="font-bold text-[18px] text-[#3D3D3D]">Total</p>
              <span className="font-bold text-[18px] text-[#46A358]">
                $2,699.00
              </span>
            </div>
            <Link to={"/checkout"}>
              <button className="p-[12px_91px] whitespace-nowrap bg-[#46A358] rounded-[3px] text-[#FFFFFF] mb-[14px]">
                Proceed To Checkout
              </button>
            </Link>
            <div
              href="/"
              className="text-center font-normal text-[15px] text-[#46A358]"
            >
              Continue Shopping
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartHero;
