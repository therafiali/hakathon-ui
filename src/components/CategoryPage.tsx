"use client";

import { useAppSelector } from "@/app/store/hooks";
import BestProductsCards from "./BestProductsCards";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const product = useAppSelector((state) => state.products);
  const bestSell = product.filter(
    (val: any) => val.category == params.category
  );
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className=" text-myblackhead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl mb-3 capitalize">
          {params.category}
        </h1>

        <div className="flex mt-6 justify-center ">
          <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>
      <div className=" gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto ">
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
    </div>
  );
};

export default CategoryPage;
