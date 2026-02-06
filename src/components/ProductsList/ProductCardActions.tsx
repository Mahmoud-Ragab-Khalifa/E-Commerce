"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductCardActions = () => {
  const [active, setactive] = useState(false);

  return (
    <>
      <Button
        className="cursor-pointer absolute z-50 right-1 md:-right-full md:group-hover:right-1 transition-all duration-500 top-1 hover:bg-neutral-200 delay-75"
        variant={"ghost"}
        size={"icon-sm"}
      >
        <Eye />
      </Button>

      <Button
        className="cursor-pointer absolute z-50 right-1 md:-right-full md:group-hover:right-1 transition-all duration-500 top-8 hover:bg-neutral-200 delay-200"
        variant={"ghost"}
        size={"icon-sm"}
        onClick={() => setactive(!active)}
      >
        {active ? (
          <FavoriteIcon sx={{ fontSize: 17, color: "#ff6d75" }} />
        ) : (
          <FavoriteBorderIcon sx={{ fontSize: 17 }} />
        )}
      </Button>
    </>
  );
};

export default ProductCardActions;
