import {
  Dashboard,
  DownArrow,
  OrderCart,
  Products,
  Users,
} from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [activeMenu, setAcitveMenu] = useState("Dashboard");
  const { isSidebarOpen } = useSelector((state) => state.dashboardSlice);
  const pathname = usePathname();

  const links = [
    {
      title: "Dashboard",
      url: "/my-account/dashboard",
      icon: <Dashboard />,
    },
    {
      title: "Users",
      url: "/my-account/dashboard/users",
      icon: <Users />,
    },
    {
      title: "products",
      url: "",
      icon: <Products />,
      nestedLinks: [
        {
          title: "add products",
          url: "/my-account/dashboard/add-products",
        },
        {
          title: "All products",
          url: "/my-account/dashboard/all-products",
        },
      ],
    },
    {
      title: "Orders",
      url: "",
      icon: <OrderCart />,
    },
  ];

  const handleClick = (index) => {
    setAcitveMenu(index !== activeMenu ? index : null);
  };

  return (
    <div
      className={`${
        isSidebarOpen
          ? "md:min-w-[56px] w-14 min-w-[200px] hover:min-w-[200px] hover:w-14 absolute left-0"
          : "min-w-[200px] w-[200px] absolute md:static -left-full"
      } top-0 h-screen overflow-y-auto overflow-x-hidden border-r transition-all duration-500 z-30 bg-white`}
    >
      <div className="header border-b">
        <Link href={"/"} className="img w-fit py-3 flex h-16 items-center">
          <Image
            src="/assets/logo.png"
            alt="ak fashion"
            width={100}
            height={100}
            className="w-16 h-auto"
          />
        </Link>
      </div>

      {/* links */}
      <ul className="mt-3">
        {links.map((link) => (
          <li
            key={link.title}
            className={`${
              pathname === link.url
                ? "[&_>a]:text-primary [&_.line]:scale-100"
                : ""
            } [&_.line]:hover:scale-100`}
          >
            <Link
              href={link.url}
              className="w-full px-4 py-3 flex justify-between uppercase text-sm items-center relative hover:text-primary transition-colors duration-300"
              onClick={() => handleClick(link.title)}
            >
              <span className="line absolute left-0 h-full w-1 rounded bg-primary block scale-y-0 transition-transform duration-300"></span>
              <div className="flex gap-4 items-center">
                <span className="text-2xl">{link.icon}</span>
                <span>{link.title}</span>
              </div>
              {link.nestedLinks && (
                <DownArrow
                  className={`${
                    activeMenu === link.title ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              )}
            </Link>
            {link.nestedLinks && (
              <ul
                className={`${
                  activeMenu === link.title ? "max-h-[200px]" : "max-h-0"
                } pl-10 bg-gray-100 transition-all duration-500 overflow-hidden`}
              >
                {link.nestedLinks.map((link) => (
                  <li
                    key={link.title}
                    className={`${
                      pathname === link.url
                        ? "[&_>a]:text-primary [&_.line]:scale-100"
                        : ""
                    }`}
                  >
                    <Link
                      href={link.url}
                      className={`w-full px-4 py-3 whitespace-nowrap flex justify-between uppercase text-xs font-semibold items-center relative hover:text-primary transition-colors duration-300 [&_.line]:hover:scale-100`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
