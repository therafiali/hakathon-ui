"use client";
import { BsCartPlusFill } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/Fa";
import { ShoppingBag } from "lucide-react";
import SlugComponent from "./SlugComponent";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { GiDiscussion } from "react-icons/gi";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";

const Slugpage = ({ params }: { params: { slug: string } }) => {
  const dispatch = useAppDispatch()
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
    color:slug[0].colors[0]
  });
  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="md:w-4/5 mx-auto flex flex-wrap justify-center">
          {/* <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="https://dummyimage.com/400x400"
      /> */}
          <SlugComponent image={slug[0].img} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase font-bold">
              {slug[0].category}
            </h2>
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight text-myblackhead mb-1">
              {slug[0].title}
            </h1>
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myorange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myorange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myorange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myorange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myorange"
              />
            </div>

            <p className="leading-relaxed scroll-m-20 text-base font-normal text-myblackpara">
              {slug[0].desc}
            </p>
            <div className="flex mt-6 items-center pb-5  border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {slug[0].colors.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setCartItem({ ...cartItem, color: item })}
                    className="border-2 border-gray-300 mr-1 active:border-black focus:border-black rounded-full w-6 h-6 focus:outline-none"
                    style={{ backgroundColor: item }}
                  />
                ))}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select
                    onChange={(e) =>
                      setCartItem({ ...cartItem,size:[e.target.value] })
                    }
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                  >
                    {slug[0].size.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap item-center gap-3">
              <span className="mr-3 scroll-m-20 text-base text-myblackhead font-semibold tracking-tight">
                Quantity
              </span>
              <Button
                onClick={() =>
                  setCartItem({
                    ...cartItem,
                    qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,
                  })
                }
                className="group bg-myblackhead hover:bg-transparent text-mywhite hover:bg-myblackpara scroll-m-20  text-xs font-semibold rounded-xl  tracking-tight w-fit h-fit  "
              >
                {" "}
                <FaMinus className="mr-2 h-4 w-4" />
                Less
              </Button>
              <div className="mr-1 ml-1 mt-1 scroll-m-20 text-base font-semibold tracking-tight">
                {cartItem.qty}
              </div>
              <Button
                onClick={() =>
                  setCartItem({ ...cartItem, qty: ++cartItem.qty })
                }
                className="group bg-myblackhead hover:bg-transparent text-mywhite hover:bg-myblackpara scroll-m-20  text-xs font-semibold rounded-xl  tracking-tight w-fit h-fit  "
              >
                {" "}
                <FaPlus className="mr-2 h-4 w-4" />
                Add
              </Button>
            </div>
            <div className="divider"></div>
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex">
                <span
                  className={`title-font font-medium text-2xl text-myblackhead ${
                    cartItem.discount > 0 &&
                    "line-through decoration-2 decoration-myorange/70"
                  } `}
                >
                  ${cartItem.price * cartItem.qty}
                </span>
                {cartItem.discount > 0 && (
                  <p className="ml-3 title-font font-medium text-2xl text-myblackhead">
                    $
                    {Math.floor(
                      (cartItem.price -
                        (cartItem.price * cartItem.discount) / 100) *
                        cartItem.qty
                    )}
                  </p>
                )}
              </div>
              <Button onClick={()=> dispatch(addToCart(cartItem))} className="group bg-myblackhead hover:bg-transparent text-mywhite hover:bg-myblackpara scroll-m-20  text-xs font-semibold rounded-xl  tracking-tight  ">
                {" "}
                <BsCartPlusFill className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
            <Button className="group bg-myblackhead hover:bg-transparent text-mywhite hover:bg-myblackpara scroll-m-20  text-xs font-semibold rounded-xl  tracking-tight  w-full mt-4 ">
              {" "}
              <ShoppingBag className="mr-2  h-4 w-4" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slugpage;
