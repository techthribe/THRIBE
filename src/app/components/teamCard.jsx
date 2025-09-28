"use client"
import { useState } from "react";
import Image from "next/image";


const TeamCard = ({classname, classnameHover, hoverText, name, nickname, role, img}) => {
        const [hoverCard, setHoverCard] = useState(false)

        console.log(hoverCard)

    return(
        <div
        onMouseEnter={() => setHoverCard((prev) => !prev)} 
        onMouseLeave={() => setHoverCard((prev) => !prev)}
        className="w-full md:w-[48%] lg:w-[30%] xl:w-[280px] h-[420px]"
        >
            
        <div
            className={`${hoverCard ? "hidden" : "block" } ${classname} text-center text-[#0A1A18] rounded-[20px] p-[40px] space-y-[24px] `}>
            <div className="relative w-[200px] mx-auto h-[200px] rounded-full">
            <Image src={img} fill  alt="thribe community team" className="object-fit rounded-full" /> 
            </div>
            <div className="">
                <h1 className=" font-[600] font-clash tracking-[3%] leading-[120%] text-[20px]">{name}</h1>
                <h5 className="tracking-[1%] leading-[150%]">{nickname}</h5>
            </div>

            <h5 className="font-[500]">{role}</h5>

        </div>

        <div
            className={`${hoverCard ? "block" : "hidden" } ${classnameHover} text-left text-[#fff] rounded-[20px] h-[420px] p-[40px] space-y-[24px] `}>
            <div className="relative w-[50px] h-[50px] rounded-full">
            <Image src={img} fill  alt="thribe community team" className="object-fit rounded-full" /> 
            </div>

            <h1 className=" font-[600] font-clash tracking-[3%] leading-[120%] text-[20px]">{name}</h1>

            <div className="">
                {hoverText}
            </div>
        </div>

        </div>
    )
}

export default TeamCard;