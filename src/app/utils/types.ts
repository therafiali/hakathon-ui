import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  title: string;
  img?: string|StaticImageData | undefined;
  slug: string;
  price: number;
  category: string;
  desc: string;
  size: string[];
  colors: string[];
  qty: number;
  discount: number;
  uuid:number
};

export type Cart = {
  id: number;
  title: string;
  img?: string | StaticImageData | undefined|any;
  slug: string;
  price: number;
  size: string[];
  category: string;
  qty: number;
  discount: number;
  colors: string[];
  uuid:number
};
