"use client";
import Countdown from "./Countdown";
import { useTranslation } from "react-i18next";
const scrollToTarget = (targetId) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

function WelcomeSection() {
  const { t } = useTranslation();
  return (
    <div className="mb-20 lg:mb-0 flex min-h-screen flex-col items-center justify-center w-full bg-[#FADBBA] text-white overflow-hidden bg-[url(/KittyX.jpg)] bg-center bg-size-[1200px] lg:bg-cover  bg-no-repeat">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="flex flex-col items-center gap-6 z-100">
        <h1 className="font-[Allura] text-5xl">{t("gettingMarriedText")}</h1>
        <h1 className="w-80 text-center lg:w-auto">{t("joinUsText")}</h1>
        <span className="w-30 border-b"></span>
        <h1>September 5, 2026</h1>
        <Countdown targetDate="2026-09-05T15:00:00" />
        <button
          onClick={() => scrollToTarget("event-section")}
          className="bg-white text-[#CFA970] px-7 py-3 rounded-3xl hover:cursor-pointer duration-105 hover:scale-105"
        >
          {t("viewProgram")}
        </button>
      </div>
    </div>
  );
}

export default WelcomeSection;
