import nimadur from "../../assets/nimadur.png";
import payme from "../../assets/image 17.png";

function Checkout({ onPlaceOrder }) {
  return (
    <div>
      <div className="flex justify-between pr-[1020px] my-[36px] ">
        <h1 className="flex left-[10px]">
          <b>Home</b> / Shop / Checkout
        </h1>
      </div>
      <div className="mb-[210px] flex gap-[70px]">
        <div>
          <b>Billing Address</b>
          <div className="flex gap-[25px]">
            <div className="mt-[21px]">
              <label htmlFor="">
                First Name <span className="text-[#F03800]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-[350px] border border-[#EAEAEA] rounded-[3px] h-[40px] mt-[10px] mb-[30px] indent-[13px] "
              />
              <br />
              <label htmlFor="">
                Country / Region <span className="text-[#F03800]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-[350px] border border-[#EAEAEA] rounded-[3px] h-[40px] mt-[10px] mb-[30px] indent-[13px] "
                placeholder="Select a country / region"
              />
              <br />
              <label htmlFor="">
                Street Address <span className="text-[#F03800]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-[350px] border border-[#EAEAEA] rounded-[3px] h-[40px] mt-[10px] mb-[30px] indent-[13px] "
                placeholder="House number and street name"
              />
              <br />
              <label htmlFor="">
                State <span className="text-[#F03800]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-[350px] border border-[#EAEAEA] rounded-[3px] h-[40px] mt-[10px] mb-[30px] indent-[13px] "
                placeholder="Select a state"
              />
              <br />
              <div>
                {" "}
                <label htmlFor="">
                  Email address <span className="text-[#F03800]">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className="w-[350px] border border-[#EAEAEA] rounded-[3px] h-[40px] mt-[10px] mb-[30px] indent-[13px] "
                />
              </div>
              <div className="flex items-center gap-[7px] mb-[55px]">
                <input
                  type="radio"
                  className=" border border-[#EAEAEA] w-[15px] h-[15px]"
                />
                <h2>Ship to a different address?</h2>
              </div>
              <label htmlFor="">Order notes (optional)</label>
              <br />
              <input
                type="text"
                className="w-[350px] h-[152px] mt-[10px] border border-[#EAEAEA] rounded-[3px]"
              />
            </div>
            <div className="mt-[21px]">
              <label htmlFor="">
                Last Name <span className="text-[#F03800]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-[350px] border border-[#EAEAEA] rounded-[3px] h-[40px] mt-[10px] mb-[30px] indent-[13px] "
              />
              <br />
              <label htmlFor="">
                Town / City <span className="text-[#F03800]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-[350px] border border-[#EAEAEA] rounded-[3px] h-[40px] mt-[10px] mb-[30px] indent-[13px] "
              />
              <br />
              <label htmlFor=""></label>
              <br />
              <input
                type="text"
                placeholder="Appartment, suite, unit, etc. (optional)"
                className="w-[350px] border border-[#EAEAEA] rounded-[3px] h-[40px] mt-[10px] mb-[30px] indent-[13px] "
              />
              <br />

              <label htmlFor="">
                Zip <span className="text-[#F03800]">*</span>
              </label>
              <br />
              <input
                type="text"
                className="w-[350px] border border-[#EAEAEA] rounded-[3px] h-[40px] mt-[10px] mb-[30px] indent-[13px] "
              />
              <br />
              <label htmlFor="">
                Phone Number <span className="text-[#F03800]">*</span>
              </label>
              <br />
              <input
                type="text"
                placeholder="+966"
                className="w-[78px] border border-[#EAEAEA] rounded-[3px] h-[40px] mt-[10px] mb-[30px] indent-[13px] "
              />
            </div>
          </div>
        </div>
        <div>
          <b>Your Order</b>
          <div className="mt-[21px]">
            <div className="flex items-center gap-[258px] mb-[11px]">
              <p>Products</p>
              <p>Subtotal</p>
            </div>
            <hr className="text-[#46A35880]" />
            <div className="w-[405px] h-[70px] bg-[#FBFBFB] mt-[11px] flex items-center mb-[10px]">
              <img className="w-[70px] h-[70px]" src={nimadur} alt="" />
              <div className="mr-[40px]">
                <h3 className="font-medium text-[16px] text-[#3D3D3D]">
                  Barberton Daisy
                </h3>
                <p className="font-normal text-[14px] text-[#727272]">
                  SKU: 1995751877966
                </p>
              </div>
              <p className="font-normal text-[14px] text-[#727272] mr-[40px]">
                (x 2)
              </p>
              <h3 className="font-bold text-[18px] text-[#46A358]">$238.00</h3>
            </div>
            <div className="w-[405px] h-[70px] bg-[#FBFBFB] mt-[11px] flex items-center mb-[10px]">
              <img className="w-[70px] h-[70px]" src={nimadur} alt="" />
              <div className="mr-[40px]">
                <h3 className="font-medium text-[16px] text-[#3D3D3D]">
                  Barberton Daisy
                </h3>
                <p className="font-normal text-[14px] text-[#727272]">
                  SKU: 1995751877966
                </p>
              </div>
              <p className="font-normal text-[14px] text-[#727272] mr-[40px]">
                (x 2)
              </p>
              <h3 className="font-bold text-[18px] text-[#46A358]">$238.00</h3>
            </div>
            <div className="w-[405px] h-[70px] bg-[#FBFBFB] mt-[11px] flex items-center mb-[17px]">
              <img className="w-[70px] h-[70px]" src={nimadur} alt="" />
              <div className="mr-[40px]">
                <h3 className="font-medium text-[16px] text-[#3D3D3D]">
                  Barberton Daisy
                </h3>
                <p className="font-normal text-[14px] text-[#727272]">
                  SKU: 1995751877966
                </p>
              </div>
              <p className="font-normal text-[14px] text-[#727272] mr-[40px]">
                (x 2)
              </p>
              <h3 className="font-bold text-[18px] text-[#46A358]">$238.00</h3>
            </div>
            <div className="text-end mb-[20px]">
              <a className="font-normal text-[16px]">
                Have a coupon code?{" "}
                <span className="text-[#46A358]">Click here</span>
              </a>
            </div>
            <div className="flex items-center justify-between mb-[10px]">
              <h3 className="font-normal text-[16px] text-[#3D3D3D]">
                Subtotal
              </h3>
              <b className="font-bold text-[18px] text-[#3D3D3D]">$2,683.00</b>
            </div>
            <div className="flex items-center justify-between mb-[10px]">
              <h3 className="font-normal text-[16px] text-[#3D3D3D]">
                Coupon Discount
              </h3>
              <b className="font-bold text-[18px] text-[#3D3D3D]">(-) 00.00</b>
            </div>
            <div className="flex items-center justify-between mb-[10px]">
              <h3 className="font-normal text-[16px] text-[#3D3D3D]">
                Shiping
              </h3>
              <b className="font-bold text-[18px] text-[#3D3D3D]">$16.00</b>
            </div>
            <div className="text-end mb-[17px]">
              <a className="font-normal text-[14px] text-[#46A358]">
                View shipping charge
              </a>
            </div>
            <hr className="text-[#46A35880] mb-[16px]" />
            <div className="flex items-center justify-between mb-[40px]">
              <h3 className="font-bold text-[18px] text-[#3D3D3D]">Shiping</h3>
              <b className="font-bold text-[18px] text-[#46A358]">$2,699.00</b>
            </div>
            <h2 className="font-bold text-[19px] text-[#3D3D3D] mb-[19px]">
              Payment Method
            </h2>
            <div className="flex items-center gap-[10px] w-full h-[45px] border border-[#EAEAEA] p-[0_11px] rounded-[3px] mb-[15px]">
              <input type="radio" />
              <img src={payme} alt="" />
            </div>
            <div className="flex items-center gap-[10px] w-full h-[45px] border border-[#EAEAEA] p-[0_11px] rounded-[3px] mb-[15px]">
              <input type="radio" />
              <h3 className="font-normal text-[17px] text-[#3D3D3D]">
                Dorect bank transfer
              </h3>
            </div>
            <div className="flex items-center gap-[10px] w-full h-[45px] border border-[#EAEAEA] p-[0_11px] rounded-[3px] mb-[50px]">
              <input type="radio" />
              <h3 className="font-normal text-[17px] text-[#3D3D3D]">
                Cash on delivery
              </h3>
            </div>
            <button
              onClick={onPlaceOrder}
              className="p-[12px_160px] bg-[#46A358] rounded-[3px] text-[#FFFFFF] font-bold text-[15px]"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
