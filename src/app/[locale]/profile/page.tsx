"use client";

import { useRouter } from "@/i18n/navigation";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

const Profile = () => {
  const token = useAuthStore((state) => state.token);

  const router = useRouter();

  useEffect(() => {
    if (!token) router.replace("/login");
  }, [router, token]);

  return <div>Profile</div>;
};

export default Profile;
