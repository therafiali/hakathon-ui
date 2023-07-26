"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { BsCartPlusFill } from "react-icons/bs";
import { addToCart } from "@/app/store/features/cart";
import product from "@/app/store/features/product";

const Toaster = ({ params }: { params: { slug: string } }) => {
  const dispatch = useAppDispatch();
  const notify = () =>
    toast.success("Product Added Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const product = useAppSelector((state) => state.products);
  const slug = product.filter((val: any) => val.slug == params.slug);
  const [cartItem, setCartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    img: slug[0].img,
    slug: slug[0].slug,
    price: slug[0].price,
    size: slug[0].size,
    category: slug[0].category,
    qty: slug[0].qty,
    discount: slug[0].discount,
    color: slug[0].colors[0],
  });
  return (
    <div className="w-fit" onClick={() => dispatch(addToCart(cartItem))}>
      {/* <button onClick={() => dispatch(addToCart(cartItem))}></button>
       */}
      <Button
        onClick={notify}
        className="group bg-myblackhead hover:bg-transparent text-mywhite hover:bg-myblackpara scroll-m-20  text-xs font-semibold rounded-xl  tracking-tight  "
      >
        {" "}
        <BsCartPlusFill className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Toaster;
