import React from "react";

const Promotions = () => {
  return (
    <section className="">
      <div className="text-center mb-20">
        <h1 className=" text-myblackhead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl mb-3">
          Our Promotions
        </h1>

        <div className="flex mt-6 justify-center ">
          <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>
      {/* promotions start here */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-screen-xl mx-auto">
        {/* main div */}
        <div className="hero min-h-screen pro1 rounded-xl">
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content pro1">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-mywhite">
              Get Upto <span className="text-myorange">60%</span> off
            </h1>
            <p className="scroll-m-20 text-base font-medium tracking-tight text-mywhite ">
              Flash Sale, get upto 60% off on the season variant
            </p>
          </div>
        </div>
      </div>
      {/* 2nd */}
      <div className="hero min-h-screen pro2 rounded-xl">
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content pro1">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-mywhite">
              Get Upto <span className="text-myorange">30%</span> off
            </h1>
            <p className="scroll-m-20 text-base font-medium tracking-tight text-mywhite ">
              Flash Sale, get upto 60% off on the new arrivals
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Promotions;
