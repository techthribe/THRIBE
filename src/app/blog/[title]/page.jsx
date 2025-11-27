"use client"
import NavigationBar from "@/app/components/navigation";
import MobileNavigationBar from "@/app/components/MobileNav";
import { useParams } from "next/navigation";
import {BlogPosts} from "../../data/Blogpost"
import Image from "next/image";
import Footer from "../../components/Footer";

const Post = () => {
    const params = useParams();
    const title = params.title;

    const filteredPosts = BlogPosts.filter(
    (post) => post.linkTitle == title
  );

  console.log(filteredPosts)
    return(
        <main>
            <NavigationBar />
            <MobileNavigationBar />
            {filteredPosts.length == 1 ? <section className="relative max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[24px] tracking-[1%] space-y-[24px] leading-[150%]">
            <div className="flex gap-x-[40px]"> 
                <Image src="/icons/arrow-left.png" width={24} height={24} alt="thribe community" />
                <span className="text-[#000] leading">Back</span>
            </div>

            <section className="w-full relative min-h-screen">
                <div className="absolute left-[-270px] top-[287px] -translate-y-1/2 transform -rotate-90 flex gap-x-[24px] items-center px-4 py-2">
                    <div className="w-[160px] h-[1px] bg-[#FFE198]"></div>
                    <span className="uppercase font-[600] text-[16px] tracking-[16%] text-[#107269]">THR!BE Blog post</span>
                    <div className="w-[160px] h-[1px] bg-[#FFE198]"></div>
                </div>

                <div className="flex justify-between gap-[40px] mt-[24px] w-full pl-[55px]">
                    <div className="w-[480px]">
                        <div className="relative w-full min-h-[560px] rounded-[40px]">
                            <Image src={filteredPosts[0].image} fill alt="thribe community" className="object-cover rounded-[40px]" />
                        </div>
                        <div className="mt-[14px] flex justify-between items-start">
                            <div className="leading-[150%] tracking-[1%]">
                                <h2 className="text-[#0A1A18]">{filteredPosts[0].author}</h2>
                                <h4 className="text-[16px] text-secondaryColor">THR!BE Member</h4>
                            </div>

                            <div className="flex items-center gap-x-[40px]">
                                <div className="text-[#107269] leading-[150%] tracking-[1%] flex items-start gap-[8px]">
                                     <Image src="/icons/Share.png" width={24} height={24} alt="thribe community" className="object-cover" />
                                     <span>Share</span>
                                </div>
                                <div className="text-[#0A1A18] leading-[150%] tracking-[1%] flex items-center gap-[8px]">
                                     <Image src="/icons/heart.png" width={24} height={24} alt="thribe community" className="object-cover" />
                                     <span>123</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[656px] leading-[150%] tracking-[1%] space-y-[24px]">
                        <h1 className="text-[#0A1A18] font-[600] font-clash text-[46px] leading-[120%] tracking-[3%]">{filteredPosts[0].title}</h1>
                        <div className="flex items-center gap-x-[24px] text-[16px]">
                            {filteredPosts[0].type == "BLOG" ?   <button className="W-[70px] h-[32px] bg-[#107269] px-[12px] rounded-[10px] text-[#FFE198]">BLOGS</button> :  <button className="W-[70px] h-[32px] bg-[#FFE198] px-[12px] rounded-[10px]">NEWS</button> }
                            
                            <span>Posted {filteredPosts[0].postDate}</span>
                            <div className="flex items-center gap-x-[15px]">
                                <div className="w-[3px] h-[3px] rounded-full bg-[#354764]"></div>
                                <span>{filteredPosts[0].readTime}</span></div>
                        </div>

                        <article>
                            <div
                                dangerouslySetInnerHTML={{ __html: filteredPosts[0].content }}
                            />

                        </article>

                    </div>

                </div>
                 
            </section>
            </section>
                :
            <section>No Post Available</section>
            }
        <div className="mt-[30px]">
            <Footer />
        </div>
        </main>
    )
}

export default Post;