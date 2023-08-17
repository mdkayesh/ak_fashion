import { setSidebarOpen } from "@/redux/features/dashboardSlice";
import { DownCarret, Menu, Notification, Search } from "@/utils/icons";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import CloseDropdownOnClick from "@/utils/CloseDropdownOnClick";
import { useState } from "react";
import NotifyDrop from "./NotifyDrop";

const Navbar = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenNotify, setIsOpenNotify] = useState(false);
  const { user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  return (
    <div className="sticky top-0 left-0 w-full h-16 py-2 px-4 border-b flex items-center bg-white z-30">
      <div className="flex justify-between items-center w-full gap-3">
        <div className="flex gap-3 items-center">
          <div
            className="menu text-2xl cursor-pointer"
            onClick={() => {
              dispatch(setSidebarOpen());
            }}
          >
            <Menu />
          </div>
          <div className="search text-2xl relative">
            <Search className="absolute top-1/2 right-2 -translate-y-1/2" />
            <input
              type="search"
              name="search"
              id="dashboard-search"
              className="py-2 pr-10 pl-4 border w-full text-base outline-none bg-gray-50 rounded-2xl"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}

        <div className="flex gap-4 items-center">
          <div className="relative">
            <div
              className="flex items-center gap-1"
              onClick={() => {
                setIsOpenProfile(!isOpenProfile);
                setIsOpenNotify(false);
              }}
            >
              <Image
                src={user?.photoURL}
                width={50}
                height={50}
                className="min-w-[40px] min-h-[40px] w-12 h-12 rounded-full cursor-pointer"
                alt="user"
              />
              <DownCarret className="cursor-pointer" />
            </div>
            <CloseDropdownOnClick
              onClose={() => {
                setIsOpenProfile(false);
              }}
              className={`${
                isOpenProfile
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              } absolute top-full -left-44 rounded-2xl border backdrop-blur-sm z-30 transition-all duration-500 w-[260px] shadow-md overflow-hidden bg-[#ffffff8f]`}
            >
              <Profile user={user} />
            </CloseDropdownOnClick>
          </div>

          <div className="notification text-3xl relative cursor-pointer">
            <div className="absolute -top-1 right-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </div>
            <div
              className="btn"
              onClick={() => {
                setIsOpenNotify(!isOpenNotify);
                setIsOpenProfile(false);
              }}
            >
              <Notification />
            </div>
            <CloseDropdownOnClick onClose={() => setIsOpenNotify(false)}>
              <div
                className={`${
                  isOpenNotify
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-2 opacity-0"
                } absolute top-full -left-72 rounded-2xl border backdrop-blur-sm z-30 transition-all duration-500 w-[300px] shadow-md overflow-hidden bg-[#ffffff8f]`}
              >
                <NotifyDrop />
              </div>
            </CloseDropdownOnClick>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
