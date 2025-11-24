"use client"
import { useEffect} from "react";
import NavigationBar from "../components/navigation2";
import MobileNavigationBar from "../components/MobileNav";
import Image from "next/image";
// import JoinCommunity from "../components/joinCommunity";
import JoinCommunity from "../components/joinCommunity";
import Testimonial from "../components/testimonials";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
     useEffect(() => {
        gsap.utils.toArray(".scroll-fade").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }, []);
    return(
        <main className="">
            <div className="bg-[#0A1A18]">
            <NavigationBar />
            <MobileNavigationBar />
            <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[80px] md:pt-[148px] pb-[92px] md:pb-[120px] tracking-[1%] space-y-[40px]">
            <div className="max-w-[1170px]">
                <h1 className="text-[16px] leading-[150%] tracking-[16%] text-[#FFE198]">BLOGS & NEWS</h1>
                <h2 className="font-[600] leading-[120%] text-[#fff] text-[32px] md:text-[66px] tracking-[1%] font-clash mt-[16px] mb-[24px]">Where <span className="text-[#FFE198]">THR!BE</span> Speaks Loud, Real & Unfiltered</h2>
                <p className="w-full leading-[150%] tracking-[1%] text-[#C2C7D0]">
                Thoughts, truths, tech, and all the things we&#39;re not supposed to say out loud - we say them here.
                </p>
            </div>
            </section>
            <section className="w-full  bg-[#fff] py-[74px]">
                <div className="max-w-[1248px] mx-auto">
                <h3 className="text-[46px] leading-[100%] tracking-[3%] text-[#0A1A18] font-[600] font-clash">Recent</h3>
                <div className="mt-[40px] p-[40px] rounded-[40px] bg-[#F5F6F7]">
                    <div className="flex gap-[24px] items-center">
                        <div className="w-[572px] h-[407px] relative">
                            <Image fill src="https://res.cloudinary.com/chiaka/image/upload/v1763997118/Frame_1000002107_plmqou.png" alt="techthribe blog and news" />
                        </div>
                        <div className="w-[572px]">
                            <button className="W-[68px] h-[32px] bg-[#107269] py-[4px] px-[12px] rounded-[10px] leading-[150%] text-[16px] text-[#FFE198]">BLOG</button>
                            <div className="mt-[24px]">
                                <h2 className="font-clash text-[46px] leading-[130%] tracking-[0.01em] font-[600]">Tech, Design, and the Art of Staying Human</h2>
                                <p className="mt-[16px] text-[#354764] leading-[150%] text-[20px] tracking-[0.01em]">
                                    I started Tech Thribe (THR!BE) because I&apos;ve seen how easy it is to lose yourself in the speed and pressure of tech - the endless deadlines, 
                                    the constant need to “keep up,” and the quiet burnout that follows. This piece is personal...
                                </p>
                                <div className="mt-[32px] flex justify-between text-[18px] leading-[150%] tracking-[0.01em] text-[#354764]">
                                    <div className="flex items-center gap-[2px]">
                                    <span className="text-[#0A1A18]">Thanau Abbas</span>
                                    <span>.</span>
                                    <span >Nov 4, 2025</span>
                                    </div>
                                    <span>3 mins read</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                </div>
            </section>

            <section className="py-[74px] bg-[#fff]">
                <div className="max-w-[1248px] mx-auto">
                    <h3 className="text-[46px] leading-[100%] tracking-[0.03em] text-[#0A1A18] font-[600] font-clash">All Blog & News</h3>
                    <div className="mt-[40px]">
                        <div className="flex justify-between">

                        </div>
                    </div>

                </div>

            </section>
            </div>
            <JoinCommunity />
            {/* <Testimonial /> */}
             <Footer />
           
        </main>
    )
}

export default Events;