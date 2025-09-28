"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useAllContext } from "../context/allcontext";

const Collaborate = () => {
  const {toggleLendYourVoiceThribeModal, toggleJoinTournamentModal} = useAllContext()
   const intervalRef = useRef(null);
   const jerseyIntervalRef = useRef(null);
  const [hoverLendVoice, setHoverLendVoice] = useState(false);
  const [hoverJoinTournament, setHoverJoinTournament] = useState(false);
  const [hoverJerseyContainer, setHoverJerseyContainer] = useState(false)
  const [activeJerseyImage, setActiveJerseyImage] = useState(0)
  const [currentImg, setCurrentImg] = useState(0);
  const animationImages = ["/img/tote1.png",  
          "/img/tote2.png", 
          "https://res.cloudinary.com/chiaka/image/upload/v1759018554/Property_1_Stickers_Packaging_ffaa1y.png",
          "https://res.cloudinary.com/chiaka/image/upload/v1759018553/Property_1_Component_64_yq1t1a.png",  
          ];

  const jerseyImages = ["https://res.cloudinary.com/chiaka/image/upload/v1759018514/shirt_ih6qka.png","https://res.cloudinary.com/chiaka/image/upload/v1759022875/Property_1_Component_128_so16jm.png"]

   useEffect(() => {
    if (hoverJerseyContainer) {
      jerseyIntervalRef.current = setInterval(() => {
        setActiveJerseyImage((prev) => (prev === 0 ? 1 : 0));
      }, 1000); // switch every 4s
    } else {
      clearInterval(jerseyIntervalRef.current);
      intervalRef.current = null;
       setActiveJerseyImage(0); // reset to first image when not hovered
    }

    return () => clearInterval(jerseyIntervalRef.current);
  }, [hoverJerseyContainer]);

  const startInterval = () => {
    if (intervalRef.current) return; // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % animationImages.length);
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCurrentImg(0); // reset if you want first image on leave
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // cleanup on unmount
  }, []);

  return (
    <section className="py-[40px] md:py-[120px] w-full">
      <div className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0">
        <h1 className="text-[16px] tracking-[16%] text-[#354764] uppercase">
          Support, Partner, Collaborate
        </h1>

        <h3 className="font-clash font-[600] my-[16px] text-[#0A1A18] text-[26px] md:text-[46px] leading-[100%] tracking-[3%] flex text-left flex-row flex-wrap md:items-center gap-y-[11px] md:gap-y-0 gap-x-[5px]">
          <span>Let&#39;s Build Something</span>
          <div className="flex gap-x-[12px]">
            <span>Bigger</span>
            <div className="relative w-[32px] md:w-[46px] h-[32px] md:h-[46px] rounded-full shrink-0">
              <Image
                src="/img/build.png"
                fill
                alt="thribe community"
                className="object-fit rounded-full shrink-0"
              />
            </div>
          </div>
        </h3>

        <h3 className="tracking-[2%] text-secondaryColor mt-[8px]">
          Partner With Us: We&#39;re open to brand collaboration, speaker
          partnerships, and startup support.
        </h3>

        <div className="mt-[40px] md:mt-[80px] flex flex-wrap lg:flex-nowrap justify-between gap-[40px]">
          {/* Card 1 */}
          <div
            onMouseEnter={() => setHoverLendVoice(true)}
            onMouseLeave={() => setHoverLendVoice(false)}
            onClick={toggleLendYourVoiceThribeModal}
            className={`${
              !hoverLendVoice? "bg-[#B7E2DE]" : "shadow-[7px_7px_0px_0px_#64C0B7] bg-primaryGreen text-[#fff]"
            } min-h-[459px] sm:min-h-[653px] w-full sm:w-[600px] mx-auto cursor-pointer rounded-[16px] sm:rounded-[40px] border border-[#17A194]  p-[24px] sm:p-[40px] `}
          >
            <div className="relative w-full h-[213px] sm:h-[373px] rounded-[11px] sm:rounded-[20px] mx-auto">
             {!hoverLendVoice ? <Image
                src="https://res.cloudinary.com/chiaka/image/upload/v1759018854/8AB6934A-95F6-4001-BEF2-A717D6879770_hdyvtd.png"
                fill
                alt="build with thribe community"
                className="object-cover rounded-[20px]"
              /> :  <Image
                src="https://res.cloudinary.com/chiaka/image/upload/v1759018853/552F5143-0D49-4536-93FC-5CA6E8520604_1_snuv8v.png"
                fill
                alt="build with thribe community"
                className="object-cover rounded-[20px]"
              /> } 
            </div>
            <div className="mt-[16px] sm:mt-[24px] space-y-[13px] sm:space-y-[24px] text-[#0A1A18]">
              <h2
                className={`font-clash leading-[120%] tracking-[3%] font-[600] ${
                  hoverLendVoice ? "text-[#fff]" : ""
                }`}
              >
                Lend Your Voice
              </h2>
              {!hoverLendVoice ? (
                <p className="tracking-[2%] leading-[150%]">
                  Add your perspective, share your story, or spark a
                  conversation. Every voice helps shape a tech culture that
                  feels more human.
                </p>
              ) : (
                <p className="tracking-[2%] leading-[150%] text-[#fff]">
                  Help Someone learn, grow and THRIVE. Your support unlock access
                  to tools, events, and life-changing opportunities. Pay it
                  forward.
                </p>
              )}

              <div>
                <button
                  className={`${
                    !hoverLendVoice
                      ? "bg-[#107269] w-[104px] text-[#fff]"
                      : "w-[284px] bg-[#fff]"
                  } transition-all duration-500 ease-in-out shadow-[4px_4px_0px_0px_#003E39] flex justify-center items-center cursor-pointer  font-[500] text-[18px]  h-[44px] sm:h-[56px] rounded-[100px]`}
                >
                  {!hoverLendVoice ? (
                    <Image
                      src="/icons/arrow-white.png"
                      width={24}
                      height={24}
                      alt="tech community in Nigeria"
                    />
                  ) : (
                    <div className="flex justify-center items-center space-x-[14px] text-primaryGreen">
                      <div
                        className={`${!hoverLendVoice ? "opacity-0 delay-500" : "opacity-100 delay-0"} min-w-[180px] transition-all  duration-500 ease-in-out`}
                      >
                        Start the Conversation
                      </div>
                      <span className="material-symbols-outlined text-[24px]">
                        Arrow_forward
                      </span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={toggleJoinTournamentModal}
            onMouseEnter={() => {
              setHoverJoinTournament(true);
              startInterval();
            }}
            onMouseLeave={() => {
              setHoverJoinTournament(false);
              stopInterval();
            }}
            className={`${
              !hoverJoinTournament
                ? "bg-[#FFF1D0]"
                : "shadow-[7px_7px_0px_0px_#F97502] bg-[#FFE198] text-[#fff]"
            } cursor-pointer rounded-[16px] sm:rounded-[40px] border border-[#E8CD8A]  p-[24px] sm:p-[40px] min-h-full sm:min-h-[653px] w-full sm:w-[600px] mx-auto`}
          >
            <div
              className={`relative  w-full h-[213px] sm:h-[373px] rounded-[20px] mx-auto ${
                !hoverJoinTournament ? "bg-[#D3D7DA]" : "bg-[#fff]"
              }`}
            >
              {!hoverJoinTournament ? (
                <Image
                  src="/img/build3.png"
                  fill
                  alt="build with thribe community"
                  className="object-center rounded-[20px]"
                />
              ) : (
                <Image
                  src={animationImages[currentImg]}
                  fill
                  alt="build with thribe community"
                  className="transition-all duration-1000 ease-in-out object-center rounded-[20px]"
                />
              )}
            </div>

            <div className="mt-[16px] sm:mt-[24px] space-y-[13px] sm:space-y-[24px] text-[#0A1A18]">
              <h2 className="leading-[120%] tracking-[3%] font-clash font-[600]">
                {!hoverJoinTournament
                  ? "Join The Tournament"
                  : "Rep the Brand"}
              </h2>
              <p className="tracking-[2%] ">
                {!hoverJoinTournament
                  ? "Step off the screen and onto the field. Play, cheer, or rep your team/company- because thriving means balance, fun, and community spirit."
                  : "Wear the spirit of THRIBE everywhere you go. Grab your merch, rep the tribe, and show the world that thriving is more than work - it's a lifestyle."}
              </p>

              <div>
                <button
                  className={`${
                    !hoverJoinTournament ? " w-[104px]" : "w-[284px]"
                  } transition-all duration-500 ease-in-out text-[#fff] shadow-[4px_4px_0px_0px_#003E39] bg-[#107269] flex justify-center items-center cursor-pointer  font-[500] text-[18px]  h-[44px] sm:h-[56px] rounded-[100px]`}
                >
                  {!hoverJoinTournament ? (
                    <Image
                      src="/icons/arrow-white.png"
                      width={24}
                      height={24}
                      alt="tech community in Nigeria"
                    />
                  ) : (
                    <div className="flex justify-center items-center space-x-[14px]">
                      <div
                        className={`${
                          !hoverJoinTournament
                            ? "opacity-0 delay-500"
                            : "opacity-100 delay-0"
                        } min-w-[160px] transition-all  duration-500 ease-in-out`}
                      >
                        Rep the Brand
                      </div>
                      <span className="material-symbols-outlined text-[24px]">
                        Arrow_forward
                      </span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* comming soon */}
        <div 
         onMouseEnter={() => setHoverJerseyContainer(true)}
         onMouseLeave={() => setHoverJerseyContainer(false)}
        className={`flex flex-col md:flex-row items-center justify-between gap-[24px] mt-[48px] ${!hoverJerseyContainer ? "border border-[#FCC08B] bg-[#FEF1E6] text-primaryTextColor" : "text-[#EBEDF0] border border-t-0 border-l-0 border-b-[6px] border-r-[6px] border-[#F97502] bg-[#693101]"}  rounded-[40px] p-[24px] sm:p-[40px] w-full`}>
            {!hoverJerseyContainer ? <div className="relative w-full sm:w-[520px] h-[213px] sm:h-[373px] rounded-[20px] overflow-hidden">
              <Image src="https://res.cloudinary.com/chiaka/image/upload/v1758798676/tournament_sdfcge.png" fill alt="tech community in Nigeria" className="object-cover" />
            </div>:     
            <div className="relative w-full sm:w-[520px] h-[213px] sm:h-[373px] rounded-[20px] overflow-hidden">
        {jerseyImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out rounded-[20px] ${
              activeJerseyImage === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
       }
          <div className="w-full md:w-[620px] space-y-[14px] sm:space-y-[24px]">
            <h1 className="font-[600] font-clash leading-[120%] tracking-[3%]">Join the Tournamnet</h1>
            <div className="">
              Step off the screen and onto the field. Play, cheer, or rep your team/company because thriving means balance, fun, and 
              community spirit.
              <p className="hidden md:block">This isn&#39;t just a game, it&#39;s where techies swap keyboards for jerseys, competition meets collaboration, 
              and friendships are built beyond the screen. Whether you&#39;re scoring goals, cheering from the sidelines, or 
              rocking your team colors, 
              you&#39;re part of something bigger. Get ready to connect, sweat, laugh, and thrive together.
              </p>
            </div>

            <button className={`cursor-pointer rounded-[100px] w-[164px] sm:w-[190px] h-[47px] sm:h-[56px] ${!hoverJerseyContainer ? "border border-[#F97502] text-[#F97502]" : "border border-[#FFFFFF] text-[#FFFFFF]"}  px-[29px] sm:px-[40px] font-[500] text-[18px]  leading-[150%] tracking-[3%]`}>
              Coming soon
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Collaborate;
