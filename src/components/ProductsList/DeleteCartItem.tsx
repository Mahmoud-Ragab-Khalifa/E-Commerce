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

const DeleteCartItem = ({
  itemId,
  title,
}: {
  itemId: number;
  title: string;
}) => {
  const { removeFromCart } = useCartStore();

  const t = useTranslations("deleteDialog");

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          aria-label="Delete Product"
          className="hover:bg-destructive/50!"
          size={"icon-sm"}
          variant={"ghost"}
        >
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm" className="z-200">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>{t("title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("desc", { product: title })}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">
            {t("cancelBtn")}
          </AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={() => removeFromCart(itemId)}
          >
            {t("deleteBtn")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCartItem;
