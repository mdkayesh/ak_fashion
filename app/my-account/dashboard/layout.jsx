"use client";

import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import UsersModal from "@/components/dashboard/users/UsersModal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const DashLayout = ({ children }) => {
  const { isSidebarOpen } = useSelector((state) => state.dashboardSlice);
  const { user } = useSelector((state) => state.authSlice);
  const router = useRouter();

  useEffect(() => {
    if (!user && user.uid !== process.env.NEXT_PUBLIC_ADMIN_ID) {
      router.push("/");
    }

    return () => null;
  }, [user]);

  return (
    <div className="h-screen flex fixed top-0 left-0 w-full bg-white">
      <Sidebar />
      <div
        className={`dashboard-content ${
          isSidebarOpen ? "md:ml-[56px]" : ""
        } relative flex-1 overflow-auto pb-20`}
      >
        <Navbar />
        {children}
      </div>
      <UsersModal />
    </div>
  );
};

export default DashLayout;
