"use client";

import { motion } from "framer-motion";
import { containerVariant, itemVariant } from "@/lib/framerAnimationVariants";
import { PlatformMetric } from "../ui/platform-metric";
import { heroPropertyCard } from "@/data/propertyData";
import { PropertyCard } from "../ui/property-card";

export const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-[100vh] md:h-[90vh] pt-8 md:pt-0">
      <motion.div
        initial="initial"
        whileInView="inView"
        viewport={{ once: true }}
        variants={containerVariant}
        className="flex flex-col gap-8 justify-center h-full px-8 md:px-16"
      >
        <motion.h1
          variants={itemVariant}
          className="text-[40px] md:text-[64px] font-bold text-center md:text-left leading-10 md:leading-[70px]"
        >
          Buy, rent, or sell
          <br />
          your property <br />
          easily
        </motion.h1>
        <motion.p
          variants={itemVariant}
          className="font-medium text-xl md:text-xl mb-0 md:mb-12 text-center md:text-left"
        >
          <span className="inline md:block">
            A great platform to buy, sell, or even rent
          </span>
          <span className="inline§ md:block">
            your properties without any commissions.
          </span>
        </motion.p>
        <div className="w-[50%] shadow-[0_0_600px_200px_rgba(139,138,255,0.20)]" />
        <motion.div
          variants={itemVariant}
          className="flex justify-center md:justify-start gap-6"
        >
          <PlatformMetric label="renters" value="50k+" />
          <PlatformMetric label="owners" value="20k+" />
        </motion.div>
      </motion.div>

      <div className="flex relative flex-col justify-center h-[40vh] md:h-full bg-[url('/heroSectionApartment.png')] bg-cover bg-center m-8 md:m-0">
        <div className="absolute top-0 md:top-[30%] -ml-20 sm:-ml-8 md:-ml-12">
          <PropertyCard
            {...heroPropertyCard}
            className="scale-50 sm:scale-75 lg:scale-100 2xl:scale-125"
          />
    </div>
      </div>
    </section>
  );
};
