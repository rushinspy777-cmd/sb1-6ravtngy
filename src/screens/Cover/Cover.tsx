export const CoverOld = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1920px] min-h-[960px] relative">
      {/* Left content column */}
      <div className="flex flex-col w-[833px] h-[960px] items-start justify-between px-16 py-32 absolute top-0 left-[158px]">
        {/* Logo area */}
        <div className="relative w-[362px] h-[145px]">
          <img
            className="absolute w-[90.52%] h-[61.64%] top-[15.16%] left-[8.60%]"
            alt="Instor"
            src="/instor.svg"
          />
          <img
            className="absolute w-[35.28%] h-[83.42%] top-[15.30%] left-0"
            alt="Rectangle stroke"
            src="/rectangle-22--stroke-.svg"
          />
        </div>

        {/* Headline text */}
        <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-transparent text-[64px] tracking-[0] leading-[64px]">
          <span className="font-extrabold text-[#000000] leading-[83.2px]">
            Furniture Store Website Prototype <br />
          </span>
          <span className="font-semibold text-[#e2964a] leading-[83.2px] underline">
            Desktop &amp; Mobile
          </span>
        </div>

        {/* Version label */}
        <div className="relative flex items-center self-stretch [font-family:'Poppins',Helvetica] font-extrabold text-gray-400 text-5xl tracking-[0] leading-[62.4px]">
          V. 1.0.0
        </div>
      </div>

      {/* Right side phone mockup image */}
      <img
        className="absolute top-0 left-[733px] w-[1105px] h-[960px]"
        alt="Galaxy note ultra"
        src="/galaxy-note-20-ultra.png"
      />
    </div>
  );
};
