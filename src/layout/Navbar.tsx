"use client";

import Logo from "@/components/Header/Logo";
import MobileLinks from "@/components/Header/MobileLinks";
import NavLinks from "@/components/Header/NavLinks";
import { Button } from "@/components/ui/button";
import { CircleUserRound, Search } from "lucide-react";

import CartIcon from "@/components/ProductsList/CartIcon";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 43.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`p-2.5 sticky top-0 z-200 transition-all duration-300 ${isSticky ? "bg-main-color dark:bg-[#253853] text-neutral-200" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <div className="lg:hidden">
            <MobileLinks />
          </div>

          <span className="hidden lg:flex">
            <Logo />
          </span>
        </div>

        <div className="links">
          <NavLinks />

          <span className="lg:hidden">
            <Logo />
          </span>
        </div>

        <div className="icons">
          <Button variant={"ghost"} size={"icon"} className="lg:hidden">
            <Search className="h-5! w-5!" />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <CircleUserRound className="h-5! w-5!" />
          </Button>

          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
