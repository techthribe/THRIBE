import Image from "next/image";
import Button from "./Button";

const JoinCommunity = () => {
    return (
        <section className="bg-[#FFF6DF] py-[40px] md:py-[120px]">
          <div className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0">
           <h1 className="text-[16px] leading-[150%] tracking-[16%] text-[#107269]">THR!BE WITH US FOR Free</h1>
                <h3 className="font-clash font-[600] my-[16px] text-[#0A1A18] text-[26px] md:text-[48px] leading-[100%] tracking-[3%] flex items-center gap-x-[12px]">
                <span>Join the Community</span>
                <div className="relative w-[26px] md:w-[46px] h-[26px] md:h-[46px]">
                <Image src="/img/join.png" fill alt="thribe community testimonial" className="object-fit shrink-0" />
                </div>
            </h3>
            <form>
                {/* mobile */}
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
                    <label htmlFor="job" className="">I will love to join THRIBE because </label>
                    <div><input id="job" type="text" placeholder="Tell us why you would love to join THR!BE"  className="w-full md:w-[502px] placeholder-[#87857F] text-[16px] md:text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/></div>
                    <div className="block min-w-[100%]"><input id="job" type="text" placeholder="Tell us why you would love to join THR!BE"  className="w-[100%] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/></div>
                    </div>
            </div>

            {/* website */}
            <div className="leading-[150%] tracking-[3%] w-full mt-[48px] hidden md:flex gap-x-[24px] gap-y-[40px] flex-wrap items-end ">
                    <label htmlFor="names" className="">My name is</label>
                    <input id="names" type="text" placeholder="Enter your full name"  className="w-[278px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/>
                    <label htmlFor="job" className="">and I am a </label>
                    <div><input id="job" type="text" placeholder="What field are you in? (developer, designer...)"  className="w-[384px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/> .</div>
                    <label htmlFor="job" className="">My email address is</label>
                    <div><input id="job" type="text" placeholder="Enter your email address?"  className="w-[396px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/> .</div>
                    <label htmlFor="job" className="">I will love to join THRIBE because </label>
                    <div><input id="job" type="text" placeholder="Tell us why you would love to join THR!BE"  className="w-[502px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/></div>
                    <div className="block min-w-[100%]"><input id="job" type="text" placeholder="Tell us why you would love to join THR!BE"  className="w-[100%] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/></div>
            </div>
            <div className="mt-[48px]">
             <Button name="Submit" classname="w-full md:w-[141px] bg-[#107269]"/>
             </div>
             </form>
          </div>
        </section>
    )
}

export default JoinCommunity;