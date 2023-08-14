import React from "react";
import styles from "../styles";
import Image from "next/image";
import DashDrop from "./dashDrop";

const NewCustomers = () => {
  return (
    <div className="new-customers mt-20">
      <div className={`${styles.shadow} rounded-xl py-7 px-4 overflow-x-auto`}>
        <div className="flex justify-between items-center border-b py-3 mb-4">
          <h1 className="text-2xl font-semibold">New Custommers</h1>
          <DashDrop
            options={["select-1", "select-2", "select-3"]}
            onSelect={() => {}}
          />
        </div>
        <table className="table-auto w-full text-left whitespace-nowrap [&_td]:py-4 [&_td]:pr-3 [&_td]:text-base">
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index}>
                <td>
                  <div className="flex gap-3">
                    <Image
                      src={"/assets/user.png"}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                      alt="user"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">John Doe</h3>
                      <p className="text-sm">johndoe@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>5 Orders</td>
                <td>$250</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewCustomers;
