"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useMemo, useState } from "react";
import { CloseIcon, MenuIcon } from "@/assets/icons";
import { routes } from "./routes";
import Link from "next/link";
import { CompanyBrand } from "../ui/company-brand";

export const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const mappedRoutes = useMemo(() => {
    return routes.map(({ link, label }) => {
      return (
        <Link href={link} key={label}>
          <li>{label}</li>
        </Link>
      );
    });
  }, [routes.length]);

  const handleToggleMenu = () => {
    setIsMenuOpen((p) => !p);
  };

  return (
    <header className="flex items-center justify-between px-8 md:px-16 py-4 md:py-8 max-h-[10vh] border border-b-primary-soft">
      <CompanyBrand />
      {/* desktop nav */}
      <nav className="hidden lg:block">
        <ul className="flex items-center lg:gap-10 xl:gap-[58px] font-medium">
          {mappedRoutes}
        </ul>
      </nav>
      <div className="hidden lg:flex gap-4">
        <Button variant={"secondary"}>Login</Button>
        <Button>Sign up</Button>
      </div>
      {/* mobile nav */}
      <Image
        src={MenuIcon}
        alt="menu icon"
        width={34}
        height={34}
        onClick={handleToggleMenu}
        className="block lg:hidden"
      />
      {isMenuOpen && (
        <nav className="flex flex-col gap-16  inset-0 bg-white/70 backdrop-blur-md z-100 p-8 py-4 fixed">
          <Image
            alt="close icon"
            src={CloseIcon}
            width={34}
            height={34}
            className="self-end"
            onClick={handleToggleMenu}
          />
          <ul className="flex flex-col gap-8 font-medium text-[26px]">
            {mappedRoutes}
          </ul>
          <div className="flex flex-col gap-4 mt-auto w-full">
            <Button variant={"secondary"}>Login</Button>
            <Button>Sing up</Button>
          </div>
        </nav>
      )}
    </header>
  );
};
