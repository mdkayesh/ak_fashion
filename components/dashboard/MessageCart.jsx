import { Time } from "@/utils/icons";
import Image from "next/image";

const MessageCart = () => {
  return (
    <div className="px-4 py-5 hover:bg-gray-100">
      <div className="flex gap-4">
        <Image
          src={"/assets/user.png"}
          width={40}
          height={40}
          className="w-12 h-12 rounded-full"
          alt="user"
        />
        <div className="message text-sm">
          <h2 className="text-heading_color text-semibold">Akash Khan</h2>
          <p className="line-clamp-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            excepturi corporis perspiciatis ex tenetur at aut quos perferendis
            amet dicta?
          </p>
          <p className="flex gap-1 text-xs mt-1 items-center">
            <Time />
            <span className="line-clamp-1">10 min ago</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageCart;
