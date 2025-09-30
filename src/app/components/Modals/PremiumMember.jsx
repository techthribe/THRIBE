"use client";
import { useEffect, useState } from "react";
import { useAllContext } from "../../context/allcontext";
import Image from "next/image";
import Button from "../Button";

export default function Modal({ }) {
    const {premiumMemberModal, togglePremiumMemberModal} = useAllContext();
    const [errorMessage, setErrorMessage] = useState("")
    const [formDatas, setFormDatas] = useState({
        fullname: "",
        role: "",
        email: "",
        phone_no: "",
        payment_plan: "",
        why_join_thribe: "",
        accept_terms: false
    })

    console.log(formDatas)

    const numberRegex = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    const onSubmitForm = (e) => {
        e.preventDefault();
        const {fullname, role, email, phone_no, why_join_thribe, accept_terms} = formDatas;

        if(!fullname || !role || !email || !phone_no || !why_join_thribe || !accept_terms){
            return setErrorMessage("please, fill and check all fields")
        }
        if (!emailRegex.test(email)) {
             return setErrorMessage("Invalid Email")
        }
         if (!numberRegex.test(phone_no)) {
             return setErrorMessage("Phone number shouuld contain only digits")
        }

        setErrorMessage("")

        return console.log('regestered successfully')

    }

    const onChangeFormDataFunctions = (e) => {
        setErrorMessage("")
      const { name, type, value, checked } = e.target;

        setFormDatas((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked :  value
        }))
    }
 
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
      <div className="overflow-y-auto tracking-[2%] leading-[150%] relative bg-[#E8F6F4] rounded-lg shadow-lg z-10 w-[95%] lg:w-[1200px] 2xl:w-[1404px] max-h-[90vh] rounded-[16px] py-[40px] xl:py-[120px] px-[16px] xl:px-[90px] mt-[20px]">
        <h2 className="text-[16px] tracking-[16%] text-primaryGreen">THR!BE WITH US FOR FREE</h2>
         <h1 className="mt-[16px] flex items-center gap-x-[12px] font-clash font-[600] text-[26px] md:text-[46px] leading-[100%] tracking-[3%] text-primaryTextColor">
            <span>Be a Premium Member</span>
            <div className="relative w-[17px] md:w-[46px] h-[19px] md:h-[46px]">
            <Image src="/img/join.png" fill alt="thribe community" className="object-fit" />
        </div>
        </h1>

        <form onSubmit={onSubmitForm} className="mt-[24px] lg:mt-[48px] w-full">
             {/*form for mobile view */}
            <div className="leading-[150%] tracking-[3%] w-full mt-[24px] md:mt-[48px] flex gap-x-[24px] gap-y-[24px] md:gap-y-[40px] flex-wrap items-end block md:hidden">
                    <div className="flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[24px]">
                    <label htmlFor="fullname" className="">My name is</label>
                    <input 
                    name="fullname"
                    value={formDatas.fullname}
                    onChange={onChangeFormDataFunctions}
                    id="fullname" 
                    type="text" 
                    placeholder="Enter your full name"  
                    className="w-[278px] placeholder-[#87857F] text-[16px] md:text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"
                    />
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
                    <label htmlFor="fullname" className="">My name is</label>
                    <input 
                    id="fullname" 
                    name="fullname"
                    value={formDatas.fullname}
                    onChange={onChangeFormDataFunctions}
                    type="text" 
                    placeholder="Enter your full name"  
                    className="w-[278px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"
                    />
                    <label htmlFor="role" className="">and I am a </label>
                    <div className="relative w-[433px]">
                         <Image src="/icons/arrow-bottom-black.png" width={20} height={20} alt="thribe community" className="object-fit absolute bottom-0 right-0" />
                        <select id="role" 
                            name="role"
                            value={formDatas.role}
                            onChange={onChangeFormDataFunctions}
                            className={`appearance-none cursor-pointer bg-[#E8F6F4] w-[433px] placeholder-[#87857F] ${formDatas.role == "" ? "text-[#87857f]" : ""} text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none`}
                         >
                            <option value="" disabled>What field are you in? (developer, designer...)</option>
                            <option value="Product Designer" className="hover:bg-[#fff] cursor-pointer">Product Designer</option>
                            <option value="Product MAanager" className="hover:bg-[#fff] cursor-pointer">Product Manager</option>
                            <option value="Unit Tester" className="hover:bg-[#fff] cursor-pointer">Unit Tester</option>
                            <option value="Frontend Developer" className="hover:bg-[#fff] cursor-pointer">Frontend Developer</option>
                            <option value="Backend Developer" className="hover:bg-[#fff] cursor-pointer">Backend Developer</option>
                            <option value="Graphic Designer" className="hover:bg-[#fff] cursor-pointer">Graphic Designer</option>
                        </select>
                    </div>
                    <label htmlFor="email" className="">My email address is</label>
                    <div>
                        <input 
                        name="email"
                        value={formDatas.email}
                        onChange={onChangeFormDataFunctions}
                        id="email" 
                        type="email" 
                        placeholder="Enter your email address?"  
                        className="w-[396px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"
                        /> 
                        .
                        </div>
                     <label htmlFor="phone" className="">My phone number  is </label>
                    <div>
                        <input 
                         name="phone_no"
                        value={formDatas.phone_no}
                        onChange={onChangeFormDataFunctions}
                        id="phone" 
                        type="text" 
                        placeholder="Enter your phone number"  
                        className="w-[296px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"
                        /> 
                        .
                    </div>
                    <label htmlFor="payment" className="">My Preferred payment plan is</label>
                     <div className="relative w-[433px]">
                         <Image src="/icons/arrow-bottom-black.png" width={20} height={20} alt="thribe community" className="object-fit absolute bottom-0 right-0" />
                        <select
                        name="payment_plan"
                        value={formDatas.payment_plan}
                        onChange={onChangeFormDataFunctions}
                         id="payment"  
                         className={`${formDatas.payment_plan == "" ? "text-[#87857f]" : ""} appearance-none cursor-pointer bg-[#E8F6F4] w-[433px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none`}
                         >
                            <option value="" disabled>Select your preferred plan</option>
                            <option value="monthly" className="cursor-pointer">Monthly Plan</option>
                            <option value="quarterly" className="cursor-pointer">Quarterly Plan</option>
                            <option value="yearly" className="cursor-pointer">Yearly Plan</option>
                           
                        </select>
                    </div>
                     <label htmlFor="why_join_thribe" className="">I will love to join THRIBE because </label>
                    <div>
                    <input
                     name="why_join_thribe"
                    value={formDatas.why_join_thribe}
                    onChange={onChangeFormDataFunctions}
                     id="why_join_thribe" 
                     type="text" 
                     placeholder="Tell us why you would love to join THR!BE"  
                     className="w-[462px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"
                     /></div>
            </div>

            <div className="w-full flex space-x-[16px] mt-[24px] md:mt-[40px]">
                <input
                 name="accept_terms"
                 checked={formDatas.accept_terms}
                 onChange={onChangeFormDataFunctions}
                 type="checkbox"  
                 className="border-[#B3B9C4] rounded-[4px] bg-[#fff]" 
                 />
                <span className="text-secondaryText">I have read and agree to the <span className="text-primaryGreen font-[500]">terms & conditions</span></span>
            </div>
            {/* error message */}
            <div className="text-red font-[500] p-[10px] inline bg-[ #FF7F7F] text-[#FF0000]">{errorMessage}</div>

            <div className="mt-[48px]">
             <Button type="submit" name="Upgrade to Premium" classname="w-full md:w-[257px] bg-[#107269]"/>
             </div>

        </form>
      
       </div>
    </div>
  );
}
