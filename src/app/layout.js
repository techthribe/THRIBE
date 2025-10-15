import { Outfit } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import { AllContextProvider } from "./context/allcontext";
import LendYourVoice from "./components/Modals/LendYourVoice"
import JoinTournament from "./components/Modals/JoinTournament" 
import PartnerWithUs from "./components/Modals/PartnerWithUs"
import PremiumMember from "./components/Modals/PremiumMember"
import PremiumThankYouMember from "./components/Modals/PremiumThankYouModal";
import GaListener from "./components/ga-listener";
import FreeThankYouModal from "./components/Modals/FreeThankYouModal";
import PartnerThankYouMessage from "./components/Modals/PartnerThankYouMessage";
import LendVoiceThankYouMessage from "./components/Modals/LendVoiceThankYouMessage";
import LendYourVoiceMobileSideBar from "./components/Modals/LendYourVoiceMobileLinks"
import PartnerMobileSideBar from "./components/Modals/PartnerMobileLinks"
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-outfit",
});

const clashDisplay = localFont({
  src: [
    {
      path: "./utils/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./utils/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
     {
      path: "./utils/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

export const metadata = {
  metadataBase: new URL("https://techthribe.com"), // 👈 your site URL
  title: {
    default: "Thribe Community - Tech Community in Africa — Belong, Share, Thrive",
    template: "%s | Thribe Community - Tech Community in Africa — Belong, Share, Thrive", // 👈 allows dynamic titles
  },
  description:
    "A vibrant, inclusive community for tech minds to share wins, struggles, lessons and real talk. We connect professionals, create safe spaces, and even kick ball together.",
  keywords: [
    "Thribe Community",
    "TechThribe",
    "Tech Community in Africa",
    "Technology",
    "Innovation",
    "Community",
    "Design",
    "Web Development",
    "Startups",
  ],
  authors: [{ name: "Thanau Abbas", url: "https://techthribe.com" }],
  creator: "Thribe Community",
  publisher: "Thribe Community",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techthribe.com",
    title: "Thribe Community - Tech Community in Africa — Belong, Share, Thrive",
    description:
      "A vibrant, inclusive community for tech minds to share wins, struggles, lessons and real talk. We connect professionals, create safe spaces, and even kick ball together.",
    siteName: "Thribe Community - Tech Community in Africa — Belong, Share, Thrive",
    images: [
      {
        url: "https://res.cloudinary.com/chiaka/image/upload/v1759653376/Gemini_Generated_Image_8ulrf68ulrf68ulr_2_1_wdqzug.png", // 👈 Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Thribe Community - Tech Community in Africa — Belong, Share, Thrive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thribe - Tech Community in Africa — Belong, Share, Thrive",
    description:
      "A vibrant, inclusive community for tech minds to share wins, struggles, lessons and real talk. We connect professionals, create safe spaces, and even kick ball together.",
    creator: "@techthribe", // 👈 your handle (optional)
    images: ["https://res.cloudinary.com/chiaka/image/upload/v1759653376/Gemini_Generated_Image_8ulrf68ulrf68ulr_2_1_wdqzug.png"],
  },
  icons: {
    icon: "/brand.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://techthribe.com",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${outfit.variable} ${clashDisplay.variable} font-[400] antialiased text-[18px] sm:text-[20px]`}> 
     <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
         <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-E7F1PT141N`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E7F1PT141N');
          `}
        </Script>
      </head>
      <body 
        className={outfit.className}>
          <GaListener />
         <AllContextProvider>
            <LendYourVoice />
            <JoinTournament />
            <PartnerWithUs />
            <PremiumMember />
            <PremiumThankYouMember />
             <PartnerThankYouMessage />
            <LendYourVoiceMobileSideBar />
            <PartnerMobileSideBar />
            <LendVoiceThankYouMessage />
            <FreeThankYouModal />
            {children}
        </AllContextProvider>
      </body>
    </html>
  );
}
