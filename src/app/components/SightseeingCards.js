function SightseeingCards({ name, icon }) {
  return (
    <div className="flex flex-row items-center px-5 rounded-2xl shadow-md w-50 h-20 hover:scale-105 duration-105 cursor-pointer">
      <h1 className="w-[70%]">{name}</h1>
      <img src={icon} className="w-8"></img>
    </div>
  );
}

export default SightseeingCards;
