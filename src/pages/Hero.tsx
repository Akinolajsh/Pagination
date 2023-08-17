const Hero = () => {
  return (
    <div className="h-[500px] w-[full] bg-black flex justify-center items-center">
      <div className="flex w-[90%] h-[90%] bg-white justify-between items-center ">
        <div className=" flex bg-rose-400 h-[90%] w-[50%]">
          <div className="flex w-[300px] truncate hover:overflow-visible hover:whitespace-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            ratione placeat quis.
          </div>
        </div>
        <div className="flex bg-amber-600 h-[90%] w-[45%]"></div>
      </div>
    </div>
  );
};

export default Hero;
