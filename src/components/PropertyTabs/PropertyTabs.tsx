"use client";

import { Button } from "../ui/button";
import { apartments, houses } from "../../data/propertyData";
import { useState } from "react";
import { Property } from "@/types/property";
import { AnimatePresence, motion } from "framer-motion";
import {
  containerVariant,
  itemVariant,
  propertyCardVariant,
} from "@/lib/framerAnimationVariants";
import { PropertyCard } from "../ui/property-card";

export const PropertyTabs = () => {
  const [activeTab, setActiveTab] = useState<Property[]>(houses);

  return (
    <main>
      <div className="flex flex-col items-center px-8 py-16 gap-10">
        <div className="w-full max-w-[400px] flex gap-4 bg-primary-soft p-2 rounded-lg">
          <Button
            variant={`${activeTab[0].tag === "house" ? "tab" : "ghost"}`}
            onClick={() => setActiveTab(houses)}
            className="flex-1"
          >
            Houses
          </Button>
          <Button
            variant={`${activeTab[0].tag === "apartments" ? "tab" : "ghost"}`}
            onClick={() => setActiveTab(apartments)}
            className="flex-1"
          >
            Apartments
          </Button>
        </div>
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={containerVariant}
          className="max-w-[544px] text-center mb-2"
        >
          <motion.h1
            variants={itemVariant}
            className="font-bold text-[40px] mb-6"
          >
            We make it easy for houses and apartments.
          </motion.h1>
          <motion.h2
            variants={itemVariant}
            className="font-medium text-text-secondary"
          >
            Whether it’s selling your current home, getting financing, or buying
            a new home, we make it easy and efficient. The best part? you’ll
            save a bunch of money and time with our services.
          </motion.h2>
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        <motion.ul
          key={activeTab[0].tag}
          variants={propertyCardVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-6 overflow-x-auto md:overflow-visible scrollbar-hide w-full snap-x snap-mandatory sm:snap-none px-8 pb-4 md:pb-8 [scroll-padding-inline:2rem] sm:[scroll-padding-inline:0]"
        >
          {activeTab.map((property) => (
            <li
              key={property.id}
              className="snap-center shrink-0 md:max-w-[345px] mr-4"
            >
              <PropertyCard {...property} />
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </main>
  );
};
