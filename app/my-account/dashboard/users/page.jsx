"use client";

import DashDrop from "@/components/dashboard/DashDrop";
import LocationNav from "@/components/dashboard/LocationNav";
import UserCart from "@/components/dashboard/users/UserCart";
import ViewBtns from "@/components/dashboard/users/ViewBtns";
import styles from "@/components/styles";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Users = () => {
  const { activeView } = useSelector((state) => state.modalSlice);

  return (
    <div className={`${styles.paddingX} pt-12`}>
      <LocationNav
        title={"User Cart"}
        LocationName={"User"}
        element={<ViewBtns />}
      />
      {activeView === "grid" && (
        <div className="grid gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {[...Array(20)].map((_, index) => (
            <UserCart key={index} />
          ))}
        </div>
      )}

      {activeView === "row" && (
        <div
          className={`${styles.shadow} p-4 rounded-2xl overflow-x-auto overflow-y-hidden`}
        >
          <div className="flex justify-between items-center">
            <p className="hidden md:block">Show 20 products</p>
            <div className="flex gap-2 items-center py-4">
              <input
                type="search"
                name="user-search"
                id="user-search"
                placeholder="Search user"
                className="outline-none py-1 px-4 border rounded-2xl focus-within:border-black"
              />
            </div>
          </div>
          <table className="table-auto w-full text-left [&_td]:py-1 [&_td]:pr-4 [&_th]:pr-4 whitespace-nowrap text-sm mb-3">
            <thead className="[&_th]:py-3 border-b">
              <tr>
                <th>Image</th>
                <th>Information</th>
                <th>Phone</th>
                <th className="text-center">Total Buy</th>
                <th className="text-center">Join On</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(20)].map((_, index) => (
                <tr key={index}>
                  <td>
                    <Image
                      src={"/assets/user.png"}
                      alt="user"
                      height={50}
                      width={50}
                      className="rounded-md"
                    />
                  </td>
                  <td>
                    <Link href="" className="block font-semibold">
                      Marlee Rena
                    </Link>
                    <Link href="" className="block text-sm">
                      marleerena@gmail.com
                    </Link>
                  </td>
                  <td>+8801734909372</td>
                  <td className="text-center">346</td>
                  <td className="text-center">2021-10-30</td>
                  <td className="text-center">
                    <DashDrop
                      options={["Edit", "Info", "Delete"]}
                      onSelect={() => {}}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
