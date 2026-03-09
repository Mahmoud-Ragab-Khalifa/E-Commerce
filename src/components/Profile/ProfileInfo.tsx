"use client";

import { useAuthStore } from "@/store/authStore";
import { User2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Geist } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";

import { User } from "@/store/authStore";

const geist = Geist({ subsets: ["latin"] });

const userInfoList = [
  {
    count: 16,
    title: "allOrders",
  },
  {
    count: 0o2,
    title: "payments",
  },
  {
    count: 0o0,
    title: "shipment",
  },
  {
    count: 0o1,
    title: "delivery",
  },
];

const userDetailsList = [
  {
    title: "firstName",
    data: "displayName",
  },
  {
    title: "lastName",
    data: "displayName",
  },
  {
    title: "email",
    data: "email",
  },
  {
    title: "phone",
    data: ".",
  },
  {
    title: "bDate",
    data: ".",
  },
];

const ProfileInfo = () => {
  const t = useTranslations("profile");

  const { user, setUser } = useAuthStore();

  const locale = useLocale();

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(`/${locale}/api/profile`);
      const data = await res.json();
      setUser(data);
    };

    fetchProfile();
  }, [setUser, locale]);

  return (
    <div className="animate-fade-in-small rounded-md w-full text-light dark:text-dark flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <span className="bg-card p-2 rounded-md">
          <User2 size={20} />
        </span>
        <span className="font-bold text-xl">{t("profile")}</span>
      </div>

      <div className="flex flex-col xl:flex-row gap-5">
        <div className="bg-card rounded-md p-5 flex-1">
          <div className="flex items-center justify-between gap-5">
            <Image
              alt="user"
              src={"/images/avatar.png"}
              width={60}
              height={60}
              className="rounded-full ring-2 ring-neutral-300 dark:ring-neutral-700"
            />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 flex-1">
              <div className="flex flex-col gap-0">
                <h1 className={geist.className}>{user?.displayName}</h1>
                <div className="flex items-center gap-1">
                  <span>{t("balance")}:</span>
                  <span className={`${geist.className} font-bold`}>
                    $5,000,00
                  </span>
                </div>
              </div>

              <p className="uppercase tracking-widest">{t("user")}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-5 flex-1 flex-wrap">
          {userInfoList.map(({ count, title }) => (
            <div
              key={title}
              className="bg-card py-5 px-2 rounded-md basis-[calc((100%-20px)/2)] md:basis-[calc((100%-60px)/4)] flex justify-center items-center flex-col gap-1.5"
            >
              <span
                className={`${geist.className} font-bold text-xl tracking-wider`}
              >
                {count}
              </span>
              <span className="text-center text-sm tracking-tight lg:w-18 lg:mx-auto lg:overflow-hidden lg:text-ellipsis">
                {t(title)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 justify-between xl:flex-row p-5 rounded-md bg-card">
        {userDetailsList.map(({ title, data }) => (
          <div key={title} className="flex flex-col gap-1 grow">
            <span className="font-bold">{t(title)}</span>
            <span className={`${geist.className} text-sm`}>
              {user && data in user ? user[data as keyof User] : data}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
