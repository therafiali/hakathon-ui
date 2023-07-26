"use client";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import BestProductsCards from "./BestProductsCards";
import { useAppSelector } from "@/app/store/hooks";

const BestSellingProducts = () => {
  const product = useAppSelector((state) => state.products);
  const bestSell = product.slice(0, 3);
  return (
    <section className="mt-16 pb-20 mx-auto">
      <div className="text-center mb-10">
        <h1 className=" text-myblackhead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl mb-3">
          Best Selling Products
        </h1>

        <div className="flex mt-6 justify-center ">
          <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>
      {/* start here */}
      <div className=" flex flex-wrap justify-center gap-5 ">
        {bestSell.map((item: any, i) => {
          return (
            <div key={i}>
              <BestProductsCards
                src={item.img}
                alt={item.title}
                tittle={item.title}
                price={item.price}
                desc={item.desc}
                category={item.category}
                slug={item.slug}
                discount={item.discount}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BestSellingProducts;
