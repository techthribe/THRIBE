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

      <section className="relative max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-0 md:pt-[24px] tracking-[1%] space-y-[24px] leading-[150%] pb-[140px]">

        <div className="flex gap-x-[35px] cursor-pointer" onClick={() => router.back()}>
          <Image src="/icons/arrow-left.png" width={24} height={24} alt="back" />
          <span className="text-[#000] leading">Back</span>
        </div>

        <section className="w-full min-h-screen">
            {/* displays only on mobile */}
            <div className="flex items-center gap-x-6 md:hidden">
            <div className="h-px w-12 md:w-[150px] bg-[#FFE198]"  />
            <span className="uppercase font-semibold text-[14px] tracking-widest text-[#107269]">
              THR!BE BLOG POST
            </span>
            <div className="h-px w-12 md:w-[150px] bg-[#FFE198]" />
          </div>

          {/* Main content layout */}
          <div className="flex flex-col md:flex-row justify-between gap-[40px] mt-[24px] w-full md:pl-[55px]">
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
                      <button className="w-[75px] h-[32px] bg-[#107269] px-[12px] rounded-[10px] text-[#FFE198] flex items-center justify-center">
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
                    <button className="w-[75px] h-[32px] bg-[#107269] rounded-[10px] text-[#FFE198] flex items-center justify-center">
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