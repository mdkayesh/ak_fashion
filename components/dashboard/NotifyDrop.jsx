import { useState } from "react";
import MessageCart from "./messageCart";
import RequestCart from "./RequestCart";

const NotifyDrop = () => {
  const [activeBtn, setActiveBtn] = useState("all");

  const links = [{ title: "all" }, { title: "message" }, { title: "others" }];

  return (
    <div className="text-base">
      <h2 className="text-xl py-4 px-5 border-b">Notification</h2>
      <div className="nav flex justify-between items-center px-4 border-b">
        {links.map((link) => (
          <button
            type="button"
            className={`${
              activeBtn === link.title ? "after:opacity-100" : "after:opacity-0"
            } capitalize py-3 text-sm relative after:left-0 after:content-[''] after:absolute after:bottom-[-1px] after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300`}
            onClick={() => setActiveBtn(link.title)}
            key={link.title}
          >
            <span>{link.title}(10)</span>
          </button>
        ))}
      </div>

      <div className="tabpane max-h-[50vh] overflow-auto">
        {activeBtn === "all" && (
          <div>
            {[...Array(5)].map((_, index) => (
              <MessageCart key={index} />
            ))}
          </div>
        )}
        {activeBtn === "message" && (
          <div>
            {[...Array(3)].map((_, index) => (
              <MessageCart key={index} />
            ))}
          </div>
        )}
        {activeBtn === "others" && (
          <div>
            {[...Array(3)].map((_, index) => (
              <RequestCart key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotifyDrop;
