"use client"
import { useEffect, useState} from "react";
import NavigationBar from "../components/navigation2";
import MobileNavigationBar from "../components/MobileNav";
import Image from "next/image";
// import JoinCommunity from "../components/joinCommunity";
import JoinCommunity from "../components/joinCommunity";
import Testimonial from "../components/testimonials";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import gsap from "gsap";
import {BlogPosts} from "../data/Blogpost"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
      const [searchType, setSearchType] = useState("all")
      const [filteredPosts, setFilteredPosts] = useState([]);
      const [searchInput, setSearchInput] = useState("")

      const onChangeSearchInput = (e) => {
        setSearchInput(e.target.value)

      }

      useEffect(() => {
        setFilteredPosts(BlogPosts)

         if(searchType == "all"){
            if(searchInput == ""){
                setFilteredPosts(BlogPosts)
            }
            else{
                  const filtered = filteredPosts.filter(post =>
                post.title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredPosts(filtered);
            }    
        }
        else{
            let filterBySearch = BlogPosts.filter(x => x.type.toLowerCase() == searchType)
            setFilteredPosts(filterBySearch)

            if(searchInput){
                  const filtered = filteredPosts.filter(post =>
                post.title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredPosts(filtered);
            }    
        }
       
        console.log(filteredPosts)
    }, [searchType, searchInput])

      const changeSearchType = (type) => {
        setSearchType(type)
      }
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
            <section className="w-full  bg-[#fff] py-[40px] md:py-[74px] px-[16px] md:px-[20px] xl:px-0">
                <div className="max-w-[1248px] mx-auto">
                <h3 className="text-[26px] md:text-[46px] leading-[100%] tracking-[3%] text-[#0A1A18] font-[600] font-clash">Recent</h3>
                <div className="mt-[24px] md:mt-[40px] p-[24px] md:p-[40px] rounded-[40px] bg-[#F5F6F7]">
                    <Link href="/blog/tech_design_and_the_art_of_staying_human">
                    <div className="flex flex-col md:flex-row gap-[24px] items-center">
                        <div className="w-full md:w-[572px] h-[295px] md:h-[407px] relative rounded-[20px]">
                            <Image fill src="https://res.cloudinary.com/chiaka/image/upload/v1765128613/152838D4-F2E8-4850-BB07-8E624E473987_1_jpzie1.png" className="rounded-[20px]" alt="techthribe blog and news" />
                        </div>
                        <div className="w-full md:w-[572px]">
                            <button className="W-[68px] h-[32px] bg-[#107269] py-[4px] px-[12px] rounded-[10px] leading-[150%] text-[16px] text-[#FFE198]">BLOG</button>
                            <div className="mt-[16px] md:mt-[24px]">
                                <h2 className="font-clash text-[20px] md:text-[46px] leading-[130%] tracking-[0.01em] font-[600]">Tech, Design, and the Art of Staying Human</h2>
                                <p className="mt-[16px] text-[#354764] leading-[150%] text-[16px] md:text-[20px] tracking-[0.01em]">
                                    I started Tech Thribe (THR!BE) because I&apos;ve seen how easy it is to lose yourself in the speed and pressure of tech - the endless deadlines, 
                                    the constant need to “keep up,” and the quiet burnout that follows. This piece is personal...
                                </p>
                                <div className="mt-[16px] md:mt-[32px] gap-y-[12px] flex flex-col sm:flex-row justify-between text-[16px] md:text-[18px] leading-[150%] tracking-[0.01em] text-[#354764]">
                                    <div className="flex items-center gap-[10px]">
                                    <span className="text-[#0A1A18]">Thanau Abbas</span>
                                    <div className="w-[2px] h-[2px] bg-[#0A1A18]"></div>
                                    <span >Nov 4, 2025</span>
                                    </div>
                                    <span>3 mins read</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    </Link>

                </div>
                </div>
            </section>

            <section className="py-[24px] md:py-[74px] bg-[#fff] px-[16px] md:px-[20px] xl:px-0">
                <div className="max-w-[1248px] mx-auto">
                    <h3 className="text-[26px] md:text-[46px] leading-[100%] tracking-[0.03em] text-[#0A1A18] font-[600] font-clash">All Blog & News</h3>
                    <div className="mt-[24px] md:mt-[40px] text-[18px] sm:text-[20px] leading-[150%] tracking-[0.01em] text-[#354764]">
                        <div className="flex justify-between flex-col lg:flex-row gap-[24px]">
                        <div className="px-[10px] md:px-[62px] flex gap-[45px] justify-between w-full lg:w-[534px] h-[62px] items-center border border-x-0 border-t-0 border-b-[#C2C7D0]">
                            <div onClick={() => changeSearchType("all")} className={`${searchType === "all"? "border-b-[#107269] text-[#107269]" : "border-b-0 text-[#354764]"} w-[84px] md:w-[148px] h-[62px] text-center px-[10px] py-[16px] cursor-pointer border-[3px] border-x-0 border-t-0`}>All</div>
                            <div onClick={() => changeSearchType("blog")} className={`${searchType === "blog"? "border-b-[#107269] text-[#107269]" : "border-b-0 text-[#354764]"} w-[84px] md:w-[148px] h-[62px] text-center px-[10px] py-[16px] cursor-pointer border-[3px]  border-x-0 border-t-0`}>Blog</div>
                            <div onClick={() => changeSearchType("news")} className={`${searchType === "news"? "border-b-[#107269] text-[#107269]" : "border-b-0 text-[#354764]"} w-[84px] md:w-[148px] h-[62px] text-center px-[10px] py-[16px] cursor-pointer border-[3px]  border-x-0 border-t-0`}>News</div>
                            </div>

                        <div  className="w-full md:w-[351px] h-[62px] relative">
                            <Image src="/icons/search-status.png" alt="thribe - Tech Community" width={24} height={24} className="absolute top-[16px] right-[19px]"  />
                            <input 
                            type="text"
                            value={searchInput}
                            onChange={onChangeSearchInput}
                            placeholder="Search" 
                            className="py-[16px] pl-[24px] pr-[40px] w-full md:w-[351px] h-full rounded-[30px] border border-[#C2C7D0] outline-none" />
                        </div>
                        </div>

                        {/* cards */}
                         <div className="flex flex-wrap justify-center min-[882px]:justify-start gap-[24px] mt-[40px] w-full">
                       {
                       filteredPosts.map((post, i) => (
                            
                            <Link href={`/blog/${post.linkTitle}`} key={i}>
                             <BlogCard
                            mediaImage={post.image}
                            title={post.title}
                            author={post.author}
                            date={post.postDate}
                            readTime={post.readTime}
                            type={post.type}
                        />
                        </Link>
                    
                        )) 
                       }

                       {filteredPosts.length == 0 ? <div className="flex items-center justify-center w-full h-[350px] text-[#000] font-[600] text-[26px] mt-[20px] text-center">No Post Available</div> : ""}
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