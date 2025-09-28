"use client";
import { useEffect, useState } from "react";
import { useAllContext } from "../../context/allcontext";
import Image from "next/image";

export default function Modal({ }) {
    const { partnerWithUs, toggleJoinTournamentModal, toggleLendYourVoiceThribeModal, togglePartnerWithUsModal} = useAllContext();
    const [opponent, setOpponent] = useState('play a particular opponent')

  // prevent background scroll when modal is open
  useEffect(() => {
    if (partnerWithUs) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [partnerWithUs]);

  if (!partnerWithUs) return null; // don’t render if closed

  return (
    <div className={`fixed inset-0 z-50 items-center justify-center ${partnerWithUs ? 'flex' : 'hidden' }`}>
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={togglePartnerWithUsModal}
      ></div>

      {/* modal content */}
      <div className="relative bg-white rounded-lg shadow-lg z-10 w-[1004px] max-h-[90vh] rounded-[16px] p-[40px] overflow-y-scroll mt-[40px]">
        <div className="flex justify-between items-center">
            <h1 className="text-[32px] leading-[100%] tracking-[1%] text-primaryTextColor font-[600] font-clash">Support THR!BE </h1>
            <Image src="/icons/close-square.png" width={24} height={24} alt="close thribe modal" className="cursor-pointer" onClick={togglePartnerWithUsModal} />
        </div>

        <div className="mt-[36px] flex justify-between items-start">
            <div className="w-[300px] space-y-[40px] font-clash text-secondaryColor">
                <div className="cursor-pointer" onClick={toggleLendYourVoiceThribeModal}>Lend Your Voice</div>
                <div className="cursor-pointer" onClick={toggleJoinTournamentModal}>Join The Tournament</div>
                <div className="font-[600] text-primaryGreen">Partner with us</div>
                <div className="cursor-pointer">Buy a merch (coming soon)</div>
            </div>

            <form className="w-[544px] overflow-y-auto h-[100%] leading-[150%] space-y-[16px] pb-[40px] pr-[5px]">
                <div className="sapce-y-[4px]">
                    <label>Name of Company / Organization / Individual<span className="text-[#FF0000]">*</span></label>
                    <input type="text" placeholder="What&#39;s your company name" className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]" />
                </div>

                 <div className="sapce-y-[4px]">
                    <label>Email address <span className="text-[#FF0000]">*</span></label>
                    <input type="email" placeholder="Pease enter your email address" className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]" />
                </div> 

                <div className="sapce-y-[4px]">
                    <label>Contact person&#39;s name <span className="text-[#FF0000]">*</span></label>
                    <input type="text" placeholder="Enter name" className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]" />
                </div>

                <div className="sapce-y-[4px]">
                    <label>Website or Social Media Link </label>
                    <input type="text" placeholder="Enter link" className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]" />
                </div>

                <div className="sapce-y-[4px]">
                    <label>What kind of partnership are you interested in? <span className="text-[#FF0000]">*</span></label>
                    <div className="relative w-full">
                      <Image src="/icons/arrow-bottom.png" width={24} height={24} alt="close thribe modal" className="absolute top-[19px] right-[24px]"/>
                        <select className="text-[#98A1B0] outline-none appearance-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]">
                            <option value="" className="text-primaryTextColor text-[18px] sm:text-[20px]">Select an option</option>
                            <option className="text-primaryTextColor text-[18px] sm:text-[20px]">Option 1</option>
                            <option className="text-primaryTextColor text-[18px] sm:text-[20px]">Option 2</option>
                            <option className="text-primaryTextColor text-[18px] sm:text-[20px]">Option 3</option>
                        </select> 
                    </div>
                      </div> 

                
                  <div className="sapce-y-[4px]">
                    <label>Briefly describe how you&#39;d like to partner with THR!BE</label>
                    <textarea  defaultValue="Enter your message" className="outline-none placeholder-[#98A1B0] w-full h-[132px] rounded-[16px] px-[24px] pt-[16px] h-[367px] border border-[#C2C7D0] text-[#98A1B0]" />
                </div>

                <div>
                    <label className="flex items-center space-x-[16px]">
                    <input type="checkbox" className="form-checkbox h-[24px] w-[24px] text-blue-600 border border-[#B3B9C4] rounded-[4px]" />
                    <span className="text-secondaryColor">I&#39;d love to schedule a quick chat to explore this further</span>
                    </label>
                </div>

                <div>
                    <label className="flex items-center space-x-[16px]">
                    <input type="checkbox" className="form-checkbox h-[24px] w-[24px] text-blue-600 border border-[#B3B9C4] rounded-[4px]" />
                    <span className="text-secondaryColor">Keep me in the loop about THR!BEI&#39;s future initiatives </span>
                    </label>
                </div>
                      
                     <button className={`flex justify-center items-center gap-x-[10px] bg-primaryColor mt-[20px] cursor-pointer shadow-[4px_4px_0px_0px_#003E39] font-[500] text-[18px] text-[#fff] h-[47px] md:h-[56px] w-full rounded-[100px]`}>
                        <span>Proceed</span>
                         <Image src="/icons/arrow-white.png" width={24} height={24} alt="close thribe modal" className=""/>
                    </button>   
            </form>          
        </div>
      </div>
    </div>
  );
}