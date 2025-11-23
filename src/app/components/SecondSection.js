import { useTranslation } from "react-i18next";

function SecondSection() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center w-full mb-20 ">
      <div className="flex flex-col xl:flex-row gap-5 2xl:gap-20 items-center justify-center">
        <img
          src="/CoupleOne.jpg"
          className="w-80 lg:w-120 2xl:w-150 rounded-xl hover:scale-105 duration-300"
          alt="Couple image 1"
        />
        <div className="lg:w-180 text-black text-center xl:text-start flex flex-col items-center xl:items-start justify-center">
          <h1 className="font-[Allura] text-4xl 2xl:text-5xl">
            {t("sectionTwoTitle")}
          </h1>
          <h1 className="w-80 lg:w-160 mb-10 lg:mb-4 2xl:text-xl">
            {t("sectionTwoText")}
          </h1>
          <div className="flex gap-5 items-center justify-center">
            <img
              src="/CoupleTwo.jpg"
              className="w-40 lg:w-80 2xl:w-100 rounded-xl hover:scale-105 duration-300"
              alt="Couple image 2"
            />
            <img
              src="/CoupleThree.jpg"
              className="w-40 lg:w-80 2xl:w-100 rounded-xl hover:scale-105 duration-300"
              alt="Couple image 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
