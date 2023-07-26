"use client";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "../Navlinks";
import Image from "next/image";
import { useAppSelector } from "@/app/store/hooks";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <section className="fixed top-0 w-full z-20">
      <div className="navbar bg-mywhite">
        <div className="navbar-start">
          <div className="dropdown">
            <Link href={"/"}>
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </Link>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Women</summary>
                  <ul className="p-2 ">
                    <li>
                      <Link href={"/tops"}>Tops</Link>
                    </li>
                    <li>
                      <Link href={"/pants"}>Pants</Link>
                    </li>
                    <li>
                      <Link href={"/accessories"}>Accessories</Link>
                    </li>
                    <li>
                      <Link href={"/shoes"}>Shoes</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="">
                <Link href={"#"}>About</Link>
              </li>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </div>

          <Link href={"/"} className="btn btn-ghost normal-case text-xl">
            <Image
              className="hidden lg:block"
              src={"/do.svg"}
              alt={"LOGO"}
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="navbar-center ">
          <Link href={"/"}>
            <Image
              className="block lg:hidden"
              src={"/do.svg"}
              alt={"LOGO"}
              width="100"
              height={100}
            />
          </Link>
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="navbar-end">
          <section>
            <Link href={"/cart"}>
              <label tabIndex={0} className="pr-10 cursor-pointer group">
                <div className="indicator ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7  group-hover:text-myorange duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {cart.length > 0 && (
                    <span className="group-hover:text-mywhite group-hover:bg-myblackpara badge badge-sm indicator-item text-myblackhead font-bold">
                      {cart.length}
                    </span>
                  )}
                </div>
              </label>
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
