import { StaticImageData } from "next/image";

type Role = "renter";

export type Testimonial = {
  id: string;
  text: string;
  fullName: string;
  role: Role;
  personImage: StaticImageData;
};
