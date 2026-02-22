import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

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
import { Trash2Icon } from "lucide-react";
import { useTranslations } from "next-intl";

interface ClearCartProbs {
  isEmptyCart: boolean;
  setIsEmptyCart: React.Dispatch<boolean>;
}

const ClearCart = ({ isEmptyCart, setIsEmptyCart }: ClearCartProbs) => {
  const { clearCart } = useCartStore();

  const t = useTranslations("clearDialog");

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"lg"} variant={"destructive"} className="ml-auto">
          <Trash2 />
          {t("clearBtn")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm" className="z-200">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>{t("title")}</AlertDialogTitle>
          <AlertDialogDescription>{t("desc")}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">
            {t("cancelBtn")}
          </AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={() => {
              clearCart();
              setIsEmptyCart(!isEmptyCart);
            }}
          >
            {t("clearBtn")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ClearCart;
