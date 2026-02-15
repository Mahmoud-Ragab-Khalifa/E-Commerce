import Logo from "@/components/Header/Logo";
import MobileLinks from "@/components/Header/MobileLinks";
import NavLinks from "@/components/Header/NavLinks";
import { Button } from "@/components/ui/button";
import { CircleUserRound, Search } from "lucide-react";

import CartIcon from "@/components/ProductsList/CartIcon";

const Navbar = () => {
  return (
    <div className="p-2.5 sticky top-0 z-50">
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
