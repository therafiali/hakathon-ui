import { Dice1, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { BsCartPlusFill } from "react-icons/bs";
import { Button } from "./ui/button";
import Link from "next/link";

const BestProductsCards = ({
  src,
  alt,
  tittle,
  desc,
  price,
  category,
  slug,
  discount,
}: {
  src: string;
  alt: string;
  tittle: string;
  desc: string;
  price: number;
  category: string;
  slug: string;
  discount: number;
}) => {
  return (
    <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
      <Link href={`/${category}/${slug}`}>
        {/* image div */}
        <div className="block  h-[23rem] rounded overflow-hidden">
          <Image
            className="mx-auto mt-4  duration-500 group-hover:scale-125"
            src={src}
            alt={alt}
            width={400}
            height={400}
          />
        </div>

        {/* typography div */}
        <div className=" mt-4 ">
          {/* <Link href={`/${category}/${slug}`}> */}
          {tittle && (
            <h2 className="mt-2 scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0  line-clamp-1  text-myblackhead  ">
              {tittle}
            </h2>
          )}
          {desc && (
            <p className="mt-2 scroll-m-20  text-sm font-semibold tracking-tight line-clamp-1 text-myblackpara">
              {desc}
            </p>
          )}
          {price && (
            <div className="flex gap-3">
              <p
                className={`mt-2 scroll-m-20  text-base font-semibold tracking-tight line-clamp-1 text-myblackhead ${
                  discount > 0 &&
                  "line-through decoration-2 decoration-myorange/70"
                }`}
              >
                ${price}
              </p>
              {discount > 0 && (
                <p className="mt-2 scroll-m-20  text-base font-semibold tracking-tight line-clamp-1 text-myblackhead">
                  ${price - ((price*discount)/100)}
                </p>
              )}
            </div>
          )}
        </div>
      </Link>
      <div className="">
        <Button className="group bg-myblackhead hover:bg-transparent text-mywhite hover:bg-myblackpara scroll-m-20  text-xs font-semibold rounded-xl absolute bottom-2 right-2 tracking-tight  ">
          {" "}
          <BsCartPlusFill className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button className="group bg-myblackhead hover:bg-transparent text-mywhite hover:bg-myblackpara scroll-m-20  text-xs font-semibold rounded-xl absolute bottom-2 left-2 tracking-tight  ">
          {" "}
          <ShoppingBag className="mr-2 h-4 w-4" />
          Buy Now
        </Button>
        {discount > 0 && (
          <div className="scroll-m-20 text-xs font-semibold tracking-tight text-mywhite bg-myorange absolute top-0 left-2 w-[87px] p-2 text-center uppercase rounded-tl-xl rounded-bl-xl myDiscount">{`${discount}% off`}</div>
        )}
      </div>
    </div>
  );
};

export default BestProductsCards;
