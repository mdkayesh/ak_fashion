import { Headset, Lock, Return, Truck } from "@/utils/icons";
import styles from "../styles";

const boxCarts = [
  {
    title: "FREE SHIPPING",
    icon: <Truck />,
    text: "Orders over $100",
  },
  {
    title: "FREE RETURNS",
    icon: <Return />,
    text: "Within 30 days",
  },
  {
    title: "100% SECURE",
    icon: <Lock />,
    text: "online shopping",
  },
  {
    title: "ONLINE SUPPORT",
    icon: <Headset />,
    text: "call us 24/7",
  },
];

const Probox = () => {
  return (
    <section
      className={`${styles.paddingX} probox container grid gap-5 grid-cols-2 lg:grid-cols-4 max-[300px]:grid-cols-1`}
    >
      {boxCarts.map((cart) => (
        <div
          className="flex flex-col gap-2 items-center justify-center text-center border border-gray-400 py-6 px-3 shadow-inner"
          key={cart.title}
        >
          <div className="text-5xl text-primary">{cart.icon}</div>
          <h5 className="text-sm sm:text-base">{cart.title}</h5>
          <p className="text-xs">{cart.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Probox;
