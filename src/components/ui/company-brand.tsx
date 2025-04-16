import { LogoIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

export const CompanyBrand = () => {
  return (
    <Link className="flex items-center gap-2" href="/">
      <Image width={32} height={32} alt="webiste icon" src={LogoIcon} />
      <h1 className="font-bold text-xl">Estatery</h1>
    </Link>
  );
};
