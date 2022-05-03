import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const data = [
    {
      title: "Skills",
      link: "/skills",
    },
    {
      title: "Projects",
      link: "/projects",
    },
  ];

  const [nav, setNav] = useState(false);

  const toggle = () => {
    setNav(!nav);
  };

  //theme switch
  const themeSwitch = () => {
    if (localStorage.theme !== "dark") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div>
      <nav className="w-full h-[60px] md:h-[80px] px-8 xl:px-16 flex justify-between items-center dark:bg-black dark:text-white">
        <Link to="/" className="text-xl lg:text-3xl cursor-pointer">
          DEDE
        </Link>
        <ul className="hidden md:flex items-center">
          {data.map((item, index) => (
            <Link to={item.link} key={index}>
              <li className="px-4 cursor-pointer lg:text-xl hover:underline">{item.title}</li>
            </Link>
          ))}
          <MdOutlineDarkMode
            onClick={() => themeSwitch()}
            className="cursor-pointer w-7 h-7"
          />
        </ul>

        {/* Hamburger */}
        <div className=" block md:hidden" onClick={toggle}>
          {nav ? <AiOutlineClose size={28} /> : <FiMenu size={28} />}
        </div>
        {/* mobile menu */}
        <div
          className={
            nav
              ? "md:hidden w-full absolute top-[80px] left-0 p-2 flex justify-center text-center z-40  h-screen bg-gray-100 dark:bg-black dark:text-white"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            {data.map((item, index) => (
              <Link to={item.link} key={index}>
                <li className="py-[30px] text-lg">{item.title}</li>
              </Link>
            ))}
            <MdOutlineDarkMode
              onClick={() => themeSwitch()}
              className="cursor-pointer w-7 h-7"
            />
          </ul>
        </div>
      </nav>
      <hr className="border my-2 dark:border-white" />
    </div>
  );
};

export default Navbar;
