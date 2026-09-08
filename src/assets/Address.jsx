import React from "react";
import { createRoot } from "react-dom/client";

const menuItems = [
  ["Account Details", "./npo.png"],
  ["Address", "./Location.png", true],
  ["Orders", "./shop.png"],
  ["Wishlist", "./heart.png"],
  ["Reports", "./Activity.png"],
  ["Downloads", "./Download.png"],
  ["Support", "./danger.png"],
];

function MenuImage({ src, alt }) {
  return (
    <img src={src} alt={alt} className="h-[17px] w-[17px] object-contain" />
  );
}

function TextInput({ label, placeholder = "", optional = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] leading-none text-[#444]">
        {label}
        {optional && <span className="ml-1 text-[#999]">(optional)</span>}
      </span>

      <input
        type="text"
        placeholder={placeholder}
        className="h-8 w-full rounded-[2px] border border-[#e4e4e4] bg-white px-2.5 text-[12px] text-[#555] outline-none placeholder:text-[#aaa] focus:border-[#43a655]"
      />
    </label>
  );
}

function SelectInput({ label, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] leading-none text-[#444]">
        {label}
      </span>

      <select className="h-8 w-full rounded-[2px] border border-[#e4e4e4] bg-white px-2.5 text-[12px] text-[#aaa] outline-none focus:border-[#43a655]">
        <option>{placeholder}</option>
      </select>
    </label>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white px-6 py-11 text-[#333]">
      <div className="mx-auto flex max-w-[960px] gap-5">
        <aside className="w-[248px] shrink-0">
          <div className="px-3.5 pt-3 pb-2">
            <h2 className="mb-3 text-[14px] font-semibold">My Account</h2>

            <div>
              {menuItems.map(([label, image, active]) => (
                <div
                  key={label}
                  className={`relative flex h-[36px] items-center gap-2.5 pl-1.5 text-[12px] ${
                    active ? "font-semibold text-[#3da655]" : "text-[#777]"
                  }`}
                >
                  {active && (
                    <span className="absolute -left-[15px] top-0 h-[36px] w-[2px] bg-[#3da655]" />
                  )}

                  <MenuImage src={image} alt={label} />

                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#ededed] px-3.5 py-3">
            <button className="flex items-center gap-2 text-[12px] font-semibold text-[#3da655]">
              <img
                src="./Logout.png"
                alt="Logout"
                className="h-[17px] w-[17px] object-contain"
              />
              Logout
            </button>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <section>
            <div className="mb-5 flex items-start justify-between">
              <div>
                <h1 className="text-[14px] font-medium">Billing Address</h1>

                <p className="mt-1 text-[11px] text-[#888]">
                  The following addresses will be used on the checkout page by
                  default.
                </p>
              </div>

              <button className="text-[12px] text-[#3da655]">Add</button>
            </div>

            <div className="grid grid-cols-2 gap-x-[22px] gap-y-[22px]">
              <TextInput label="First Name" />

              <TextInput label="Last Name" />

              <SelectInput
                label="Country / Region"
                placeholder="Select a country / region"
              />

              <TextInput label="Town / City" />

              <TextInput
                label="Street Address"
                placeholder="House number and street name"
              />

              <TextInput
                label="Street Address"
                placeholder="Apartment, suite, unit, etc. (optional)"
                optional
              />

              <SelectInput label="State" placeholder="Select a state" />

              <TextInput label="Zip" />

              <TextInput label="Email address" />

              <label className="block">
                <span className="mb-2 block text-[13px] leading-none text-[#444]">
                  Phone Number <span className="text-[#ef3e2d]">*</span>
                </span>

                <div className="flex gap-2">
                  <select className="h-8 w-[62px] shrink-0 rounded-[2px] border border-[#e4e4e4] bg-white px-2 text-[12px] text-[#555] outline-none">
                    <option>+966</option>
                  </select>

                  <input
                    type="text"
                    className="h-8 min-w-0 flex-1 rounded-[2px] border border-[#e4e4e4] px-2.5 text-[12px] outline-none focus:border-[#43a655]"
                  />
                </div>
              </label>
            </div>

            <button className="mt-10 h-8 rounded-[2px] bg-[#43a655] px-5 text-[11px] font-semibold text-white">
              Save Address
            </button>
          </section>

          <section className="mt-12">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[14px] font-medium">Shipping Address</h2>

                <p className="mt-2 text-[11px] text-[#888]">
                  You have not set up this type of address yet.
                </p>
              </div>

              <div className="flex items-center gap-12">
                <label className="flex items-center gap-2 text-[11px] text-[#555]">
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 appearance-none rounded-full border border-[#43a655] checked:bg-[#43a655]"
                  />
                  Same as billing address
                </label>

                <button className="text-[12px] text-[#3da655]">Add</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
