"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";
import BestProductsCards from "./BestProductsCards";
import Image from "next/image";

const FeaturedProducts = () => {
  const bestSell = [
    {
      tittle: "Iphis White Little Marlborough Tote",
      desc: "Iphis White Little Marlborough Tote Bag",
      img: "/bst1.jpg",
      price: 189.0,
      alt: "best",
      category: "tops",
      slug: "shirt",
    },
    {
      tittle: "Women jumpers & bags",
      desc: "Iphis White Little Marlborough Tote Bag",
      img: "/bst2.jpg",
      price: 564.0,
      alt: "best",
      category: "accessories",
      slug: "bags",
    },
    {
      tittle: "Womens bags & purses - ZARA",
      desc: "Iphis White Little Marlborough Tote Bag",
      img: "/asc.jpg",
      price: 1029.0,
      alt: "best",
      category: "shoes",
      slug: "best-shoes",
    },
    {
      tittle: "Womens bags & purses - ZARA",
      desc: "Iphis White Little Marlborough Tote Bag",
      img: "/acessories.jpg",
      price: 1029.0,
      alt: "best",
      category: "shoes",
      slug: "best-shoes",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
        }
      }
    ]
  };

  return (
    <section className="text-myblackpara mt-[50px] mb-[20px] body-font">
      <div className="text-center mb-20">
        <h1 className=" text-myblackhead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl mb-3">
          Featured Products
        </h1>
        <div className="flex mt-6 justify-center ">
          <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>
      <Slider {...settings}>
         {bestSell.map((item, i) => {
          return (
            <div key={i}>
              <BestProductsCards
                src={item.img}
                alt={item.alt}
                tittle={item.tittle}
                price={item.price}
                desc={item.desc}
                category={item.category}
                slug={item.slug}
              />
            </div>
          );
        })}
        </Slider>
    </section>
  );
};

export default FeaturedProducts;
