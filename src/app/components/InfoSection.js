import { useTranslation } from "react-i18next";
import { Allura } from "next/font/google";
import SightseeingCards from "./SightseeingCards";

export const allura = Allura({
  subsets: ["latin"],
  weight: "400", // Allura only has one weight
  variable: "--font-allura",
});

function InfoSection() {
  const { t } = useTranslation();

  return (
    <div
      id="location-section"
      className="flex min-h-screen flex-col items-center"
    >
      <div className="flex min-h-screen flex-col md:flex-row items-center justify-center w-full text-black gap-10 xl:gap-50">
        <div className="flex flex-col items-center ">
          <h1 className="text-[90px] mb-5 font-[Allura] 2xl:text-[120px]">
            {t("locationTitle")}
          </h1>
          <h1 className="text-2xl mb-3 2xl:text-3xl">Continental Club</h1>
          <h1 className="text-sm mb-4 2xl:text-xl">
            London, Westminster, United Kingdom
          </h1>
          <a
            href="https://www.google.co.uk/maps/place/Westminster,+London,+UK/@51.4976605,-0.1727564,14.06z/data=!4m15!1m8!3m7!1s0x47d8a00baf21de75:0x52963a5addd52a99!2sLondon,+UK!3b1!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw!3m5!1s0x487604ddae95b455:0xcd1d64863bc57f40!8m2!3d51.4974948!4d-0.1356583!16zL20vMDlia3Y?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
            className="border border-[1.5px] 2xl:text-xl  2xl:px-6 2xl:py-2  rouded text-sm px-3 py-1 rounded-sm mb-8 cursor-pointer duration-105 hover:scale-105"
          >
            Google Maps
          </a>
        </div>
        <div className="w-80 md:w-100 lg:w-170 2xl:w-240     text-center">
          <img src="/LocationOne.jpg" className="mb-5 rounded-xl"></img>
        </div>
      </div>
      <div className="w-[70%]  border-b-2 border-[#CFA970] mb-20"></div>
    </div>
  );
}

export default InfoSection;
