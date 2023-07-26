import { Product } from "./types";

export const products: Product[] = [
  {
    id: 0,
    title: "Iphis White Little Marlborough Tote",
    desc: "Iphis White Little Marlborough Tote Bag",
    img: "/bst1.jpg",
    price: 189.0,
    category: "tops",
    slug: "shirt",
    size: ["L", "M","S"],
    colors: ["#ffff", "#f2f2f2"],
    qty: 1,
    discount:30,
    uuid:0
  },
  {
    id: 1,
    title: "Women jumpers & bags",
    desc: "Iphis White Little Marlborough Tote Bag",
    img: "/bst2.jpg",
    price: 564.0,
    category: "accessories",
    slug: "bags",
    size: ["L", "M"],
    colors: ["#ffff", "#f2f2f2"],
    qty: 1,
    discount:0,
    uuid:1,
  },
  {
    id: 2,
    title: "Womens bags & purses - ZARA",
    desc: "Iphis White Little Marlborough Tote Bag",
    img: "/bst3.jpg",
    price: 1029.0,
    category: "shoes",
    slug: "best-shoes",
    size: ["L", "M"],
    colors: ["#ffff", "#f2f2f2"],
    qty: 1,
    discount:10,
    uuid:2,
  },
  {
    id: 3,
    title: "Womens bags & purses - ZARA",
    desc: "Iphis White Little Marlborough Tote Bag",
    img: "/pan.jpg",
    price: 1029.0,
    category: "pants",
    slug: "best-pants",
    size: ["L", "M"],
    colors: ["#ffff", "#f2f2f2"],
    qty: 1,
    discount:25,
    uuid:3,
  },
];