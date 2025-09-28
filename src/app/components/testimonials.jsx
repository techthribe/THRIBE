import Image
 from "next/image";
const Testimaonial = () => {
    return(
        <section className="pt-[40px] md:pt-[120px] pb-[40px] md:pb-[74px]">
     <div className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0">
      <h1 className="text-[#087C72] text-[16px] leading-[150%] tracking-[16%]">TESTIMONIALS</h1>
      <h2 className="font-clash text-[26px] md:text-[48px] font-[600] leading-[120%] tracking-[1%] flex gap-x-[12px]">
        <span>Community buzz</span>
        <div className="relative w-[9px] md:w-[16px] h-[26px] md:h-[46px]">
        <Image src="/img/testimonial.png" fill alt="thribe community" className="object-fit" />
        </div>
      </h2>

      <div className="mt-[24px] md:mt-[48px] flex flex-row gap-y-[24px] md:gap-y-0 justify-between md:gap-x-[16px] flex-wrap md:flex-nowrap">
        <div className="w-full lg:w-[816px] bg-[#F8F8F8] p-[24px] md:p-[32px] rounded-[20px] relative">
          <p className="text-[#0A1A18] leading-[150%] tracking-[2%]">
            It&#39;s a home for people building with heart. Whether you&#39;re coding, designing, strategizing, or just learning, 
            there&#39;s a space for you here. It&#39;s a home for people building with heart. 
            Whether you&#39;re coding, designing, strategizing, or just learning, there&#39;s a space for you here.
          </p>

          <div className=" mt-[40px] flex items-center w-full gap-x-[3.5px]">
            <div className="relative w-[60px] h-[60px] rounded-full">
            <Image src="/img/testimonial2.jpg" fill alt="thribe community testimonial" className="object-fit shrink-0 rounded-full" />
            </div>
            <div>
              <h1 className="font-[500] text-[18px] leading-[150%] tracking-[3%] text=[#0A1A18]">Thanau Abbas</h1>
              <h3 className="text-[#52514D] leading-[150%] text-[16px] leading-[150%]">Product Designer</h3>
            </div>
          </div>

          <div className="hidden absolute bottom-0 right-0 rounded-[20px] bg-[#fff] w-[176px] h-[104px] p-[32px] md:flex gap-x-[16px]">
            <div className="text-primaryGreen hover:text-[#fff] cursor-pointer hover:bg-primaryGreen w-[40px] h-[40px] rounded-full bg-[#F8F8F8] flex justify-center items-center">
               <span className="material-symbols-outlined text-[24px] ">
                chevron_left
              </span>
              {/* <Image src="/img/arrow2.png" width={7} height={16} alt="thribe community testimonial" className="object-fit shrink-0" /> */}
            </div>
            <div className="text-primaryGreen hover:text-[#fff] cursor-pointer hover:bg-primaryGreen w-[40px] h-[40px] rounded-full bg-[#F8F8F8] flex justify-center items-center">
              <span className="material-symbols-outlined text-[24px] ">
                chevron_right
              </span>
              {/* <Image src="/img/arrow1.png" width={7} height={16} alt="thribe community testimonial" className="object-fit shrink-0" /> */}
            </div>
          </div>
        </div>

          <div className="block md:hidden  bg-[#fff] w-full flex justify-between">
            <div className="w-[40px] h-[40px] rounded-full bg-[#F8F8F8] flex justify-center items-center">
              <Image src="/img/arrow2.png" width={7} height={16} alt="thribe community testimonial" className="object-fit shrink-0" />
            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#F8F8F8] flex justify-center items-center">
              <Image src="/img/arrow1.png" width={7} height={16} alt="thribe community testimonial" className="object-fit shrink-0" />
            </div>
          </div>

        <div className="w-[48%] md:w-[200px] h-[207px] bg-[#013D37] rounded-[20px] pt-[24px] md:pt-[32px] pl-[24px] md:pl-[26px] relative trackingg-[3%] text-[#fff]">
          <div className="font-clash text-[36px] md:text-[46px] leading-[100%] font-[600]">200+</div>
          <span className="absolute text-[18px] leading-[150%] absolute bottom-[35px] left-[26px]">MEMBERS</span>
        </div>

        <div className="w-[48%] md:w-[200px] h-[207px] bg-[#FFE299] rounded-[20px] pt-[24px] md:pt-[32px] pl-[24px] md:pl-[26px] relative trackingg-[3%] text-[#fff]">
          <div className="font-clash text-[36px] md:text-[46px] leading-[100%] font-[600] text-[#0A1A18]">5+</div>
          <span className="absolute text-[18px] leading-[150%] absolute bottom-[35px] left-[26px] text-[#354764]">Huts</span>
        </div>
      </div>
      </div>  
    </section>

    )
}

export default Testimaonial;