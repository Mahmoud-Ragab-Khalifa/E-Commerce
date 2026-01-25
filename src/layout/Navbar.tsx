import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";
import { Button } from "@/components/ui/button";
import {
  CircleUserRound,
  Search,
  ShoppingCart,
  TextAlignJustify,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="p-2.5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <Button variant={"ghost"} className="lg:hidden">
            <TextAlignJustify className="h-5! w-5!" />
          </Button>

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
          <Button variant={"ghost"} size={"icon"}>
            <ShoppingCart className="h-5! w-5!" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
