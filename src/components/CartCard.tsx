"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaMinus, FaPlus, FaTrash } from "react-icons/Fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addCart, delItem, subtractCart} from "@/app/store/features/cart";
const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <>
      {cartArray.length >= 1 &&
        cartArray.map((item, i) => (
          <div
            key={i}
            className="flex mt-4 py-3 mx-auto justify-center items-center"
          >
            <Image
              src={item.img}
              alt={"checkout"}
              width={80}
              height={80}
              className="w-[100px] h-[100px]"
            />
            <div className="flex px-5 justify-between w-full items-center">
              <div>
                <h2 className="text-sm font-semibold leading-none line-clamp-1 text-myblackhead">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-myblackpara/80 font-semibold leading-none">
                  size:&nbsp;{item.size}
                </p>
                <div className="mt-2 flex items-center ">
                  <Button
                    onClick={() => dispatch(subtractCart(item))}
                    className="group hover:bg-mywhite bg-myblackhead text-mywhite hover:text-myblackhead w-fit rounded-lg text-xs duration-300"
                  >
                    <FaMinus className="h-2 w-2 group-hover:text-myblackhead" />
                  </Button>
                  <div className="tracking-tight font-semibold scroll-m-20 text-myblackpara mr-2 ml-2 text-sm">
                    {item.qty}
                  </div>
                  <Button
                    onClick={() => dispatch(addCart(item))}
                    className="group hover:bg-mywhite bg-myblackhead text-mywhite hover:text-myblackhead 
                    
                    w-fit rounded-lg text-xs duration-300"
                  >
                    <FaPlus className="h-2 w-2 group-hover:text-myblackhead" />
                  </Button>
                </div>
                <div className="lg:hidden mt-2 flex justify-center items-center flex-col gap-2">
                  <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myblackhead">
                    Price: $
                    {item.discount > 0
                      ? Math.floor(
                          (item.price - (item.price * item.discount) / 100) *
                            item.qty
                        )
                      : Math.floor(item.price * item.qty)}
                  </h3>
                  <FaTrash
                    onClick={() => dispatch(delItem(item.uuid))}
                    className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"
                  />
                </div>
              </div>
              <div className="hidden lg:flex flex-col  items-end gap-5">
                <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myblackhead">
                  Price: $
                  {item.discount > 0
                    ? Math.floor(
                        (item.price - (item.price * item.discount) / 100) *
                          item.qty
                      )
                    : Math.floor(item.price * item.qty)}
                </h3>
                <FaTrash
                  onClick={() => dispatch(delItem(item.uuid))}
                  className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CartCard;
