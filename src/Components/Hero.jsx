const Hero = () => {
  return (
    <div>
      <div className="img-block">
        <img
          src={"./assets/images/image-web-3-mobile.jpg"}
          alt="hero img mobile"
          className="md:hidden sm:block hover:scale-125 transition-transform ease-in-out "
        />
        <img
          src={"./assets/images/image-web-3-desktop.jpg"}
          alt="hero img desktop"
          className="sm:hidden md:block hover:scale-90 transition-transform ease-in-out"
        />
      </div>
      <div className="text-block sm:my-6 sm:space-y-6 md:grid md:grid-cols-2 items-center md:mt-4">
        <h1 className="font-extrabold sm:text-[2.5rem] sm:leading-[2.5rem] text-Verydarkblue md:text-[2.8rem] md:leading-[3rem] md:w-[350px]">
          The Bright Future of Web 3.0?
        </h1>
        <div className="md:w-[350px] ">
          {" "}
          <p className="text-Darkgrayishblue sm:text-[0.95rem] md:text-xs sm:mb-4 ">
            {" "}
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-Softred text-Verydarkblue sm:py-3 sm:px-6 font-bold tracking-[0.2em] uppercase shadow-xl hover:bg-Verydarkblue hover:text-Offwhite hover:scale-75 ease-in-out transition-transform md:mt-2">
            {" "}
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
