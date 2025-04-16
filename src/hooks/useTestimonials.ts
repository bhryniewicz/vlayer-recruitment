import { useState, useEffect, useMemo } from "react";
import { testimonials } from "@/data/testimonialsData";

export const useTestimonials = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] =
    useState<number>(0);

  const peopleImages = useMemo(() => {
    return testimonials.map(({ personImage, id }) => {
      return { id, image: personImage };
    });
  }, []);

  const { fullName, role, text } = testimonials[activeTestimonialIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return {
    peopleImages,
    fullName,
    role,
    text,
    activeTestimonialIndex,
  };
};
