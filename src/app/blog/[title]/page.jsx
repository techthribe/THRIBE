"use client";
import NavigationBar from "@/app/components/navigation";
import MobileNavigationBar from "@/app/components/MobileNav";
import { useParams } from "next/navigation";
import { BlogPosts } from "../../data/Blogpost";
import Image from "next/image";
import Footer from "../../components/Footer";
import { useRouter, usePathname } from "next/navigation";

const Post = () => {
  const pathname = usePathname();
  const params = useParams();
  const title = params?.title;

  const filteredPosts = BlogPosts.filter((post) => post.linkTitle === title);

  const router = useRouter();

  const handleShare = () => {
    const currentUrl =
      typeof window !== "undefined"
        ? window.location.href
        : `https://techthribe.com/blog/${pathname || title}`;

    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title,
          text: title,
          url: currentUrl,
        })
        .catch(() => {});
    } else {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        navigator.clipboard
          .writeText(currentUrl)
          .then(() => alert("Post link copied to clipboard"))
          .catch(() => alert("Could not copy link — please copy manually"));
      } else {
        alert("Sharing not supported. Copy manually: " + currentUrl);
      }
    }
  };

  if (!filteredPosts || filteredPosts.length === 0) {
    return (
      <main>
        <NavigationBar />
        <MobileNavigationBar />

        <section className="relative max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-0 md:pt-[24px] tracking-[1%] space-y-[24px] leading-[150%]">
          <div className="flex gap-x-[35px] cursor-pointer" onClick={() => router.back()}>
            <Image src="/icons/arrow-left.png" width={24} height={24} alt="back" />
            <span className="text-[#000] leading">Back</span>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#000] font-[600] text-[26px]">No Post Available</p>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  const post = filteredPosts[0];

  return (
    <main>
      <NavigationBar />
      <MobileNavigationBar />

      <section className="relative max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-0 md:pt-[24px] tracking-[1%] space-y-[24px] leading-[150%]">

        <div className="flex gap-x-[35px] cursor-pointer" onClick={() => router.back()}>
          <Image src="/icons/arrow-left.png" width={24} height={24} alt="back" />
          <span className="text-[#000] leading">Back</span>
        </div>

        <section className="w-full min-h-screen">

          {/* Main content layout */}
          <div className="flex flex-col md:flex-row justify-between gap-[40px] mt-[24px] w-full md:pl-[55px]">
            {/* <div className="relative">
            <div className="absolute top-0 left-0">
            <div className="bg-[#008] md:-translate-y-1/2 md:transform md:-rotate-90 flex justify-between gap-x-[24px] items-center px-4 md:py-2">
              <div className="w-[50px] md:w-[160px] h-[1px] bg-[#FFE198]" />
              <span className="uppercase font-[600] text-[16px] tracking-[16%] text-[#107269]">
                THR!BE Blog post
              </span>
              <div className="w-[50px] md:w-[160px] h-[1px] bg-[#FFE198]" />
            </div>
            </div>
            </div> */}
           


            <aside className="w-full md:w-[480px] md:sticky md:top-[50px] self-start">
                 <div className="
            absolute 
            -left-[300px] 
            top-[280px]
            md:-translate-y-1/2 
            md:-rotate-90 
            flex items-center gap-x-6
          ">
            <div className="h-px w-12 md:w-[150px] bg-[#FFE198]"  />
            <span className="uppercase font-semibold text-[14px] tracking-widest text-[#107269]">
              THR!BE BLOG POST
            </span>
            <div className="h-px w-12 md:w-[150px] bg-[#FFE198]" />
          </div>
            <div>
              <div className="relative w-full min-h-[350px] md:min-h-[560px] rounded-[40px] overflow-hidden">
                <Image
                  src={post.image}
                  fill
                  alt={post.title}
                  className="object-cover rounded-[40px]"
                />
              </div>

              <div className="mt-[14px] flex justify-between items-start">
                <div className="leading-[150%] tracking-[1%]">
                  <h2 className="text-[#0A1A18]">{post.author}</h2>
                  <h4 className="text-[16px] text-secondaryColor">THR!BE Member</h4>
                </div>

                <div className="flex items-center gap-x-[40px]">
                  <div
                    onClick={handleShare}
                    className="cursor-pointer text-[#107269] leading-[150%] tracking-[1%] flex items-start gap-[8px]"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleShare();
                    }}
                  >
                    <Image src="/icons/Share.png" width={24} height={24} alt="share" />
                    <span>Share</span>
                  </div>

                  <div className="text-[#0A1A18] leading-[150%] tracking-[1%] flex items-center gap-[8px]">
                    <Image src="/icons/heart.png" width={24} height={24} alt="likes" />
                    <span>123</span>
                  </div>
                </div>
              </div>
              </div>
            </aside>

            {/* RIGHT - Post content */}
            <div className="w-full lg:w-[656px] leading-[150%] tracking-[1%] space-y-[24px]">
              <h1 className="text-[#0A1A18] font-[600] font-clash text-[26px] md:text-[46px] leading-[120%] tracking-[3%]">
                {post.title}
              </h1>

              <div>
                <div className="flex items-center gap-x-[24px] text-[16px]">
                  <div className="hidden md:block">
                    {post.type === "BLOG" ? (
                      <button className="w-[70px] h-[32px] bg-[#107269] px-[12px] rounded-[10px] text-[#FFE198]">
                        BLOGS
                      </button>
                    ) : (
                      <button className="w-[70px] h-[32px] bg-[#FFE198] px-[12px] rounded-[10px]">
                        NEWS
                      </button>
                    )}
                  </div>

                  <span>Posted {post.postDate}</span>

                  <div className="flex items-center gap-x-[15px]">
                    <div className="w-[3px] h-[3px] rounded-full bg-[#354764]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="block md:hidden mt-[5px]">
                  {post.type === "BLOG" ? (
                    <button className="w-[70px] h-[32px] bg-[#107269] px-[12px] rounded-[10px] text-[#FFE198]">
                      BLOGS
                    </button>
                  ) : (
                    <button className="w-[70px] h-[32px] bg-[#FFE198] px-[12px] rounded-[10px]">
                      NEWS
                    </button>
                  )}
                </div>
              </div>

              <article>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
};

