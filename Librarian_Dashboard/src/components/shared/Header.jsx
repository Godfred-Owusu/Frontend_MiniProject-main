import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBell, HiOutlineChatAlt } from "react-icons/hi";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";
import { MenuToggleContext } from "../context/MenuToggleContext";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  // theme useContext
  const { darkMood, setDarkMood } = useContext(ThemeContext);
  //   menu useContext
  const { sidebarToggle, setSidebarToggle } = useContext(MenuToggleContext);
  const toggleDarkMood = () => {
    setDarkMood((prev) => !prev);
  };
  const toggleSidebar = () => {
    setSidebarToggle((prev) => !prev);
  };

  return (
    <div className=" w-full">
      <div
        className="
            dark:bg-slate-100 bg-white h-16 px-4 flex justify-between items-center shadow-md"
      >
        <div className="flex justify-centerss items-center">
          {/* left */}
          {/* nav menu */}
          <div className="flex-1 cursor-pointer" onClick={toggleSidebar}>
            <BiMenuAltRight fontSize={25} />
          </div>
          {/* search input */}
          <div className="flex justify-start items-center border border-gray-200 w-fit rounded-md px-2">
            <CiSearch fontSize={22} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="text-sm outline-none h-10 w-[24rem] px-1"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center gap-2 mr-2">
          <Popover className="relative">
            <PopoverButton>Solutions</PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col">
              <a href="/analytics">Analytics</a>
              <a href="/engagement">Engagement</a>
              <a href="/security">Security</a>
              <a href="/integrations">Integrations</a>
            </PopoverPanel>
          </Popover>
          <HiOutlineChatAlt />
          <HiOutlineBell fontSize={24} />
          <div className="cursor-pointer " onClick={toggleDarkMood}>
            {darkMood ? (
              <IoMoonOutline fontSize={24} />
            ) : (
              <IoMoonSharp fontSize={24} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
