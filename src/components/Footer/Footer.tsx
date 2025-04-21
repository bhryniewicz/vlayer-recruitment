import {
  TwitterIcon,
  FacebookIcon,
  IntagramIcon,
  LinkedinIcon,
} from "@/assets/icons";
import Image from "next/image";
import { CompanyBrand } from "../ui/company-brand";

export const Footer = () => {
  const icons = [TwitterIcon, FacebookIcon, IntagramIcon, LinkedinIcon];

  return (
    <footer className="flex flex-col gap-4 md:gap-10 p-8 md:p-16">
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
        <CompanyBrand />
        <nav>
          <ul className="flex gap-4 justify-center flex-wrap text-text-secondary font-medium uppercase">
            <li>help center</li>
            <li>faq</li>
            <li>terms & privacy</li>
          </ul>
        </nav>
      </div>
      <div className="h-[1px] w-full bg-primary-soft" />
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center">
        <small className="text-text-secondary">
          ©2021 Estatery. All rights reserved
        </small>
        <ul className="flex gap-10">
          {icons.map((icon) => {
            return (
              <li key={crypto.randomUUID()}>
                <Image src={icon} alt="icon" width={24} height={24} />
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
