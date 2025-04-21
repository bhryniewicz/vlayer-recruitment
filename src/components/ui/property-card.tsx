"use client";

import { cn } from "@/lib/utils";
import { formatNumberWithCommas } from "@/utils/formatNumber";
import Image from "next/image";
import { FC } from "react";
import { TagIcon } from "@/assets/icons";
import { Property } from "@/types/property";
import { AddToFavouriteButton } from "./add-to-favourite";

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
          placeholder="blur"
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
