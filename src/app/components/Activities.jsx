import Image from "next/image";

const Activities = ({image, title}) => {
    return(
        <div className="w-[159px] md:w-[300px] text-center">
            <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full mx-auto bg-[#FFE198]">
                <Image src={image} width={60} height={60} alt="thribe community" className="object-center mx-auto" />
            </div>
            <h3 className="mt-[24px] font-[600] text-[#fff] leading-[120%] tracking-[2%] text-clash">
                {title}
            </h3>
        </div>
    )
}

export default Activities;