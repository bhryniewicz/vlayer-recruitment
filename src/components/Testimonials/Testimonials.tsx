"use client";

import Image from "next/image";
import { useTestimonials } from "@/hooks/useTestimonials";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  containerVariant,
  itemVariant,
  testimonialVariant,
} from "@/lib/framerAnimationVariants";

export const Testimonials = () => {
  const { fullName, peopleImages, text, role, activeTestimonialIndex } =
    useTestimonials();

  return (
    <motion.section
      initial="initial"
      whileInView="inView"
      viewport={{ once: true }}
      variants={containerVariant}
      className="flex flex-col relative items-center gap-8 justify-center py-8 text-center px-8 w-full mt-12"
    >
      <motion.h1 variants={itemVariant} className="font-bold text-[40px]">
        Testimonials
      </motion.h1>

      <motion.p
        variants={itemVariant}
        className="font-medium text-text-secondary mb-6"
      >
        <span className="inline md:block">
          See what our property managers, landlords,
        </span>{" "}
        <span className="inline md:block">and tenants have to say</span>
      </motion.p>
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={`text-${activeTestimonialIndex}`}
          variants={testimonialVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-xl max-w-[700px]"
        >
          "{text}"
        </motion.blockquote>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.p
          key={`info-${activeTestimonialIndex}`}
          variants={testimonialVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="font-bold mb-8"
        >
          {fullName},{" "}
          <span className="text-text-secondary capitalize">{role}</span>
        </motion.p>
      </AnimatePresence>
      <ul className="flex gap-8 z-1000">
        {peopleImages.map(({ image, id }, index) => (
          <li
            key={id}
            className={cn(
              "p-1 bg-white rounded-full border-4 transition-all duration-300",
              activeTestimonialIndex === index
                ? "border-t-primary border-r-primary border-b-primary border-l-gray-light rotate-[40deg]"
                : "border-transparent"
            )}
          >
            <div
              className={cn(
                "relative rounded-full overflow-hidden transition-transform duration-300",
                activeTestimonialIndex === index && "rotate-[-40deg]"
              )}
            >
              <Image
                src={image}
                alt="person image"
                width={60}
                height={60}
                placeholder="blur"
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_top,rgba(139,138,255,0.8)_10%,transparent_60%)]" />
    </motion.section>
  );
};
