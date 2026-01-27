import Logo from "@/components/Header/Logo";
import MobileLinks from "@/components/Header/MobileLinks";
import NavLinks from "@/components/Header/NavLinks";
import { Button } from "@/components/ui/button";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";

import { useLocale } from "next-intl";

const Navbar = () => {
  const locale = useLocale();

  return (
    <div className="p-2.5">
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
          <Button variant={"ghost"} size={"icon"} className="relative">
            <ShoppingCart className="h-5! w-5!" />
            <span
              className={`absolute -top-1 ${locale === "ar" ? "left-0" : "-right-1"} w-5 h-5 rounded-full bg-main-color text-white`}
            >
              5
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
