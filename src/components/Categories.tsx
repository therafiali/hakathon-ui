import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <section className="mt-16">
      <div className="text-center mb-14">
        <h1 className=" text-myblackhead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl mb-3">
          Our Categories
        </h1>

        <div className="flex mt-6 justify-center ">
          <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pr-10 pl-10 pb-20">
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href="/tops">
            <Image
              src={"/ttt.jpg"}
              alt="tops"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            
              <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblackhead/70 text-center text-mywhite w-full">
                <h3>TOPS</h3>
              </div>
              <div className="block lg:hidden absolute bottom-2 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblackhead/70 text-center text-mywhite w-full">
                <h3>TOPS</h3>
              </div>
             
        
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href="/pants">
            <Image
              src={"/pan.jpg"}
              alt="tops"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            
              <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblackhead/70 text-center text-mywhite w-full">
                <h3>PANTS</h3>
              </div>
              <div className="block lg:hidden absolute bottom-2 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblackhead/70 text-center text-mywhite w-full">
                <h3>PANTS</h3>
              </div>
             
        
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href="/shoes">
            <Image
              src={"/sz.jpg"}
              alt="c"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            
              <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblackhead/70 text-center text-mywhite w-full">
                <h3>SHOES</h3>
              </div>
              <div className="block lg:hidden absolute bottom-2 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblackhead/70 text-center text-mywhite w-full">
                <h3>SHOES</h3>
              </div>
             
        
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href="/accessories">
            <Image
              src={"/asc.jpg"}
              alt="tops"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            
              <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblackhead/70 text-center text-mywhite w-full">
                <h3>ACCESSORIES</h3>
              </div>
              <div className="block lg:hidden absolute bottom-2 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblackhead/70 text-center text-mywhite w-full">
                <h3>ACCESSORIES</h3>
              </div>
             
        
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
