import grow1 from "../../assets/grow1.png"
import grow2 from "../../assets/grow2.png"
import grow3 from "../../assets/grow3.png"
import grow4 from "../../assets/grow4.png"
import grow5   from "../../assets/grow5.png"

const ShopReleted = () => {
  return (
    <div>
      <section className='py-[80px]'>
        <h3 className='mb-[30px] font-bold text-[17px] text-[#46A358]'>Releted Products</h3>
        <div className='flex gap-[26px] mb-[61px]'>
          <div>
          <img src={grow1} alt="" />
          <p>Beach Spider Lily</p>
          <strong className='text-[#46A358]'>$129.00</strong>
          </div>
          <div>
          <img src={grow2} alt="" />
          <p>Blushing Bromeliad</p>
          <strong className='text-[#46A358]'>$139.00</strong>
          </div>
          <div>
          <img src={grow3} alt="" />
          <p>Aluminum Plant</p>
          <strong className='text-[#46A358]'>$179.00</strong>
          </div>
          <div>
          <img src={grow4} alt="" />
          <p>Bird's Nest Fern</p>
          <strong className='text-[#46A358]'>$99.00</strong>
          </div>
          <div>
          <img src={grow5} alt="" />
          <p>Chinese Evergreen</p>
          <strong className='text-[#46A358]'>$39.00</strong>
          </div>
        </div>
        <div className='flex gap-[10px] items-center justify-center'>
          <div className='w-[12px] h-[12px] rounded-[50%] border-2 border-[#46A358]'></div>
           <div className='w-[12px] h-[12px] rounded-[50%] bg-[#46A358]'></div>
           <div className='w-[12px] h-[12px] rounded-[50%] border-2 border-[#46A358]'></div>
        </div>
      </section>
    </div>
  )
}

export default ShopReleted
