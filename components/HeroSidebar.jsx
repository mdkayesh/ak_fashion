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

const sidebarLinks = [
  {
    title: "Shop",
    subTitle: [
      {
        title: "Western",
        subTitle: [
          {
            title: "Skirts",
          },
          {
            title: "Jumpsuits",
          },
          {
            title: "Shorts",
          },
        ],
      },
      {
        title: "Traditional",
        subTitle: [
          {
            title: "Kurtis",
          },
          {
            title: "Suits",
          },
          {
            title: "Choli",
          },
        ],
      },
      {
        title: "Party Wear",
        subTitle: [
          {
            title: "Maxi Dress",
          },
          {
            title: " Crepe Shirt",
          },
          {
            title: "White Dress",
          },
        ],
      },
    ],
  },

  {
    title: "Collection",
    subTitle: [
      {
        title: "Printed Kurta",
      },
      {
        title: "Checkered Trouser",
      },
      {
        title: "Floral Kurta",
      },
      {
        title: "Loose Trousers",
      },
      {
        title: "Sports Tights",
      },
    ],
  },

  {
    title: "Fashion",
  },
  {
    title: "Trousers",
  },
  {
    title: "Tops",
  },
  {
    title: "Tights",
  },
  {
    title: "Dresses",
  },
  {
    title: "Pants",
  },
  {
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
              <span>{link.title}</span>
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
