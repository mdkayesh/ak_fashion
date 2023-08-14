import { AddFriend, Time } from "@/utils/icons";
import Image from "next/image";

const RequestCart = () => {
  return (
    <div className="px-4 py-5 hover:bg-gray-100">
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-blue-600 text-white text-2xl flex justify-center items-center rounded-xl">
          <AddFriend />
        </div>
        <div className="message text-sm">
          <h2 className="text-heading_color font-semibold">New Request</h2>
          <p className="line-clamp-1">
            Add <span className="font-semibold">Md Kayesh</span> as your contact
          </p>
          <div className="flex gap-1 items-center mt-1">
            <button
              type="button"
              className="rounded-[99px] text-xs px-2 py-1 text-white bg-green-700"
            >
              Accept
            </button>
            <button
              type="button"
              className="rounded-[99px] text-xs px-2 py-1 text-white bg-gray-500"
            >
              Delete
            </button>
          </div>
          <p className="flex gap-1 text-xs mt-1 items-center">
            <Time />
            <span className="line-clamp-1">10 min ago</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestCart;
