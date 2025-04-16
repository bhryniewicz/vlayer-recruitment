"use client";

import { cn } from "@/lib/utils";
import { formatNumberWithCommas } from "@/utils/formatNumber";
import Image from "next/image";
import { FC, useState } from "react";
import { TagIcon } from "@/assets/icons";
import { Property } from "@/types/property";
import { HeartIcon } from "lucide-react";

interface PropertyCardProps extends Property {
  className?: string;
}

export const PropertyCard: FC<PropertyCardProps> = (property) => {
  const { price, name, address, image, tag, className } = property;

  return (
    <article
      className={cn(
        "w-[330px] md:w-[345px] relative bg-white shadow-md rounded-lg transition-all duration-300 ",
        tag && "hover:shadow-xl",
        className
      )}
    >
      <div className="w-full h-[200px] relative rounded-t-lg overflow-hidden">
        <Image
          src={image}
          fill
          alt="apartment image"
          sizes="(max-width: 768px) 100%, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {tag && (
        <div className="absolute flex gap-2 text-white top-[50%] -left-[10px] pt-2 pb-4 px-3 font-bold bg-tag-icon uppercase text-xs rounded-md">
          <Image src={TagIcon} alt="tag icon" width={16} height={16} />
          {tag}
        </div>
      )}
      <div className="flex flex-col gap-2 p-5 bg-white relative rounded-b-lg">
        {tag && <AddToFavouriteButton />}
        <p className="flex items-center text-primary font-extrabold text-2xl">
          ${formatNumberWithCommas(price)}
          <span className="font-medium text-text-secondary text-base pl-[4px]">
            /month
          </span>
        </p>
        <h1 className="text-[#000929] font-bold text-2xl">{name}</h1>
        <address className="text-text-secondary font-medium not-italic">
          {address}
        </address>
      </div>
    </article>
  );
};

const AddToFavouriteButton = () => {
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
