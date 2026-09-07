import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Checkout() {
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
            <hr />
            <div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
