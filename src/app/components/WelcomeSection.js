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
    <div className="mb-20 lg:mb-0 flex min-h-screen flex-col items-center ">
      <h1 className="text-3xl md:text-[40px] font-[Allura] 2xl:text-[80px]">
        Tomas & Jane
      </h1>
      <div className="flex flex-row gap-4 lg:gap-10 mb-1">
        <button
          onClick={() => {
            scrollToTarget("event-section");
          }}
          className="text-sm 2xl:text-xl duration-105 hover:scale-105 cursor-pointer "
        >
          Events
        </button>
        <button
          onClick={() => {
            scrollToTarget("location-section");
          }}
          className="text-sm duration-105 hover:scale-105 cursor-pointer"
        >
          Location
        </button>
        <button
          onClick={() => scrollToTarget("info-section")}
          className="text-sm 2xl:text-xl duration-105 hover:scale-105 cursor-pointer"
        >
          Info
        </button>
        <button
          onClick={() => {
            scrollToTarget("rsvp-section");
          }}
          className="text-sm 2xl:text-xl duration-105 hover:scale-105 cursor-pointer"
        >
          RSVP
        </button>
        <button
          onClick={() => {
            scrollToTarget("contacts-section");
          }}
          className="text-sm 2xl:text-xl duration-105 hover:scale-105 cursor-pointer"
        >
          Contacts
        </button>
      </div>
      <div className="bg-black h-[70vh] w-full mb-5 relative">
        <img
          src="/bgOne.jpg"
          className="opacity-60 object-cover lg:object-[0%_65%] w-full h-full"
        ></img>
        <Countdown targetDate="2026-09-05T15:00:00"></Countdown>
      </div>
      <div className="flex flex-col items-center text-center z-100">
        <h1 className="font-[Allura] text-5xl 2xl:text-[70px] mb-1">
          {t("gettingMarriedText")}
        </h1>
        <h1 className=" -80 text-center lg:w-auto mb-5 2xl:text-2xl">
          {t("joinUsText")}
        </h1>
        <span className="w-30 border-b mb-5 2xl:w-70"></span>
        <h1 className="2xl:text-2xl">September 5, 2026</h1>
      </div>
    </div>
  );
}

export default WelcomeSection;
