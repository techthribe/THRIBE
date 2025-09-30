"use client";
import { useEffect } from "react";
import { useAllContext } from "../../context/allcontext";
import Image from "next/image";
import Button from "../Button";

export default function Modal({ }) {
    const {premiumMemberModal, togglePremiumMemberModal} = useAllContext();

  // prevent background scroll when modal is open
  useEffect(() => {
    if (premiumMemberModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [premiumMemberModal]);

  if (!premiumMemberModal) return null; // don’t render if closed

  return (
    <div className={`fixed inset-0 z-50 items-center justify-center ${premiumMemberModal ? 'flex' : 'hidden' }`}>
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={togglePremiumMemberModal}
      ></div>

      {/* modal content */}
      <div className="overflow-y-scroll tracking-[2%] leading-[150%] relative bg-[#E8F6F4] rounded-lg shadow-lg z-10 w-[95%] lg:w-[1200px] 2xl:w-[1404px] max-h-[90vh] rounded-[16px] py-[40px] xl:py-[120px] px-[16px] xl:px-[90px] mt-[20px]">
        <h2 className="text-[16px] tracking-[16%] text-primaryGreen">THR!BE WITH US FOR FREE</h2>
         <h1 className="mt-[16px] flex items-center gap-x-[12px] font-clash font-[600] text-[26px] md:text-[46px] leading-[100%] tracking-[3%] text-primaryTextColor">
            <span>Be a Premium Member</span>
            <div className="relative w-[17px] md:w-[46px] h-[19px] md:h-[46px]">
            <Image src="/img/join.png" fill alt="thribe community" className="object-fit" />
        </div>
        </h1>

        <form className="mt-[24px] lg:mt-[48px] w-full">
             {/*form for mobile view */}
            <div className="leading-[150%] tracking-[3%] w-full mt-[24px] md:mt-[48px] flex gap-x-[24px] gap-y-[24px] md:gap-y-[40px] flex-wrap items-end block md:hidden">
                    <div className="flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[24px]">
                    <label htmlFor="names" className="">My name is</label>
                    <input id="names" type="text" placeholder="Enter your full name"  className="w-[278px] placeholder-[#87857F] text-[16px] md:text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[24px] w-full md:w-[542px]">
                    <label htmlFor="job" className="">and I am a </label>
                    <div className="relative md:flex md:gap-x-[3px]">
                        <input id="job" type="text" placeholder="What field are you in? (developer, designer...)"  className="w-[98%] md:w-[384px] placeholder-[#87857F] text-[16px] md:text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/> 
                        <div className="absolute md:relative bottom-[-7px] right-0">.</div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[24px] w-full">
                    <label htmlFor="job" className="">My email address is</label>
                    <div className="relative">
                        <input id="job" type="text" placeholder="Enter your email address?"  className="w-[98%] md:w-[396px] placeholder-[#87857F] text-[16px] md:text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/>
                        <div className="absolute bottom-[-7px] right-0">.</div>
                        </div>
                    </div>
                     <div className="flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[24px] w-full">
                    <label htmlFor="job" className="">My phone number is</label>
                    <div className="relative">
                        <input id="job" type="text" placeholder="Enter your phone number?"  className="w-[98%] md:w-[396px] placeholder-[#87857F] text-[16px] md:text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/>
                        <div className="absolute bottom-[-7px] right-0">.</div>
                        </div>
                    </div>
                     <div className="flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[24px] w-full">
                    <label htmlFor="job" className="">My Preferred payment plan is</label>
                    <div className="relative">
                        <input id="job" type="text" placeholder="Select your preferred plan"  className="w-[98%] md:w-[396px] placeholder-[#87857F] text-[16px] md:text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/>
                        <div className="absolute bottom-[-7px] right-0">.</div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[24px] w-full">
                    <label htmlFor="job" className="">I will love to join THRIBE because </label>
                    <div><input id="job" type="text" placeholder="Tell us why you would love to join THR!BE"  className="w-full md:w-[502px] placeholder-[#87857F] text-[16px] md:text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/></div>
                    </div>
            </div>

            {/* form for webview */}
             <div className="tracking-[3%] w-full hidden md:flex gap-x-[12px] gap-y-[40px] flex-wrap items-end ">
                    <label htmlFor="names" className="">My name is</label>
                    <input id="names" type="text" placeholder="Enter your full name"  className="w-[278px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/>
                    <label htmlFor="role" className="">and I am a </label>
                    <div><input id="role" type="text" placeholder="What field are you in? (developer, designer...)"  className="w-[384px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/> .</div>
                    <label htmlFor="address" className="">My email address is</label>
                    <div><input id="address" type="text" placeholder="Enter your email address?"  className="w-[396px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/> .</div>
                     <label htmlFor="phone" className="">My phone number  is </label>
                    <div><input id="phone" type="text" placeholder="Enter your phone number"  className="w-[296px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/> .</div>
                    <label htmlFor="payment" className="">My Preferred payment plan is</label>
                    <div><input id="payment" type="text" placeholder="Enter your phone number"  className="w-[396px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/> .</div>
                    <label htmlFor="why_join_thribe" className="">I will love to join THRIBE because </label>
                    <div><input id="why_join_thribe" type="text" placeholder="Tell us why you would love to join THR!BE"  className="w-[502px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/></div>
            </div>

            <div className="w-full flex space-x-[16px] mt-[24px] md:mt-[40px]">
                <input type="checkbox"  className="border-[#B3B9C4] rounded-[4px] bg-[#fff]" />
                <span className="text-secondaryText">I have read and agree to the <span className="text-primaryGreen font-[500]">terms & conditions</span></span>
            </div>

            <div className="mt-[48px]">
             <Button name="Upgrade to Premium" classname="w-full md:w-[257px] bg-[#107269]"/>
             </div>

        </form>
      
       </div>
    </div>
  );
}
