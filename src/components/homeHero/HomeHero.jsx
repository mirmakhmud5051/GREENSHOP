// import "../../App.css";
import homee from "../../assets/homee.png";
import home from "../../assets/home.png";
import icon from "../../assets/homeicon.png";
import max from "../../assets/home-max.png";
import cards from "../../assets/home-card.png";
import cards1 from "../../assets/home-card1.png";
import cards2 from "../../assets/home-card2.png";
import cards3 from "../../assets/home-card3.png";
import cards4 from "../../assets/home-card4.png";
import cards5 from "../../assets/home-card5.png";
import cards6 from "../../assets/home-card6.png";
import cards7 from "../../assets/home-card7.png";
import cards8 from "../../assets/home-card8.png";
import homeicon from "../../assets/home-icon.png";
import homeicon1 from "../../assets/home-icon1.png";
import homeicon2 from "../../assets/home-icon2.png";
import right from "../../assets/right.png";
import down from "../../assets/down.png";

const HomeHero = () => {
  return (
    <div className="flex flex-col gap-[40px] ">
      <div
        className="home relative
        bg-[#F5F5F580] w-full min-h-[450px] mt-[12px] flex items-center  "
      >
        <div className="home-left max-w-[650px] flex items-start flex-col px-[40px] py-[1px] gap-[5px] ">
          <span className="font-medium text-[14px] leading-[16px] tracking-[10%] text-[#3D3D3D] mulish">
            Welcome to GreenShop
          </span>
          <h1 className="font-black text-[70px] leading-[70px] text-[#3D3D3D]">
            Let’s Make a Better{" "}
            <span className="font-black text-[70px] leading-[70px] text-[#46A358] ">
              Planet
            </span>
          </h1>
          <p className="font-normal text-[14px] leading-[24px] text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use <br /> our plants to create an unique Urban
            Jungle. Order your favorite plants!
          </p>
          <Link to={"/shop"}>
            <button className="w-[140px] h-[40px] rounded-[6px] mt-[44px] bg-[#46A358] font-bold text-[16px] leading-[20px] text-[#FFFFFF] mulish">
              SHOP NOW
            </button>
          </Link>
        </div>
        <div className="home-right flex items-end ">
          <img src={home} alt="" />
        </div>
        <div className="icons absolute bottom-[15px] left-[50%]">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="all flex  items-startzz ">
        <div className="cards-left -mb-[14px] bg-[#FBFBFB] flex flex-col w-[310px] h-full object-contain py-[14px] ">
          <h1 className="font-bold text-[18px] px-[18px] leading-[16px] text-[#3D3D3D]">
            Categories
          </h1>
          <div className="cards-text flex flex-col  px-[30px] py-[7px] ">
            <div className="card-texts  flex items-center justify-between">
              <h2 className="font-bold text-[#46A358] text-[15px] leading-[40px] ">
                House Plants
              </h2>
              <span className="font-bold text-[15px] leading-[40px] text-[#46A358]">
                (33)
              </span>
            </div>
            <div className="card-texts flex items-center justify-between">
              <h2 className="font-bold text-[#3D3D3D] text-[15px] leading-[40px] ">
                Potter Plants
              </h2>
              <span className="font-bold text-[15px] leading-[40px] text-[#3D3D3D]">
                (12)
              </span>
            </div>
            <div className="card-texts flex items-center justify-between">
              <h2 className="font-bold text-[#3D3D3D] text-[15px] leading-[40px] ">
                Seeds
              </h2>
              <span className="font-bold text-[15px] leading-[40px] text-[#3D3D3D]">
                (65)
              </span>
            </div>
            <div className="card-texts flex items-center justify-between">
              <h2 className="font-bold text-[#3D3D3D] text-[15px] leading-[40px] ">
                Small Plants
              </h2>
              <span className="font-bold text-[15px] leading-[40px] text-[#3D3D3D]">
                (39)
              </span>
            </div>
            <div className="card-texts flex items-center justify-between">
              <h2 className="font-bold text-[#3D3D3D] text-[15px] leading-[40px] ">
                Big Plants
              </h2>
              <span className="font-bold text-[15px] leading-[40px] text-[#3D3D3D]">
                (23)
              </span>
            </div>
            <div className="card-texts flex items-center justify-between">
              <h2 className="font-bold text-[#3D3D3D] text-[15px] leading-[40px] ">
                Succulents
              </h2>
              <span className="font-bold text-[15px] leading-[40px] text-[#3D3D3D]">
                (17)
              </span>
            </div>
            <div className="card-texts flex items-center justify-between">
              <h2 className="font-bold text-[#3D3D3D] text-[15px] leading-[40px] ">
                Trerrariums
              </h2>
              <span className="font-bold text-[15px] leading-[40px] text-[#3D3D3D]">
                (19)
              </span>
            </div>
            <div className="card-texts flex items-center justify-between">
              <h2 className="font-bold text-[#3D3D3D] text-[15px] leading-[40px] ">
                Gardening
              </h2>
              <span className="font-bold text-[15px] leading-[40px] text-[#3D3D3D]">
                (13)
              </span>
            </div>
            <div className="card-texts flex items-center justify-between">
              <h2 className="font-bold text-[#3D3D3D] text-[15px] leading-[40px] ">
                Accessories
              </h2>
              <span className="font-bold text-[15px] leading-[40px] text-[#3D3D3D]">
                (18)
              </span>
            </div>
          </div>
          <div className="w-[210px] flex flex-col gap-[15px] pl-[12px] mt-[36px]">
            <h3 className="font-bold px-[15px] text-[18px] text-[#3D3D3D] leading-[16px]">
              Price Range
            </h3>

            <div className="relative w-full h-[16px] flex items-center ml-[30px] ">
              <div className="w-full h-[4px] bg-[#46A35820] rounded-full"></div>

              <div className="absolute left-[5%] w-[70%] h-[4px] bg-[#46A358]"></div>

              <div className="absolute left-[5%] -translate-x-1/1 w-[16px] h-[16px] bg-[#46A358] rounded-full border-[3px] border-white "></div>

              <div className="absolute left-[75%]  w-[16px] h-[16px] bg-[#46A358] rounded-full border-[3px] border-white "></div>
            </div>

            <p className="text-[15px] text-[#3D3D3D] ml-[30px]">
              <span className="font-bold text-[#46A358]">
                Price: $39 – $1230
              </span>
            </p>
            <button className="w-[90px] h-[35px] bg-[#46A358] ml-[30px] text-white font-bold text-[16px] rounded-[6px]">
              Filter
            </button>
          </div>
          <div className="size flex flex-col py-[47px] ">
            <h1 className=" px-[17px]  font-bold text-[18px] leading-[16px] text-[#3D3D3D]">
              Size
            </h1>
            <div className=" flex flex-col px-[30px] py-[7px] ">
              <div className="flex items-center justify-between">
                <h2 className="font-normal text-[15px] leading-[40px] text-[#3D3D3D]">
                  Small
                </h2>
                <span className="font-normal text-[16px] leading-[40px] text-[#3D3D3D]">
                  (119)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-normal text-[15px] leading-[40px] text-[#3D3D3D]">
                  Medium
                </h2>
                <span className="font-normal text-[16px] leading-[40px] text-[#3D3D3D]">
                  (86)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-normal text-[15px] leading-[40px] text-[#3D3D3D]">
                  Large
                </h2>
                <span className="font-normal text-[16px] leading-[40px] text-[#3D3D3D]">
                  (78)
                </span>
              </div>
            </div>
          </div>
          <div className="w-full mt-auto scale-119">
            <img src={max} alt="" />
          </div>
        </div>
        <div className="cards flex flex-col flex-1 pl-[60px] ">
          <div className="card-text flex items-center justify-between">
            <div className="flex items-center justify-between gap-[40px] ">
              <h1 className="border-b border-b-2 border-[#46A358] font-bold text-[15px] leading-[16px] text-[#46A358]">
                All Plants
              </h1>
              <h1 className="font-normal text-[15px] leading-[16px] text-[#3D3D3D]">
                New Arrivals
              </h1>
              <h1 className="font-normal text-[15px] leading-[16px] text-[#3D3D3D]">
                Sale
              </h1>
            </div>
            <div className="flex items-center justify-between gap-[8px]">
              <span className="font-normal text-[15px] leading-[16px] text-[#3D3D3D]">
                Short by:
              </span>
              <h2 className="font-normal text-[15px] leading-[16px] text-[#3D3D3D]">
                Default sorting
              </h2>
              <img src={down} alt="" />
            </div>
          </div>
          <div className="crds grid grid-cols-3 gap-x-[37px] items-center justify-between">
            <div className="flex items-start flex-col py-[30px]  ">
              <div className="bg-[#FBFBFB] w-[260px] h-[300px]  ">
                <img
                  className="w-full h-full object-contain mix-blend-multiply "
                  src={cards}
                  alt=""
                />
              </div>
              <div className="card-txt flex items-start gap-[6px] flex-col py-[12px] ">
                <h1 className="font-normal text-[16px] leading-[16px] text-[#3D3D3D] ">
                  Barberton Daisy
                </h1>
                <span className="font-bold text-[18px] leading-[16px] text-[#46A358] ">
                  $119.00
                </span>
              </div>
            </div>
            <div className="flex items-start flex-col py-[30px] ">
              <div className=" bg-[#FBFBFB] w-[260px] h-[300px]  ">
                <img
                  className="w-full h-full object-contain mix-blend-multiply "
                  src={cards1}
                  alt=""
                />
                {/* <div className="card-icon flex items-center gap-[26px]  ">
                  <img src={homeicon} alt="" />
                  <img src={homeicon1} alt="" />
                  <img src={homeicon2} alt="" />
                </div> */}
              </div>
              <div className="card-txt flex items-start gap-[6px] flex-col py-[12px] ">
                <h1 className="font-normal text-[16px] leading-[16px] text-[#3D3D3D] ">
                  Angel Wing Begonia
                </h1>
                <span className="font-bold text-[18px] leading-[16px] text-[#46A358] ">
                  $169.00
                </span>
              </div>
            </div>
            <div className="flex items-start flex-col py-[30px]  ">
              <div className="bg-[#FBFBFB] w-[260px] h-[300px] relative  ">
                <button className="w-[80px] h-[29px] bg-[#46A358] top-[15px] absolute font-medium text-[16px] leading-[16px] text-[#FFFFFF]">
                  13% OFF
                </button>
                <img
                  className="w-full h-full  object-contain mix-blend-multiply "
                  src={cards2}
                  alt=""
                />
              </div>
              <div className="card-txt flex items-start gap-[6px] flex-col py-[12px] ">
                <h1 className="font-normal text-[16px] leading-[16px] text-[#3D3D3D] ">
                  African Violet
                </h1>
                <span className="font-bold text-[18px] leading-[16px] text-[#46A358] ">
                  $199.00
                </span>
              </div>
            </div>
            <div className="flex items-start flex-col py-[30px]  ">
              <div className="bg-[#FBFBFB] w-[260px] h-[300px]  ">
                <img
                  className="w-full h-full object-contain mix-blend-multiply "
                  src={cards3}
                  alt=""
                />
              </div>
              <div className="card-txt flex items-start gap-[6px] flex-col py-[12px] ">
                <h1 className="font-normal text-[16px] leading-[16px] text-[#3D3D3D] ">
                  Beach Spider Lily
                </h1>
                <span className="font-bold text-[18px] leading-[16px] text-[#46A358] ">
                  $129.00
                </span>
              </div>
            </div>
            <div className="flex items-start flex-col py-[30px]  ">
              <div className="bg-[#FBFBFB] w-[260px] h-[300px]  ">
                <img
                  className="w-full h-full object-contain mix-blend-multiply "
                  src={cards4}
                  alt=""
                />
              </div>
              <div className="card-txt flex items-start gap-[6px] flex-col py-[12px] ">
                <h1 className="font-normal text-[16px] leading-[16px] text-[#3D3D3D] ">
                  Blushing Bromeliad
                </h1>
                <span className="font-bold text-[18px] leading-[16px] text-[#46A358] ">
                  $139.00
                </span>
              </div>
            </div>
            <div className="flex items-start flex-col py-[30px]  ">
              <div className="bg-[#FBFBFB] w-[260px] h-[300px]  ">
                <img
                  className="w-full h-full object-contain mix-blend-multiply "
                  src={cards5}
                  alt=""
                />
              </div>
              <div className="card-txt flex items-start gap-[6px] flex-col py-[12px] ">
                <h1 className="font-normal text-[16px] leading-[16px] text-[#3D3D3D] ">
                  Aluminum Plant
                </h1>
                <span className="font-bold text-[18px] leading-[16px] text-[#46A358] ">
                  $179.00
                </span>
              </div>
            </div>
            <div className="flex items-start flex-col py-[30px]  ">
              <div className="bg-[#FBFBFB] w-[260px] h-[300px]  ">
                <img
                  className="w-full h-full object-contain mix-blend-multiply "
                  src={cards6}
                  alt=""
                />
              </div>
              <div className="card-txt flex items-start gap-[6px] flex-col py-[12px] ">
                <h1 className="font-normal text-[16px] leading-[16px] text-[#3D3D3D] ">
                  Bird's Nest Fern
                </h1>
                <span className="font-bold text-[18px] leading-[16px] text-[#46A358] ">
                  $99.00
                </span>
              </div>
            </div>
            <div className="flex items-start flex-col py-[30px]  ">
              <div className="bg-[#FBFBFB] w-[260px] h-[300px]  ">
                <img
                  className="w-full h-full object-contain mix-blend-multiply "
                  src={cards7}
                  alt=""
                />
              </div>
              <div className="card-txt flex items-start gap-[6px] flex-col py-[12px] ">
                <h1 className="font-normal text-[16px] leading-[16px] text-[#3D3D3D] ">
                  Broadleaf Lady Palm
                </h1>
                <span className="font-bold text-[18px] leading-[16px] text-[#46A358] ">
                  $59.00
                </span>
              </div>
            </div>
            <div className="flex items-start flex-col py-[30px]  ">
              <div className="bg-[#FBFBFB] w-[260px] h-[300px]  ">
                <img
                  className="w-full h-full object-contain mix-blend-multiply "
                  src={cards8}
                  alt=""
                />
              </div>
              <div className="card-txt flex items-start gap-[6px] flex-col py-[12px]  ">
                <h1 className="font-normal text-[16px] leading-[16px] text-[#3D3D3D] ">
                  Chinese Evergreen
                </h1>
                <span className="font-bold text-[18px] leading-[16px] text-[#46A358] ">
                  $39.00
                </span>
              </div>
            </div>
          </div>
          <div className="div flex items-center gap-[10px] justify-end py-[90px]">
            <span className="w-[36px] h-[36px] rounded-[4px] bg-[#46A358] font-bold text-[18px] leading-[16px] text-[#FFFFFF] flex items-center justify-center ">
              1
            </span>
            <span className="w-[35px] h-[35px] rounded-[8px] border-1 border-[#E5E5E5] font-light text-[18px] leading-[16px] text-[#3D3D3D] flex items-center justify-center">
              2
            </span>
            <span className="w-[35px] h-[35px] rounded-[8px] border-1 border-[#E5E5E5] font-light text-[18px] leading-[16px] text-[#3D3D3D] flex items-center justify-center">
              3
            </span>
            <span className="w-[35px] h-[35px] rounded-[8px] border-1 border-[#E5E5E5] font-light text-[18px] leading-[16px] text-[#3D3D3D] flex items-center justify-center">
              4
            </span>
            <img
              className="w-[35px] h-[35px] rounded-[8px] border-1 border-[#E5E5E5] font-light text-[18px] leading-[16px] text-[#3D3D3D] flex items-center justify-center"
              src={right}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
