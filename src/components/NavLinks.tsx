import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown } from "lucide-react";

const links = [
  "Home",
  "Mega Menu",
  "Full Screen Menu",
  "Pages",
  "User Account",
  "Vendor Account",
];

// const links = [
//   {
//     name:"Home",
//     isList:true
//   }
// ]

const NavLinks = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
      {links.map((link, idx) => (
        <HoverCard openDelay={50} closeDelay={50} key={idx}>
          <HoverCardTrigger className="group flex items-center gap-0.5 text-sm cursor-pointer">
            {link}
            <ChevronDown
              size={15}
              className="chevron mt-0.5 transform transtion duration-300 group-hover:rotate-180"
            />
          </HoverCardTrigger>
          <HoverCardContent>Content</HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

export default NavLinks;
