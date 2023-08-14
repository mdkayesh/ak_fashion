import Image from "next/image";
import React from "react";
import styles from "./styles";
import Link from "next/link";

const information = [
  {
    title: "Delivery",
  },
  {
    title: "Legal Notice",
  },
  {
    title: "About Us",
  },
  {
    title: "Secure",
  },
  {
    title: "Payment",
  },
  {
    title: "Contact Us",
  },
];

const account = [
  {
    title: "Price Drop",
  },
  {
    title: "Stores",
  },
  {
    title: "Login",
  },
  {
    title: "My Account",
  },
];

const Footer = () => {
  return (
    <footer
      className={`footer bg-footer_color text-white py-20 ${styles.paddingX} mt-20`}
    >
      <div className="container">
        <div className={`flex gap-6 gap-y-8 flex-wrap md:flex-nowrap`}>
          <div className="left flex flex-col gap-3 w-full md:w-[50%]">
            <div className="flex">
              <Image
                src="/assets/white-logo.png"
                width={100}
                height={100}
                alt="Ak fashion"
              />
            </div>
            <div className="content text-sm flex flex-col gap-2">
              <p>We’re available by phone +123-456-789</p>
              <a href="mailto:example@gmail.com" className="hover:text-primary">
                example@gmail.com
              </a>
              <p>Monday till Friday 10 to 6 EST</p>
            </div>
            <form action="">
              <div className="flex shadow-md flex-col md:flex-row gap-y-3 w-[80%] pt-5">
                <input
                  type="email"
                  name="subscribe_email"
                  id="subscribe_email"
                  placeholder="Your email address..."
                  className="flex-1 outline-none px-4 py-3 text-black"
                />
                <button
                  type="submit"
                  className="px-4 md:px-6 py-2 text-sm md:text-base capitalize bg-secondary_btn_bg hover:bg-secondary_btn_bg_hover text-secondary_btn_text hover:text-secondary_btn_text_hover transition-all duration-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/*middle  */}
          <div className="w-full md:w-[25%]">
            <h2 className="text-xl text-white text-[500] mb-5 uppercase">
              Information
            </h2>
            <ul>
              {information.map((item) => (
                <li key={item.title} className="mb-3">
                  <Link
                    href=""
                    className="text-sm hover:underline hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* right */}
          <div className="w-full md:w-[25%]">
            <h2 className="text-xl text-white text-[500] mb-5 uppercase">
              My Account
            </h2>
            <ul>
              {account.map((item) => (
                <li key={item.title} className="mb-3">
                  <Link
                    href=""
                    className="text-sm hover:underline hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
