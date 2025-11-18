"use client";
import EventCards from "./EventCards";
import { useTranslation } from "react-i18next";

function EventSection() {
  const { t } = useTranslation();
  return (
    <div className="mb-20 lg:mb-0 flex min-h-screen">
      <div
        id="event-section"
        className="flex-col items-center justify-center w-full bg-black relative text-white  bg-[url(/bgTwo.jpg)] bg-center bg-cover bg-no-repeat"
      >
        {" "}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="flex-col gap-13 relative items-center justify-center flex">
          <div className="w-80 xl:w-120 text-black text-center items-center justify-center flex flex-col">
            <h1 className="mt-10  font-[Allura] text-5xl text-white border-b-2 w-80 mb-3">
              {t("eventOrder")}
            </h1>
            <h1 className="text-white sm:w-80 md:w-120">
              {t("eventSectionSubheading")}
            </h1>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6  mb-50 lg: mb-0">
            <EventCards
              time="16:00"
              title={t("eventOneTitle")}
              icon="/DanceIcon.svg"
              description={t("eventOneDescription")}
            />
            <EventCards
              time="17:00"
              title={t("eventTwoTitle")}
              icon="/heartIcon.png"
              description={t("eventTwoDescription")}
            />
            <EventCards
              time="19:30"
              title={t("eventThreeTitle")}
              icon="/UtensilsIcon.svg"
              description={t("eventThreeDescription")}
            />
            <EventCards
              time="22:30"
              title={t("eventFourTitle")}
              description={t("eventFourDescription")}
              icon="./CakeIcon.svg"
            ></EventCards>

            <EventCards
              time="23:30"
              title={t("eventFiveTitle")}
              icon="/UtensilsIcon.svg"
              description={t("eventFiveDescription")}
            />
            <EventCards
              time="00:00"
              title={t("eventSixTitle")}
              icon="/MusicIcon.svg"
              description={t("eventSixDescription")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSection;
