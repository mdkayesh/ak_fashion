"use client";

import { Footer, Nav, ProductModal, TopNav } from "@/components";
import "./globals.css";
import "./index.css";

import store from "@/redux/store";
import { Provider } from "react-redux";
import LocationNav from "@/components/LocationNav";
import { usePathname } from "next/navigation";
import CartModal from "@/components/CartModal";
import UpdateProductModal from "@/components/dashboard/add-products/UpdateProductModal";

export const metadata = {
  title: "Ak fashion",
  description: "Build by Md Kayesh",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${
          pathname.includes("dashboard") ? "overflow-hidden" : "overflow-auto"
        }`}
      >
        <Provider store={store}>
          <header>
            <TopNav />
            <Nav />
            <LocationNav />
          </header>
          {children}
          <ProductModal />
          <CartModal />
          <UpdateProductModal />
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
