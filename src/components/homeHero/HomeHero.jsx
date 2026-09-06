import home from "../../assets/home.png";

const HomeHero = () => {
  return (
    <div>
      <div className=" home bg-[#F5F5F580] w-[1211px] h-[518px] mt-[12px] flex items-center justify-between ">
        <div className="home">
          <span className='font-medium text-[14px] leading-[16px] tracking-[10%] text-[#3D3D3D]'>Welcome to GreenShop</span>
          <h1>
            Let’s Make a Better <span>Planet</span>
          </h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="home-right">
          <img src={home} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
