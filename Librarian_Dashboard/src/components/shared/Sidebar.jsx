import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
// import { BiMenuAltRight } from "react-icons/bi";
import { useContext } from "react";
import { MenuToggleContext } from "../context/MenuToggleContext";

const Sidebar = () => {
  const location = useLocation();
  const { sidebarToggle } = useContext(MenuToggleContext);

  return (
    <div className="flex flex-col bg-white shadow-lg dark:bg-[#060B26] w-fit  p-3 text-black dark:text-white h-full overflow-y-auto">
      <div className="flex justify-between items-center gap-5">
        <div className="flex items-center gap-1 px-1 py-3">
          <img
            src="./schoollogo.png"
            alt="KNUST-Logo"
            width={50}
            className="object-contain"
          />
          <span
            className={`${
              sidebarToggle ? "opacity-0 hidden" : "opacity-100 block"
            } font-bold`}
          >
            St. Louis Jubilee
          </span>
        </div>
      </div>

      {/* Side Links */}
      <div className="flex-1 py-5 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          // link
          <Link to={item.path} key={item.key}>
            <div
              className={` ${
                location.pathname === item.path
                  ? "bg-neutral-700  text-white font-semibold"
                  : ""
              } flex  items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 active:bg-neutral-600 rounded-md text-base`}
            >
              {/* icons */}
              <div>{item.icon}</div>
              {/* name/lable */}
              <div
                className={`${
                  sidebarToggle ? "opacity-0 hidden" : "opacity-100 block"
                }`}
              >
                {item.label}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* bottom */}

      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          // link
          <Link to={item.path} key={item.key}>
            <div
              className={` ${
                location.pathname === item.path
                  ? "bg-neutral-700  text-red-400"
                  : ""
              } flex  items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 active:bg-neutral-600 rounded-md text-base`}
            >
              {/* icons */}
              <div>{item.icon}</div>
              {/* name/lable */}
              <div
                className={`${
                  sidebarToggle ? "opacity-0 hidden" : "opacity-100 block"
                }`}
              >
                {item.label}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* logout */}
      <div className=" flex  items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 active:bg-neutral-600 rounded-md text-base text-red-500 cursor-pointer">
        <span className="text-xl">
          <IoLogOutOutline />
        </span>
        <p
          className={`${
            sidebarToggle ? "opacity-0 hidden" : "opacity-100 block"
          }`}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
