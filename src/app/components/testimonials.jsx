"use client"
import {useState} from "react";
import Image from "next/image";

const Testimaonial = () => {
  const [currentReview, setCurrentReview] = useState(0)
  const reviews = [
  {
    post: "“Joining THR!BE changed my journey. It's more than a tech community - it's a supportive space for growth. I've gained knowledge, confidence, and opportunities through inspiring members, helpful discussions, and valuable connections. THR!BE gives me belonging, motivation and the push to thrive.”",
    name: "Najeebat Abdullateef",
    role: "Product Designer",
    img:"/img/reviewer2.png"
  },
  {
    post: `“THR!BE came when I was battling impostor syndrome. Instead of hype, I found honesty, real experiences, and accountability. The community balances me, fuels genuine confidence, and opens opportunities. Here, I'm learning to trust my process, celebrate progress, and grow without walking alone.”`,
    name: "Mubarak Shittu",
    role: "Product Manager",
    img:"/img/reviewer3.png"
  }
]

    const nextReviewFunction = () => {
      if((reviews.length -1) > currentReview){
        setCurrentReview((prev) => prev + 1)
      } 
      else{
         setCurrentReview(0)
      } 
         
    }

    const PreviousReviewFunction = () => {
      if(currentReview > 0){
        setCurrentReview((prev) => prev-1)
      }
      else{
        setCurrentReview(reviews.length-1)
      }  
    }

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
        <div className="w-full lg:w-[816px] min-h-[281px] bg-[#F8F8F8] p-[24px] md:p-[32px] rounded-[20px] relative">
          <p className="text-[#0A1A18] leading-[150%] tracking-[2%] h-[270px] md:h-[125px] ">
            {reviews[currentReview].post}
          </p>

          <div className="mt-[15px] md:mt-[40px] flex items-center w-full gap-x-[3.5px]">
            <div className="relative w-[60px] h-[60px] rounded-full">
            <Image src={reviews[currentReview].img} fill alt="thribe community testimonial" className="object-fill shrink-0 rounded-full" />
            </div>
            <div>
              <h1 className="font-[500] text-[18px] leading-[150%] tracking-[3%] text=[#0A1A18]"> {reviews[currentReview].name}</h1>
              <h3 className="text-[#52514D] leading-[150%] text-[16px] leading-[150%]"> {reviews[currentReview].role}</h3>
            </div>
          </div>

          <div className="hidden md:flex absolute bottom-0 right-0 rounded-[20px] bg-[#fff] w-[176px] h-[104px] p-[32px] items-center justify-center gap-x-[16px]">
            <div
            onClick={PreviousReviewFunction}
            className="text-primaryGreen hover:text-[#fff] cursor-pointer hover:bg-primaryGreen w-[40px] h-[40px] rounded-full bg-[#F8F8F8] flex justify-center items-center">
               <span className="material-symbols-outlined text-[24px] ">
                chevron_left
              </span>
              {/* <Image src="/img/arrow2.png" width={7} height={16} alt="thribe community testimonial" className="object-fit shrink-0" /> */}
            </div>
            <div 
            onClick={nextReviewFunction}
            className="text-primaryGreen hover:text-[#fff] cursor-pointer hover:bg-primaryGreen w-[40px] h-[40px] rounded-full bg-[#F8F8F8] flex justify-center items-center">
              <span className="material-symbols-outlined text-[24px] ">
                chevron_right
              </span>
              {/* <Image src="/img/arrow1.png" width={7} height={16} alt="thribe community testimonial" className="object-fit shrink-0" /> */}
            </div>
          </div>
        </div>

          {/* this is for mobile */}
          <div className="block md:hidden  bg-[#fff] w-full flex justify-center space-x-[40px]">
            <div 
             onClick={PreviousReviewFunction}
            className="w-[40px] h-[40px] rounded-full bg-[#F8F8F8] flex justify-center items-center">
              <Image src="/img/arrow2.png" width={7} height={16} alt="thribe community testimonial" className="object-fit shrink-0" />
            </div>
            <div 
            onClick={nextReviewFunction}
            className="w-[40px] h-[40px] rounded-full bg-[#F8F8F8] flex justify-center items-center">
              <Image src="/img/arrow1.png" width={7} height={16} alt="thribe community testimonial" className="object-fit shrink-0" />
            </div>
          </div>

        <div className="w-[48%] md:w-[200px] min-h-[207px] bg-[#013D37] rounded-[20px] pt-[24px] md:pt-[32px] pl-[24px] md:pl-[26px] relative trackingg-[3%] text-[#fff]">
          <div className="font-clash text-[36px] md:text-[46px] leading-[100%] font-[600]">200+</div>
          <span className="absolute text-[18px] leading-[150%] absolute bottom-[35px] left-[26px]">MEMBERS</span>
        </div>

        <div className="w-[48%] md:w-[200px] min-h-[207px] bg-[#FFE299] rounded-[20px] pt-[24px] md:pt-[32px] pl-[24px] md:pl-[26px] relative trackingg-[3%] text-[#fff]">
          <div className="font-clash text-[36px] md:text-[46px] leading-[100%] font-[600] text-[#0A1A18]">5+</div>
          <span className="absolute text-[18px] leading-[150%] absolute bottom-[35px] left-[26px] text-[#354764]">Huts</span>
        </div>
      </div>
      </div>  
    </section>

    )
}

export default Testimaonial;