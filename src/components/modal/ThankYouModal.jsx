import React from "react";
import plant1 from "../../assets/plant1.png";
import plant2 from "../../assets/plant2.png";
import plant3 from "../../assets/plant3.png";
import thankEnvelope from "../../assets/thank_envelope.png";

function ThankYouModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999] p-4">
      <div className="bg-[#FFFFFF] p-[28px_30px_20px] rounded-[6px] text-center shadow-xl relative w-[550px] max-w-[95%] border-b-[10px] border-[#46A358]">
        <button
          onClick={onClose}
          className="absolute top-[15px] right-[20px] bg-none border-none text-[22px] cursor-pointer text-[#46A358] font-light"
        >
          ✕
        </button>

        <div className="flex flex-col items-center mb-[18px]">
          <div className="w-[74px] h-[74px] flex items-center justify-center mb-[8px]">
            <img
              src={thankEnvelope}
              alt="Thank you"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-[#3D3D3D] text-[16px] font-medium mt-[5px]">
            Your order has been received
          </h2>
        </div>

        <div className="grid grid-cols-4 border-b border-t border-[#EAEAEA] py-[12px] mb-[18px] text-left gap-x-3">
          <div>
            <p className="text-[12px] text-[#727272]">Order Number</p>
            <p className="text-[14px] font-bold text-[#3D3D3D] mt-[4px]">
              19586687
            </p>
          </div>
          <div>
            <p className="text-[12px] text-[#727272]">Date</p>
            <p className="text-[14px] font-bold text-[#3D3D3D] mt-[4px]">
              15 Sep, 2021
            </p>
          </div>
          <div>
            <p className="text-[12px] text-[#727272]">Total</p>
            <p className="text-[14px] font-bold text-[#3D3D3D] mt-[4px]">
              $2,699.00
            </p>
          </div>
          <div>
            <p className="text-[12px] text-[#727272]">Payment Method</p>
            <p className="text-[14px] font-bold text-[#3D3D3D] mt-[4px]">
              Cash on delivery
            </p>
          </div>
        </div>

        <h3 className="text-left font-bold text-[15px] text-[#3D3D3D] mb-[12px]">
          Order Details
        </h3>

        <div className="flex flex-col gap-[12px] mb-[16px] pr-[4px] overflow-hidden">
          <div className="flex items-center justify-between text-left text-[14px]">
            <div className="flex items-center gap-[15px]">
              <div className="w-[70px] h-[70px] bg-transparent rounded-[4px] flex items-center justify-center overflow-hidden">
                <img
                  src={plant1}
                  alt="Plant"
                  className="w-[60px] h-[60px] object-contain"
                />
              </div>
              <div>
                <p className="font-medium text-[#3D3D3D]">Barberton Daisy</p>
                <p className="text-[12px] text-[#727272]">SKU: 1995751877966</p>
              </div>
            </div>
            <p className="text-[#727272]">(x 2)</p>
            <p className="font-bold text-[#3D3D3D]">$238.00</p>
          </div>

          <div className="flex items-center justify-between text-left text-[14px]">
            <div className="flex items-center gap-[15px]">
              <div className="w-[70px] h-[70px] bg-transparent rounded-[4px] flex items-center justify-center overflow-hidden">
                <img
                  src={plant2}
                  alt="Plant"
                  className="w-[60px] h-[60px] object-contain"
                />
              </div>
              <div>
                <p className="font-medium text-[#3D3D3D]">Blushing Bromeliad</p>
                <p className="text-[12px] text-[#727272]">SKU: 1995751875065</p>
              </div>
            </div>
            <p className="text-[#727272]">(x 6)</p>
            <p className="font-bold text-[#3D3D3D]">$834.00</p>
          </div>

          <div className="flex items-center justify-between text-left text-[14px]">
            <div className="flex items-center gap-[15px]">
              <div className="w-[70px] h-[70px] bg-transparent rounded-[4px] flex items-center justify-center overflow-hidden">
                <img
                  src={plant3}
                  alt="Plant"
                  className="w-[60px] h-[60px] object-contain"
                />
              </div>
              <div>
                <p className="font-medium text-[#3D3D3D]">Aluminum Plant</p>
                <p className="text-[12px] text-[#727272]">SKU: 1995751875080</p>
              </div>
            </div>
            <p className="text-[#727272]">(x 9)</p>
            <p className="font-bold text-[#3D3D3D]">$1,611.00</p>
          </div>
        </div>

        <div className="border-t border-[#EAEAEA] pt-[12px] flex flex-col gap-[8px] text-[14px] mb-[18px]">
          <div className="flex justify-between text-[#3D3D3D]">
            <span className="text-[#727272]">Shipping</span>
            <span className="font-bold text-[#3D3D3D]">$16.00</span>
          </div>
          <div className="flex justify-between text-[16px] text-[#3D3D3D] font-bold pt-[5px]">
            <span>Total</span>
            <span className="text-[#46A358]">$2,699.00</span>
          </div>
        </div>

        <p className="text-[13px] text-[#727272] mb-[18px] leading-[1.5]">
          Your order is currently being processed. You will receive an order
          confirmation email shortly with the expected delivery date for your
          items.
        </p>

        <button
          onClick={onClose}
          className="w-[160px] h-[40px] bg-[#46A358] text-[#FFFFFF] font-medium text-[14px] rounded-[5px] ] transition-all outline-none mx-auto block"
        >
          Track your order
        </button>
      </div>
    </div>
  );
}

export default ThankYouModal;
