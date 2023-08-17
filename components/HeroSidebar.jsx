import React from "react";
import styles from "./styles";
import {
  DownArrow,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "@/utils/icons";
import { SidebarDrop, SidebarDrop2 } from "./Dropdown";
import Link from "next/link";

const sidebarLinks = [
  {
    url: "/category",
    title: "Shop",
    subTitle: [
      {
        url: "/category",
        title: "Western",
        subTitle: [
          {
            url: "/category",
            title: "Skirts",
          },
          {
            url: "/category",
            title: "Jumpsuits",
          },
          {
            url: "/category",
            title: "Shorts",
          },
        ],
      },
      {
        url: "/category",
        title: "Traditional",
        subTitle: [
          {
            url: "/category",
            title: "Kurtis",
          },
          {
            url: "/category",
            title: "Suits",
          },
          {
            url: "/category",
            title: "Choli",
          },
        ],
      },
      {
        url: "/category",
        title: "Party Wear",
        subTitle: [
          {
            url: "/category",
            title: "Maxi Dress",
          },
          {
            url: "/category",
            title: " Crepe Shirt",
          },
          {
            url: "/category",
            title: "White Dress",
          },
        ],
      },
    ],
  },

  {
    url: "/category",
    title: "Collection",
    subTitle: [
      {
        url: "/category",
        title: "Printed Kurta",
      },
      {
        url: "/category",
        title: "Checkered Trouser",
      },
      {
        url: "/category",
        title: "Floral Kurta",
      },
      {
        url: "/category",
        title: "Loose Trousers",
      },
      {
        url: "/category",
        title: "Sports Tights",
      },
    ],
  },

  {
    url: "/category",
    title: "Fashion",
  },
  {
    url: "/category",
    title: "Trousers",
  },
  {
    url: "/category",
    title: "Tops",
  },
  {
    url: "/category",
    title: "Tights",
  },
  {
    url: "/category",
    title: "Dresses",
  },
  {
    url: "/category",
    title: "Pants",
  },
  {
    url: "/category",
    title: "Casual",
  },
];

// social icons

const SocialIcons = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Linkedin />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <Youtube />,
  },
];

// Close Categories

const HeroSidebar = () => {
  return (
    <div className="hero-sidebar h-full border-t px-4 py-5 flex flex-col justify-between">
      <div>
        <h4 className={`${styles.h4} uppercase`}>Shop by Categories</h4>
        <ul className="mt-3">
          {sidebarLinks.map((link) => (
            <li
              className="relative mt-3 text-sm flex items-center justify-between cursor-pointer hover:text-primary [&_>_.dropdown]:hover:visible [&_>_.dropdown]:hover:scale-x-100"
              key={link.title}
            >
              <Link href={link.url}>
                <span>{link.title}</span>
              </Link>
              {link.subTitle && <DownArrow className="-rotate-90" />}
              {link.subTitle && link.title === "Shop" && (
                <SidebarDrop links={link.subTitle} />
              )}
              {link.subTitle && link.title === "Collection" && (
                <SidebarDrop2 links={link.subTitle} />
              )}
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex gap-3 mt-5">
        {SocialIcons.map((icon, index) => (
          <li
            className="rounded-full min-h-[24px] min-w-[24px] flex justify-center items-center text-xs text-white bg-secondary hover:bg-primary transition-colors duration-500"
            key={index}
          >
            {icon.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroSidebar;
