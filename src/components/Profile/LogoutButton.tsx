import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "@/i18n/navigation";
import { UserX } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const LogoutButton = () => {
  const t = useTranslations("logoutButton");

  const router = useRouter();

  const locale = useLocale();

  const logout = async () => {
    await fetch(`/${locale}/api/auth/logout`, {
      method: "POST",
    });

    router.replace("/login");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="mx-5 relative py-2 px-4 rounded-md ring-1 ring-destructive transition-all duration-300 hover:ring-2 focus:ring-2 focus:outline-none group text-center overflow-hidden z-10 cursor-pointer hover:text-white">
          <span>{t("logoutBtn")}</span>

          <span className="absolute inset-s-0 top-0 h-full w-0 group-hover:w-full bg-destructive transition-all duration-300 -z-10 group-focus:w-full" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm" className="z-200">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <UserX />
          </AlertDialogMedia>
          <AlertDialogTitle>{t("title")}</AlertDialogTitle>
          <AlertDialogDescription>{t("desc")}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">
            {t("cancelBtn")}
          </AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={logout}>
            {t("logoutBtn")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutButton;