export default Post;


// "use client";
// import Image from "next/image";

// export default function BlogPost() {
//   return (
//     <div>
//     <main className="w-full flex justify-center">
//       <section className="w-full max-w-[1400px] px-4 md:px-8 py-10 flex gap-[40px]">

//         {/* LEFT — Sticky Column */}
//         <aside className="relative w-full md:w-[420px] md:sticky md:top-[80px] self-start">

//           {/* Rotated Label */}
//           <div className="
//             absolute 
//             -left-[300px] 
//             top-[200px]
//             md:-translate-y-1/2 
//             md:-rotate-90 
//             flex items-center gap-x-6
//           ">
//             <div className="h-px w-12 md:w-40 bg-[#FFE198]" />
//             <span className="uppercase font-semibold text-[14px] tracking-widest text-[#107269]">
//               THR!BE BLOG POST
//             </span>
//             <div className="h-px w-12 md:w-40 bg-[#FFE198]" />
//           </div>

//           {/* Featured Image */}
//           <div className="w-full min-h-[500px] rounded-[40px] overflow-hidden">
//             <Image
//               src="https://res.cloudinary.com/chiaka/image/upload/v1763997118/Frame_1000002107_plmqou.png"
//               alt="Blog Image"
//               width={600}
//               height={800}
//               className="object-cover w-full h-full rounded-[40px]"
//             />
//           </div>

//           {/* Author + Actions */}
//           <div className="mt-6 flex justify-between items-start">
//             <div className="leading-[150%] tracking-[1%]">
//               <h2 className="text-[#0A1A18] font-semibold">By Thanou Abbas</h2>
//               <p className="text-secondaryColor text-[14px]">THR!BE Member</p>
//             </div>

//             <div className="flex items-center gap-[32px]">
//               {/* Share */}
//               <div className="flex items-center gap-2 cursor-pointer text-[#107269]">
//                 <Image src="https://res.cloudinary.com/chiaka/image/upload/v1763997118/Frame_1000002107_plmqou.png" width={20} height={20} alt="share" />
//                 <span>Share</span>
//               </div>

//               {/* Likes */}
//               <div className="flex items-center gap-2 text-[#0A1A18]">
//                 <Image src="/icons/heart.png" width={20} height={20} alt="likes" />
//                 <span>123</span>
//               </div>
//             </div>
//           </div>
//         </aside>

//         {/* RIGHT — Content */}
//         <article className="w-full lg:w-[700px] space-y-6 leading-[165%] tracking-[1%]">

//           {/* Title */}
//           <h1 className="text-[#0A1A18] font-clash font-[700] text-[34px] md:text-[52px] leading-[120%]">
//             AI and The Reality
//           </h1>

//           {/* Meta Info */}
//           <div className="flex items-center gap-5">
//             <button className="bg-[#FFE198] text-[#0A1A18] px-4 py-1 rounded-[8px] text-[14px] font-semibold">
//               NEWS
//             </button>

//             <span className="text-[15px] text-[#354764]">Posted July 19, 2025</span>

//             <div className="flex items-center gap-2">
//               <div className="w-[3px] h-[3px] bg-[#354764] rounded-full" />
//               <span className="text-[15px] text-[#354764]">3 mins read</span>
//             </div>
//           </div>

//           {/* Paragraphs */}
//           <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//           <p className="text-[#0A1A18]">
//             THR!BEs name, logo, design assets, educational materials, and branded content
//             may not be used, copied, distributed, or resold without prior written permission...
//           </p>
//           <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>

//         </article>

//       </section>
//     </main>
//      <section>
//          <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//            <p className="text-[#0A1A18]">
//             Members retain ownership of content they create but grant THR!BE a non-exclusive
//             license to share or promote member-contributed content...
//           </p>
//       </section>
//       </div>
//   );
// }
