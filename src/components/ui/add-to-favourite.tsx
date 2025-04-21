import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import { useState } from "react";

export const AddToFavouriteButton = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  return (
    <button
      className={cn(
        "flex justify-center items-center h-12 w-12 border border-[#EAECF4] rounded-full absolute top-[20px] right-[20px] hover:border-secondary hover:shadow-lg focus:bg-secondary focus:border-primary-dark",
        isFavourite ? "bg-primary" : "bg-white"
      )}
      onClick={() => setIsFavourite((p) => !p)}
    >
      <HeartIcon
        className={cn(
          `w-6 h-6 transition-colors duration-200`,
          isFavourite ? "text-white" : "text-primary-dark "
        )}
      />
    </button>
  );
};
