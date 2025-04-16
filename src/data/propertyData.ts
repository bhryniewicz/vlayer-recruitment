import { Property } from "@/types/property";

import {
  House1,
  Apartment1,
  Apartment2,
  Apartment3,
  House2,
  House3,
} from "@/assets/propertiesImages";

export const houses: Property[] = [
  {
    id: "e4d909c290d0fb1ca068ffaddf22cbd0",
    price: 3440,
    name: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    image: House1,
    tag: "house",
  },
  {
    id: "c20ad4d76fe97759a3705d56e6a0d6d1",
    price: 6550,
    name: "St. Crystal",
    address: "210 US Highway, Highland Lake, FL",
    image: House2,
    tag: "house",
  },
  {
    id: "a5e5d6986f11b56d931bdac358586911",
    price: 4950,
    name: "Faulkner Ave",
    address: "909 Woodland St, Michigan, IN",
    image: House3,
    tag: "house",
  },
];

export const apartments: Property[] = [
  {
    id: "b6a7eaf94a9935610cc1be7c18ecdb64",
    price: 2140,
    name: "Tarpon Bay",
    address: "103 Lake Shores, Michigan, IN",
    image: Apartment1,
    tag: "apartments",
  },
  {
    id: "f5c8f1b9e1f80b8350c5ff44e801b8f5",
    price: 1450,
    name: "Cove Red",
    address: "243 Curlew Road, Palm Harbor, TX",
    image: Apartment2,
    tag: "apartments",
  },
  {
    id: "d6f8c5a7e68e8c1d82eeb6b4f38de3b9",
    price: 3850,
    name: "Beverly Springfield",
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    image: Apartment3,
    tag: "apartments",
  },
];

export const heroPropertyCard: Property = {
  id: "a7b3d51ef2c6a1a93823b1e93cd7cb5b",
  name: "Beverly Springfield",
  address: "2821 Lake Sevilla, Palm Harbor, TX",
  price: 2700,
  image: House1,
};
