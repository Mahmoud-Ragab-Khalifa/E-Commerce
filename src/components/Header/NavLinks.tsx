import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown } from "lucide-react";

import { useTranslations } from "next-intl";

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
  const t = useTranslations("Links");

  return (
    <div className="hidden lg:flex ps-16 items-center gap-4">
      {links.map((link, idx) => (
        <HoverCard openDelay={50} closeDelay={50} key={idx}>
          <HoverCardTrigger className="group flex items-center gap-0.5 text-sm cursor-pointer">
            {t(link)}
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
