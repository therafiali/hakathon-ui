"use client";
import { useAppSelector } from "@/app/store/hooks";
import CartCard from "./CartCard";
import { Button } from "./ui/button";

const CartPage = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const total = cartArray.reduce((total, arr) => {
    return total + (arr.price - (arr.price * arr.discount) / 100) * arr.qty;
  }, 0);

  return (
    <div className="grid grid-col-1 lg:grid-cols-3">
      {/* items */}
      <div className="lg:col-span-2">
        <CartCard />
      </div>
      {/* summary */}
      <div className="bg-myblackhead/5 p-10 rounded-xl">
        {/* heading */}
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-myblackhead">
          Order Summary
        </h2>
        <div className="divider mt-0 mb-1"></div>
        {/* pricing */}
        <div className="text-sm font-semibold tracking-tight text-myblackpara">
          <div className="flex justify-between items-center capitalize">
            <h2>Subtotal</h2>
            <h2>${total}</h2>
          </div>
          <div className="flex justify-between items-center capitalize">
            <h2>Delivery Charges</h2>
            <h2>TBD</h2>
          </div>
          <div className="flex justify-between items-center capitalize">
            <h2>Service Charges</h2>
            <h2>TBD</h2>
          </div>
          <div className="divider mt-0 mb-1"></div>
          <div className="flex justify-between items-center font-semibold text-sm capitalize">
            <h2>Estimated Total</h2>
            <h2>${total}</h2>
          </div>
          <div className="divider mt-0 mb-1"></div>
          {/* checkout btn */}
          <div className="flex items-center justify-center w-full">
            <Button className="bg-myblackhead rounded-md hover:bg-transparent duration-300 text-mywhite hover:text-myblackhead scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md">
              Proceed to Checkout
            </Button>
          </div>
          <div className="divider mt-0 mb-1"></div>
          <p className="text-center italic font-semibold text-xs text-myblackhead w-[97%]">
            {
              "*Delivery charges and sales will be calculated in the checkout page."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
