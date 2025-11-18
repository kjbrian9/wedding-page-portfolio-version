import { useTranslation } from "react-i18next";
function Rsvp() {
  const { t } = useTranslation();
  return (
    <div id="rsvp-section" className="w-full flex items-center justify-center">
      <div className="w-[80%] md:w-[70%] text-center text-black flex flex-col items-center gap-5 mb-20 rounded-xl py-5 px-4 shadow-md">
        <h1 className="font-medium  text-base  lg:text-2xl text-zinc-600">
          {t("feedbackTitle")}
        </h1>

        <a
          href=""
          className="px-15 py-3 text-xl border border-[2.5px] border-[#CFA970] text-[#CFA970] rounded-3xl   text-sm cursor-pointer duration-105 hover:scale-105 self-center"
        >
          RSVP
        </a>

        <h1 className="text-xs xl:text-base font-medium text-zinc-600 w-65 lg:w-130">
          {t("feedbackSubtext")}
        </h1>
      </div>
    </div>
  );
}
export default Rsvp;
