import Image from "next/image";

const BlogCard = ({mediaImage, title, author, date, readTime, type}) => {
    return(
        <div className="bg-[#F5F6F7] p-[24px] rounded-[32px] w-full md:w-[400px] space-y-[16px] cursor-pointer box-border">
            <div className="relative h-[296px] rounded-[20px]">
            <Image src={mediaImage} fill alt="techthribe - tech community in Nigeria" className="rounded-[20px]" />
             </div>
             <div className="h-[80px] font-clash text-[20px] leading-[130%] tracking-[0.01em] font-[600]">
                <p>
                {title}
                </p>
             </div>
             <div className="flex flex-col gap-[12px] md:flex-row justify-between text-[16px] leading-[150%] tracking-[0.01em] text-[#0A1A18]">
                <div className="flex gap-[8px] items-center">
                <span>{author}</span>
                <div className="w-[2px] rounded-full h-[2px] bg-[#000]"></div>
                <span>{date}</span>
                </div>
                <span>{readTime}</span>
             </div>
             <div>
                <button className="W-[68px] h-[32px] bg-[#107269] py-[4px] px-[12px] rounded-[10px] leading-[150%] text-[16px] text-[#FFE198]">{type}</button>
             </div>
        </div>
    )
}

export default BlogCard;