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

interface ClearCartProbs {
  isEmptyCart: boolean;
  setIsEmptyCart: React.Dispatch<boolean>;
}

const ClearCart = ({ isEmptyCart, setIsEmptyCart }: ClearCartProbs) => {
  const { clearCart } = useCartStore();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"lg"} variant={"destructive"} className="ml-auto">
          <Trash2 />
          Clear Cart
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm" className="z-200">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Clear Your Cart?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to clear your cart and start a fresh shopping
            journey?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={() => {
              clearCart();
              setIsEmptyCart(!isEmptyCart);
            }}
          >
            Clear Cart
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ClearCart;
