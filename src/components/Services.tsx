import Image from 'next/image'
import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'

const Services = () => {
  return (
    <div>
        <section className="text-myblackpara mt-[20px] mb-[20px] body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className=" text-myblackhead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl mb-3">
        Our Services
      </h1>
   
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 group mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-50 text-myorange mb-5 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><path d="M14 17h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-myblackhead scroll-m-20 text-lg font-extrabold tracking-tight lg:text-2xl mb-3 group-hover:text-myorange">
            Free Delivery
          </h2>
          <p className="text-myblackpara group-hover:text-myblackpara/80 leading-7 [&:not(:first-child)]:mt-6 line-clamp-2">
          Buy 100% genuine free delivery products online from free delivery
          </p>
          
        </div>
      </div>
      
      <div className="p-4 group mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-50 text-myorange mb-5 flex-shrink-0">
        <RiCustomerService2Fill size={35}/>
        </div>
        <div className="flex-grow">
          <h2 className="text-myblackhead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl mb-3 group-hover:text-myorange">
            24/7 Customer Service
          </h2>
          <p className="text-myblackpara group-hover:text-myblackpara/80 leading-7 [&:not(:first-child)]:mt-6 line-clamp-2">
          There's no doubt that by providing your customers with 24/7 customer service
          </p>
          
        </div>
      </div>
      <div className="p-4 group mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-50 text-myorange mb-5 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-myblackhead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl mb-3 group-hover:text-myorange">
            Money Back Guarantee
          </h2>
          <p className="text-myblackpara group-hover:text-myblackpara/80 leading-7 [&:not(:first-child)]:mt-6 line-clamp-2">
          Money doesn't guarantee a happy life. He guaranteed a victory in the championship game.
          </p>
          
        </div>
      </div>
      
      
    </div>
    
    
  </div>
</section>

    </div>
  )
}

export default Services