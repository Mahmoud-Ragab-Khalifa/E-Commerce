import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronDownIcon, TextAlignJustify, X } from "lucide-react";

import { useLocale } from "next-intl";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Button } from "./ui/button";

const links = [
  "Home",
  "Mega Menu",
  "Full Screen Menu",
  "Pages",
  "User Account",
  "Vendor Account",
];

const MobileLinks = () => {
  const locale = useLocale();

  return (
    <Drawer direction={locale === "ar" ? "right" : "left"}>
      <DrawerTrigger className="p-2 rounded-md transition duration-300 hover:bg-accent/50">
        <TextAlignJustify size={22} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <span className="px-3 py-2">Navigation</span>
            <DrawerClose className="p-2 rounded-md transition duration-300 hover:bg-accent/50">
              <X size={22} />
            </DrawerClose>
          </div>

          {links.map((link, idx) => (
            <Collapsible key={idx} className="group rounded-md">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between! hover:bg-transparent!"
                >
                  {link}
                  <ChevronDownIcon className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent
                className="px-4 overflow-hidden
              data-[state=closed]:animate-collapsible-up 
              data-[state=open]:animate-collapsible-down"
              >
                <Collapsible className="group rounded-md">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:bg-transparent!"
                    >
                      Product details
                      <ChevronDownIcon className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent
                    className="overflow-hidden
                    data-[state=closed]:animate-collapsible-up 
                    data-[state=open]:animate-collapsible-down"
                  >
                    <div className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="group rounded-md">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:bg-transparent!"
                    >
                      Product details
                      <ChevronDownIcon className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent
                    className="overflow-hidden
              data-[state=closed]:animate-collapsible-up 
              data-[state=open]:animate-collapsible-down"
                  >
                    <div className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="group rounded-md">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:bg-transparent!"
                    >
                      Product details
                      <ChevronDownIcon className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent
                    className="overflow-hidden
                    data-[state=closed]:animate-collapsible-up 
                    data-[state=open]:animate-collapsible-down"
                  >
                    <div className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="group rounded-md">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:bg-transparent!"
                    >
                      Product details
                      <ChevronDownIcon className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent
                    className="overflow-hidden
                    data-[state=closed]:animate-collapsible-up 
                    data-[state=open]:animate-collapsible-down"
                  >
                    <div className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="group rounded-md">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:bg-transparent!"
                    >
                      Product details
                      <ChevronDownIcon className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent
                    className="overflow-hidden
                    data-[state=closed]:animate-collapsible-up 
                    data-[state=open]:animate-collapsible-down"
                  >
                    <div className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="group rounded-md">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:bg-transparent!"
                    >
                      Product details
                      <ChevronDownIcon className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent
                    className="overflow-hidden
                    data-[state=closed]:animate-collapsible-up 
                    data-[state=open]:animate-collapsible-down"
                  >
                    <div className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                      <div>This panel can be expanded or collapsed to</div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CollapsibleContent>
            </Collapsible>
          ))}

          <DrawerTitle className="hidden"></DrawerTitle>
          <DrawerDescription className="hidden"></DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileLinks;
