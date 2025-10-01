"use client"

import { createContext, useContext, useState } from "react";
const AllContext = createContext();

export const AllContextProvider = ({children}) => {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [lendYourVoiceThribeModal, setLendYourVoiceThribeModal] = useState(false)
    const [joinTournament, setJoinTournament] = useState(false)
     const [partnerWithUs, setPartnerWithUs] = useState(false)
     const [premiumMemberModal, setPremiumMemberModal] = useState(false)
     const [premiumThankYouModal, setPremiumThankYouModal] = useState(false)
     const [lendYourVoiceMobileSideBar, setLendYourVoiceMobileSideBar] = useState(false);

    const toggleMobileNavbarFunction = () => setToggleNavbar((prev) => !prev)

    

    const toggleLendYourVoiceMobileSideBar = () => {
             setJoinTournament(false)
            setPartnerWithUs(false)
            setLendYourVoiceThribeModal(false)
            setPremiumMemberModal(false)
            setPremiumThankYouModal(false)
            setLendYourVoiceMobileSideBar((prev) => !prev)
}


    const togglePremiumThankYouModal = () => {
             setJoinTournament(false)
            setPartnerWithUs(false)
            setLendYourVoiceThribeModal(false)
            setPremiumMemberModal(false)
            setPremiumThankYouModal((prev) => !prev)
            setLendYourVoiceMobileSideBar(false)

    }

    const togglePremiumMemberModal = () => {
            setJoinTournament(false)
            setPartnerWithUs(false)
            setLendYourVoiceThribeModal(false)
            setPremiumThankYouModal(false)
            setLendYourVoiceMobileSideBar(false)
            setPremiumMemberModal((prev) => !prev)
    }

    const toggleLendYourVoiceThribeModal = () => {
         setJoinTournament(false)
         setPartnerWithUs(false)
         setPremiumMemberModal(false)
          setPremiumThankYouModal(false)
          setLendYourVoiceMobileSideBar(false)
        setLendYourVoiceThribeModal((prev) => !prev)
    }

    const toggleJoinTournamentModal = () => {
        setLendYourVoiceThribeModal(false)
        setPartnerWithUs(false)
         setPremiumMemberModal(false)
          setPremiumThankYouModal(false)
          setLendYourVoiceMobileSideBar(false)
        setJoinTournament((prev) => !prev)
    }

    const togglePartnerWithUsModal = () => {
        setLendYourVoiceThribeModal(false)
         setJoinTournament(false)
          setPremiumMemberModal(false)
           setPremiumThankYouModal(false)
           setLendYourVoiceMobileSideBar(false)
        setPartnerWithUs((prev) => !prev)
    }

    return (
        <AllContext.Provider 
            value={{
                toggleNavbar,
                toggleMobileNavbarFunction,
                lendYourVoiceThribeModal,
               toggleLendYourVoiceThribeModal,
               joinTournament,
               toggleJoinTournamentModal,
               partnerWithUs,
               togglePartnerWithUsModal,
               premiumMemberModal,
               togglePremiumMemberModal,
               premiumThankYouModal,
               togglePremiumThankYouModal,
               lendYourVoiceMobileSideBar,
               toggleLendYourVoiceMobileSideBar
            }}
        >
            {children}
        </AllContext.Provider>
    )
};

export const useAllContext = () => {
  const context = useContext(AllContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
