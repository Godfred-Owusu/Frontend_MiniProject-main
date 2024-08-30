import {
  HiShoppingCart,
  HiUsers,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";
import { ImBooks } from "react-icons/im";
import { IoCalendarNumber } from "react-icons/io5";
import { IoBarChartSharp } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <BiSolidDashboard size={22} />,
  },
  {
    key: "books",
    label: "Books",
    path: "/books",
    icon: <ImBooks size={22} />,
  },
  {
    key: "students",
    label: "Students",
    path: "/students",
    icon: <HiUsers size={22} />,
  },
  {
    key: "borrow",
    label: "Borrow",
    path: "/borrow",
    icon: <HiShoppingCart size={22} />,
  },
  {
    key: "report",
    label: "Report",
    path: "/report",
    icon: <IoBarChartSharp size={22} />,
  },
  {
    key: "calendar",
    label: "Calendar",
    path: "/calendar",
    icon: <IoCalendarNumber size={22} />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
