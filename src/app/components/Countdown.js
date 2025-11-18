"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run timer logic after component mounts on client
    function getTimeRemaining(target) {
      const total = Date.parse(target) - Date.now();
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      return { total, days, hours, minutes, seconds };
    }

    setTimeLeft(getTimeRemaining(targetDate));
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    setMounted(true);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Use a consistent initial render for both server and client
  if (!mounted) {
    return (
      <div className="flex flex-row gap-4">
        {["Days", "Hours", "Minutes", "Seconds"].map((unit) => (
          <div
            key={unit}
            className="flex flex-col gap-1 bg-white w-20 h-20 text-center items-center justify-center rounded-2xl"
          >
            <h1 className="text-[#CFA970]">0</h1>
            <h1 className="text-gray-600">{unit}</h1>
          </div>
        ))}
      </div>
    );
  }

  if (timeLeft.total <= 0) {
    return <p className="text-xl font-bold">{t("timesUp")}</p>;
  }

  return (
    <div className="flex flex-row gap-4 absolute bottom-15 md:bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {[
        { value: timeLeft.days, key: "days" },
        { value: timeLeft.hours, key: "hours" },
        { value: timeLeft.minutes, key: "minutes" },
        { value: timeLeft.seconds, key: "seconds" },
      ].map(({ value, key }) => (
        <div
          key={key}
          className="flex flex-col gap-1 bg-white w-18 h-18 md:w-20 md:h-20 text-center items-center justify-center rounded-2xl shadow-md"
        >
          <h1 className="text-[#CFA970]">{value}</h1>
          <h1 className="text-gray-600 text-sm md:text-base">{t(key)}</h1>
        </div>
      ))}
    </div>
  );
}
