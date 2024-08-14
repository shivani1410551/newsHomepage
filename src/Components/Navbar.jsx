import { useState } from "react";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  function handleHamburger() {
    setIsShown(!isShown);
  }
  return (
    <div className="sm:my-8 flex items-center justify-between">
      <img src="./assets/images/logo.svg" alt="logo" />
      <button className="md:hidden sm:block  z-20" onClick={handleHamburger}>
        {isShown ? (
          <img src={"./assets/images/icon-menu-close.svg"} alt="open" />
        ) : (
          <img src={"./assets/images/icon-menu.svg"} alt="close" />
        )}
      </button>
      {isShown ? (
        <ul
          className=" md:flex 
        sm:fixed sm:h-[200vh] sm:w-[60vw]
        sm:inset-y-0  
        sm:bg-Offwhite
        translate-x-1/2 transition-all ease-in-out duration-700
        sm:pr-20 sm:pt-[10rem] sm:pl-6
        sm:space-y-8
        "
        >
          <li>Home</li>
          <li> New</li>
          <li> Popular</li>
          <li> Trending</li>
          <li> Categories</li>
        </ul>
      ) : (
        <ul className=" md:flex sm:hidden">
          <li> New</li>
          <li> Popular</li>
          <li> Trending</li>
          <li> Categories</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
