import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import raksologo from "../../assets/image/raksologo.png";
import PATH from "../../constant/path";
import chat from "../../assets/image/chat.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdVideoCall } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full bg-transparant text-white absolute top-2 z-20 ">
        <nav className="p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={raksologo} alt="logo" className="h-5 w-30 top-5" />
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <div className="flex items-center gap-2 text-blue-950 hover:text-black bg-white px-3 py-1 rounded-full font-medium">
              <MdVideoCall size={30}  />
              <NavLink to={PATH.virtualcall} >
                VIRTUAL CALL
              </NavLink>
            </div>

            <div className="flex items-center gap-2 text-blue-950 hover:text-black bg-white rounded-full px-3 py-1.5 font-medium">
              <img src={chat} alt="chatlogo" className="h-6 w-8" />
              <NavLink to={PATH.chat} >
                CHATS
              </NavLink>
            </div>

            <div className="flex items-center gap-2 text-blue-950 hover:text-black bg-white rounded-full px-3 py-1 font-medium">
              <FaRegCircleUser size={24}  />
              <NavLink to={PATH.menu} >
                MENU
              </NavLink>
            </div>
          </div>
          <button className="text-white md:hidden" onClick={toggleNavbar}>
            {isOpen ? <IoClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </nav>
        {isOpen && (
          <nav className="bg-blue-500 p-5 md:hidden">
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink
                  to={PATH.virtualCall}
                  className="text-white hover:text-gray-300"
                >
                  Virtual Call
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={PATH.chats}
                  className="text-white hover:text-gray-300"
                >
                  Chats
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={PATH.menu}
                  className="text-white hover:text-gray-300"
                >
                  Menu
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
