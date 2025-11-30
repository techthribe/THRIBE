"use client"
import NavigationBar from "@/app/components/navigation";
import MobileNavigationBar from "@/app/components/MobileNav";
import { useParams } from "next/navigation";
import {BlogPosts} from "../../data/Blogpost"
import Image from "next/image";
import Footer from "../../components/Footer";
import { useRouter } from "next/navigation";

const Post = () => {
    const params = useParams();
    const title = params.title;

    const filteredPosts = BlogPosts.filter(
    (post) => post.linkTitle == title
  );

  const router = useRouter();

    return(
        <main>
            <NavigationBar />
            <MobileNavigationBar />
            {filteredPosts.length == 1 ? <section className="relative max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[24px] tracking-[1%] space-y-[24px] leading-[150%]">
            <div className="flex gap-x-[35px]" onClick={() => router.back()}> 
                <Image src="/icons/arrow-left.png" width={24} height={24} alt="thribe community" />
                <span className="text-[#000] leading">Back</span>
            </div>

            <section className="w-full relative min-h-screen">
                <div className="relative w-full md:absolute md:left-[-270px] md:top-[287px] md:-translate-y-1/2 md:transform md:-rotate-90 flex justify-between gap-x-[24px] items-center px-4 py-2">
                    <div className="w-[50px] md:w-[160px] h-[1px] bg-[#FFE198]"></div>
                    <span className="uppercase font-[600] text-[16px] tracking-[16%] text-[#107269]">THR!BE Blog post</span>
                    <div className="w-[50px] md:w-[160px] h-[1px] bg-[#FFE198]"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-[40px] mt-[24px] w-full md:pl-[55px]">
                    <div className="w-full md:w-[480px]">
                        <div className="relative w-full min-h-[350px] md:min-h-[560px] rounded-[40px]">
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

                    <div className="w-full lg:w-[656px] leading-[150%] tracking-[1%] space-y-[24px]">
                        <h1 className="text-[#0A1A18] font-[600] font-clash text-[26px] md:text-[46px] leading-[120%] tracking-[3%]">{filteredPosts[0].title}</h1>
                        
                        <div>
                            <div className="flex items-center gap-x-[24px] text-[16px]">
                            <div className="hidden md:block">
                            {filteredPosts[0].type == "BLOG" ?   <button className="W-[70px] h-[32px] bg-[#107269] px-[12px] rounded-[10px] text-[#FFE198]">BLOGS</button> :  <button className="W-[70px] h-[32px] bg-[#FFE198] px-[12px] rounded-[10px]">NEWS</button> }
                            </div>
                            <span>Posted {filteredPosts[0].postDate}</span>
                            <div className="flex items-center gap-x-[15px]">
                                <div className="w-[3px] h-[3px] rounded-full bg-[#354764]"></div>
                                <span>{filteredPosts[0].readTime}</span></div>
                        </div>

                        <div className="block md:hidden mt-[5px]">
                            {filteredPosts[0].type == "BLOG" ?   <button className="W-[70px] h-[32px] bg-[#107269] px-[12px] rounded-[10px] text-[#FFE198]">BLOGS</button> :  <button className="W-[70px] h-[32px] bg-[#FFE198] px-[12px] rounded-[10px]">NEWS</button> }
                            </div>
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
        <div>
            <Footer />
        </div>
        </main>
    )
}

export default Post;