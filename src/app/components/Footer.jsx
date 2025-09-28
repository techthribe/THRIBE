'use client'
import Image from "next/image";
import Link from "next/link";
import { useAllContext } from "../context/allcontext";

const Footer = () => {
    const {toggleLendYourVoiceThribeModal, toggleJoinTournamentModal} = useAllContext()
    return (
        <div className="text-[20px]">
        <section className="bg-[#FFF] pt-[40px] md:pt-[120px] pb-[40px] md:pb-[74px]">
          <div className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0">
            <div className="flex flex-col gap-y-[40px] md:gap-y-0 md:flex-row justify-between  items-start">
                <div>
                    <div className="relative w-[119px] h-[36px]">
                        <Image 
                        src="/logo.png"
                        alt="thribe community logo"
                        fill
                        className="object-center"
                        />
                    </div>
                    <div className="mt-[40px] md:mt-[150px] ">
                        <p>hello@thribe.com</p>
                        <div className="flex gap-x-[14px] mt-[24px]">
                            <div className="w-[32px] h-[32px] rounded-full shrink-0 bg-[#0A1A18] flex items-center justify-center">
                                 <Image 
                                    src="/img/tiktok.png"
                                    width={11}
                                    height={13}
                                    alt="thribe community tit-tok account"
                                    className="object-center"
                                    />
                            </div>
                            <div className="w-[32px] h-[32px] rounded-full shrink-0 bg-[#0A1A18] flex items-center justify-center">
                                 <Image 
                                    src="/img/xlogo.png"
                                    width={11}
                                    height={13}
                                    alt="thribe community tit-tok account"
                                    className="object-center"
                                    />
                            </div>
                            <div className="w-[32px] h-[32px] rounded-full shrink-0 bg-[#0A1A18] flex items-center justify-center">
                                 <Image 
                                    src="/img/Instagram.png"
                                    width={11}
                                    height={11}
                                    alt="thribe community tit-tok account"
                                    className="object-center"
                                    />
                            </div>
                            <div className="w-[32px] h-[32px] rounded-full shrink-0 bg-[#0A1A18] flex items-center justify-center">
                                 <Image 
                                    src="/img/whatssap.png"
                                    width={13}
                                    height={13}
                                    alt="thribe community tit-tok account"
                                    className="object-center"
                                    />
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-[#6B788E] leading-[150%] tracking-[2%] md:px-[10px]">Home</h3>
                    <div className="mt-[38px] text-[#354764] tracking-[2%] flex flex-col gap-y-[28px]">
                        <span>
                        <Link href="/about" className="navLinkFooter md:p-[10px]">About</Link>
                        </span>
                        <span>
                        <Link href="/events" className="navLinkFooter md:p-[10px]">Events</Link>
                        </span>
                        <span>
                        <Link href="/" className="navLinkFooter md:p-[10px]">Partner with Us</Link>
                        </span>
                        <span>
                        <Link href="#" className="navLinkFooter md:p-[10px]">
                        Join the community
                        </Link>
                        </span>
                        
                        
                    </div>
                </div>
                <div>
                    <h3 className="text-[#6B788E] text-[20px] leading-[150%] tracking-[2%] md:px-[10px]">EXPLORE</h3>
                    <div className="mt-[38px] text-[#354764] text-[20px] tracking-[2%] flex flex-col gap-y-[18px]">
                        <Link href="#" className="navLinkFooter md:p-[10px] cursor-pointer">Shop</Link>
                        <span className="md:p-[10px] cursor-pointer" onClick={toggleLendYourVoiceThribeModal} >
                        Lend Your Voice
                        </span>

                          <span>
                        <Link href="#" className="md:p-[10px] flex space-x-[10px]">
                        <span>Outdoor Fun</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </Link>
                        </span>
                        
                        <span>
                        <Link href="#" className="md:p-[10px] flex space-x-[10px]">
                        <span>Join The Tournament</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </Link>
                        </span>
                    </div>
                </div>
                <div>
                    <h3 className="text-[#6B788E] text-[20px] leading-[150%] tracking-[2%] md:px-[10px]">MEDIA</h3>
                    <div className="mt-[38px] text-[#354764] text-[20px] tracking-[2%] flex flex-col gap-y-[18px]">
                        <span>
                        <Link href="#" className="md:p-[10px] flex items-center space-x-[10px]">
                        <span>Blog & News</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </Link>
                        </span>
                        <span>
                        <Link href="#" className="md:p-[10px] flex space-x-[10px]">
                        <span>Podcast</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </Link>
                        </span>
                    </div>
                </div>
                <div>
                    <h3 className="text-[#6B788E] text-[20px] leading-[150%] tracking-[2%] md:px-[10px]">LEGAL</h3>
                    <div className="mt-[38px] text-[#354764] text-[20px] tracking-[2%] flex flex-col gap-y-[18px]">
                        <span>
                        <Link href="/legal/privacy-policy" className="navLinkFooter md:p-[10px] ">Privacy policy</Link>
                        </span>
                        <Link href="/legal/terms-of-service" className="navLinkFooter md:p-[10px]">Terms of service</Link>
                    </div>
                </div>

            </div>

            <div className="border border-t-[#DFE2E6] border-b-0 border-l-0 border-r-0 mt-[80px] pt-[80px] hidden md:block">
                <div className="flex justify-center items-center font-[400] text-[20px] leading-[150%] tracking-[3%] text-secondaryColor">
                    <span>Copyright Ⓒ 2025 THR!BE</span>
                </div>
            </div>
            </div>
        </section>
            {/* mobile image */}
            <div className="relative w-full h-[167px] block md:hidden">
            <Image src="/img/footer-mobile.png" fill alt="thribe community banner" className="obejct-cover" />
          </div>
          <div className="relative w-full h-[167px] md:h-[247px] hidden md:block">
            <Image src="/img/footer.png" fill alt="thribe community banner" className="obejct-cover" />
          </div>
        </div>
    )
}

export default Footer;