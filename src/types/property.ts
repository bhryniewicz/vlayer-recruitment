import { StaticImageData } from "next/image";

type TagType = "house" | "apartments";

export type Property = {
  id: string;
  price: number;
  name: string;
  address: string;
  image: StaticImageData;
  tag?: TagType;
};
