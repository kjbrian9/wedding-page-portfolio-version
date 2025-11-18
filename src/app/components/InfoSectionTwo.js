import { Libre_Baskerville } from "next/font/google";
import { useTranslation } from "react-i18next";
export const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"], // available weights: 400 (regular), 700 (bold)
  style: ["normal", "italic"], // optional: use "italic" if you want a softer handwritten vibe
  variable: "--font-libre-baskerville",
});

function InfoSectionTwo() {
  const { t } = useTranslation();
  return (
    <div
      id="info-section"
      className="flex min-h-screen flex-col items-center justify-center w-full text-black gap-20 text-left"
    >
      <div className="flex flex-col lg:flex-row items-center gap-7 mb-20">
        <div className="w-80 md:w-120 mt-10">
          <img src="/LocationTwo.jpg" className="rounded-xl"></img>
        </div>
        <div className="flex flex-col gap-10 ">
          <div className="w-80 md:w-150 flex flex-col gap-3 items-center lg:items-start rounded-xl py-5 px-4">
            <h1 className="text-xl lg:text-2xl font-medium  pr-3 ">
              {t("gettingToVenueTitle")}
            </h1>
            <h1 className="text-sm md:text-base w-90 md:w-auto lg:text-start text-center font-medium text-zinc-600">
              {t("gettingToVenueDescription")}
            </h1>
          </div>
          <div className="w-80 md:w-150 flex flex-col gap-3 items-center lg:items-start  rounded-xl py-5 px-4 ">
            <h1 className="text-xl lg:text-2xl font-medium  pr-3 ">
              {t("accommodationTitle")}
            </h1>
            <h1 className="text-sm lg:text-base w-90 md:w-auto lg:text-start text-center font-medium text-zinc-600">
              {t("accommodationDescription")}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-10">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 mt-20 mb-40">
          <div className="w-80 h-120 flex flex-col gap-4 items-center text-center">
            <div className="h-30">
              <img src="/DressIcon2.png" className="w-16 mb-3"></img>
            </div>
            <h1 className="text-3xl font-[Sansita_Swashed] pb-2 ">
              {t("dressCodeTitle")}
            </h1>
            <h1>{t("dressCodeDescription")}</h1>
          </div>
          <div className="w-80 lg:w-90 h-120 flex flex-col gap-4 items-center text-center lg:border-x-2 lg:px-11 border-[#CFA970]">
            <div className="h-30">
              <img src="/BabyIcon2.png" className="w-16 mb-3"></img>
            </div>
            <h1 className="text-3xl font-[Sansita_Swashed] pb-2 border-gray-300">
              {t("childrenTitle")}
            </h1>
            <h1 className="text-center">{t("childrenDescription")}</h1>
          </div>
          <div className="w-80 h-120 flex flex-col gap-4 items-center text-center">
            <div className="h-30">
              <img src="/GiftIcon2.png" className="w-20 mb-3"></img>
            </div>

            <h1 className="text-3xl font-[Sansita_Swashed] pb-2  ">
              {t("giftTitle")}
            </h1>
            <h1>{t("giftDescription")}</h1>
            <a
              href=""
              className="border border-[2.5px] border-[#CFA970] text-[#CFA970] rounded-3xl w-30 py-2 text-3xl text-sm mt-5 cursor-pointer duration-105 hover:scale-105 self-center"
            >
              Revolut
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSectionTwo;
