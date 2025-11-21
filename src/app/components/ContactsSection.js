import { useTranslation } from "react-i18next";
function ContactsSection() {
  const { t } = useTranslation();
  return (
    <div
      className="flex min-h-screen flex-col items-center"
      id="contacts-section"
    >
      <h1 className="text-black text-[80px] font-semibold font-[Allura]">
        {t("contactsTitle")}
      </h1>
      <h1 className="mb-10">{t("contactsSubTitle")}</h1>
      <div className="flex flex-col lg:flex-row gap-2 mb-15 gap-10">
        <div className="flex flex-col items-center lg: mb-0 rounded-xl py-5 px-4 shadow-md w-75">
          <h1 className="mb-2 font-semibold text-xl">Tomas</h1>
          <a
            href="mailto:brian.julius.k@gmail.com"
            className="border border-[1.5px] rouded text-sm px-3 py-1 rounded-sm mb-5 cursor-pointer duration-105 hover:scale-105"
          >
            Email tomas@gmail.com
          </a>
          <h1>+36 30 444 3922</h1>
        </div>
        <div className="flex flex-col items-center  lg: mb-0 rounded-xl py-5 px-4 shadow-md w-75">
          <h1 className="mb-2 font-semibold text-xl">Jane</h1>
          <a
            href="mailto:brian.julius.k@gmail.com"
            className="border border-[1.5px] rouded text-sm px-3 py-1 rounded-sm mb-5 cursor-pointer duration-105 hover:scale-105"
          >
            Email jane.98@web.de
          </a>
          <h1>+4915744405808</h1>
        </div>
      </div>
      <hr className="w-80 lg:w-150 h-[1.5px] bg-[#CFA970] mb-10 border-none "></hr>
      <div className="w-80 lg:w-150 text-center mb-10">
        <h1 className="font-medium">{t("contactsText")}</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mb-30">
        <div className="flex flex-col items-center mb-10 lg:mb-0 rounded-xl py-5 px-4 shadow-md w-80">
          <h1 className="font-semibold text-xl">Daniel</h1>
          <h1 className="text-gray-700 mb-2">{t("weddingPlanner")}</h1>
          <a
            href="mailto:brian.julius.k@gmail.com"
            className="border border-[1.5px] rouded text-sm px-3 py-1 rounded-sm mb-5 cursor-pointer duration-105 hover:scale-105"
          >
            Email Daniel@wedding.hu
          </a>
          <a
            href=""
            className="font-semibold flex flex-row items-center gap-2 border border-[1.5px] rouded text-sm px-3 py-1 rounded-sm mb-5 cursor-pointer duration-105 hover:scale-105"
          >
            Website
            <img src="/WebIcon.svg" className="w-5"></img>
          </a>
        </div>
        <div className="flex flex-col items-center rounded-xl py-5 px-4 shadow-md w-80">
          <h1 className="font-semibold text-xl">John</h1>
          <h1 className="text-gray-700 mb-2">{t("masterOfCeremony")}</h1>
          <a
            href="mailto:wedding@eliteevents.hu"
            className="border border-[1.5px] rouded text-sm px-3 py-1 rounded-sm mb-5 cursor-pointer duration-105 hover:scale-105"
          >
            Email wedding@events.hu
          </a>
          <a
            href=""
            className="font-semibold flex flex-row items-center gap-2 border border-[1.5px] rouded text-sm px-3 py-1 rounded-sm mb-5 cursor-pointer duration-105 hover:scale-105"
          >
            Website
            <img src="/WebIcon.svg" className="w-5"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactsSection;
