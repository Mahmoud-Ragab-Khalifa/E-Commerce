"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((r) => r.json());

const ProductCardActions = ({ id }: { id: number }) => {
  const [active, setactive] = useState(false);

  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${id}`,
    fetcher,
  );

  if (isLoading) return;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="cursor-pointer absolute z-50 right-1 md:-right-full md:group-hover:right-1 transition-all duration-500 top-1 hover:bg-neutral-200 hover:dark:bg-neutral-800/50 rounded-md delay-75 text-[14px] p-1.5">
            <Eye size={20} />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <span>{id}</span>
              <span>{data?.title}</span>
              <span className="font-bold block mt-3">$9.99</span>
            </DialogTitle>
            <DialogDescription>
              The Essence Mascara Lash Princess is a popular mascara known for
              its volumizing and lengthening effects. Achieve dramatic lashes
              with this long-lasting and cruelty-free formula.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Button
        className="cursor-pointer absolute z-50 right-1 md:-right-full md:group-hover:right-1 transition-all duration-500 top-8 hover:bg-neutral-200 delay-200 mt-1"
        variant={"ghost"}
        size={"icon-sm"}
        onClick={() => setactive(!active)}
      >
        {active ? (
          <FavoriteIcon sx={{ fontSize: 18, color: "#ff6d75" }} />
        ) : (
          <FavoriteBorderIcon sx={{ fontSize: 18 }} />
        )}
      </Button>
    </>
  );
};

export default ProductCardActions;
