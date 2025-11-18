function EventCards({ time, title, description, icon }) {
  return (
    <div className="justify-start items-center w-80 md:w-110 h-25 bg-white backdrop-blur-xs rounded-xl flex flex-row gap-3 shadow-md hover:shadow-lg justify-center p-4 duration-105 hover:scale-105">
      <div className="relative">
        <div className="w-10 h-10">
          <img
            src={icon}
            className="w-[100%] rotate-x-50 rotate-z-45 hover:-translate-y-1 relative z-100"
          ></img>
        </div>
        <div className="w-10 h-10 bg-[#CFA970]/60 rotate-z-45 rounded-full rotate-x-50 rotate-z-45 absolute top-2 "></div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-2">
          <h1 className="text-[#CFA970]">{time}</h1>
          <h1 className="text-[#CFA970]  font-semibold">{title}</h1>
        </div>
        <h1 className="text-black font-light">{description}</h1>
      </div>
    </div>
  );
}

export default EventCards;
