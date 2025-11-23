"use client";
import WelcomeSection from "./components/WelcomeSection";
import SecondSection from "./components/SecondSection";
import EventSection from "./components/EventSection";
import InfoSection from "./components/InfoSection";
import InfoSectionTwo from "./components/InfoSectionTwo";
import Rsvp from "./components/Rsvp";
import { Poppins } from "next/font/google";
import "./i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // all available weights
});
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import { Sansita_Swashed } from "next/font/google";
import ContactsSection from "./components/ContactsSection";

export const sansitaSwashed = Sansita_Swashed({
  subsets: ["latin"],
  variable: "--font-sansita-swashed",
  weight: ["300", "400", "500", "600", "700", "800", "900"], // available weights
});

export default function Home() {
  const { i18n } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof navigator === "undefined") {
      setReady(true);
      return;
    }
    const browserLang = navigator.language?.split("-")[0];
    const apply = async () => {
      if (browserLang && i18n?.language !== browserLang) {
        try {
          await i18n.changeLanguage(browserLang);
        } catch (e) {
          // ignore and continue
        }
      }
      setReady(true);
    };
    apply();
  }, [i18n]);
  if (!ready) return null;

  return (
    <div className="bg-white text-black font-[Poppins]">
      <div className="absolute  right-2 flex flex-row gap-2 items-center mt-3 xl:mt-5">
        <button
          className="h-6 w-6 2xl:h-12 2xl:w-12 lg:h-8 lg:w-8 text-white font-semibold cursor-pointer bg-[url(/UKflag.svg)] bg-contain bg-no-repeat duration-105 hover:scale-105 "
          onClick={() => i18n.changeLanguage("en")}
        ></button>
        <button
          className="h-6 w-6 2xl:h-12 2xl:w-12 lg:h-8 lg:w-8  text-white font-semibold cursor-pointer bg-[url(/DEflag.svg)] bg-contain bg-no-repeat duration-105 hover:scale-105"
          onClick={() => i18n.changeLanguage("de")}
        ></button>
        <button
          className="h-6 w-6 2xl:h-12 2xl:w-12 lg:h-8 lg:w-8  text-white font-semibold cursor-pointer bg-[url(/HUflag.svg)] bg-contain bg-no-repeat duration-105 hover:scale-105"
          onClick={() => i18n.changeLanguage("hu")}
        ></button>
      </div>
      <WelcomeSection> </WelcomeSection>
      <SecondSection></SecondSection>
      <EventSection></EventSection>
      <InfoSection></InfoSection>
      <Rsvp></Rsvp>
      <InfoSectionTwo></InfoSectionTwo>
      <ContactsSection></ContactsSection>
    </div>
  );
}
