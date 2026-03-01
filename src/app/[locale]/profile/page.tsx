"use client";

import Dashboard from "@/components/Profile/Dashboard";
import { useRouter } from "@/i18n/navigation";
import { useAuthStore } from "@/store/authStore";
import { TextAlignJustify } from "lucide-react";
import { useEffect } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { useActiveProfileTabStore } from "@/store/activeProfileTabStore";
import ProfileInfo from "@/components/Profile/ProfileInfo";

const Profile = () => {
  const token = useAuthStore((state) => state.token);

  const router = useRouter();

  const active = useActiveProfileTabStore((state) => state.active);

  useEffect(() => {
    if (!token) router.replace("/login");
  }, [router, token]);

  const locale = useLocale();
  const dir: "right" | "left" = locale === "ar" ? "right" : "left";

  return (
    <div className="p-2.5 lg:mt-7">
      <div className="container mx-auto flex gap-6 items-start">
        <div className="w-75 py-6 rounded-md bg-card hidden lg:block">
          <Dashboard />
        </div>

        <div className="content w-full flex-1 flex items-start justify-between relative">
          {active === "orders" && <ProfileInfo />}
          {active === "wishlist" && <ProfileInfo />}
          {active === "support" && <ProfileInfo />}
          {active === "profileInfo" && <ProfileInfo />}
          {active === "addresses" && <ProfileInfo />}
          {active === "payment" && <ProfileInfo />}

          <div className="lg:hidden absolute end-0 top-0">
            <Drawer direction={dir}>
              <DrawerTrigger asChild>
                <Button
                  variant={"ghost"}
                  size={"icon-lg"}
                  aria-label="Show Categories"
                >
                  <TextAlignJustify />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="z-200">
                <DrawerHeader className="hidden">
                  <DrawerTitle></DrawerTitle>
                  <DrawerDescription></DrawerDescription>
                </DrawerHeader>

                <div className="py-8">
                  <Dashboard />
                </div>

                <DrawerFooter className="px-6">
                  <DrawerClose asChild>
                    <Button variant="outline" autoFocus>
                      close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
