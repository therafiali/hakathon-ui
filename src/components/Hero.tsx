import React from 'react'
import { Button } from './ui/button'
import {AiFillShopping} from 'react-icons/ai'

const Hero = () => {
  return (
    <div><div className="hero min-h-[100vh] custom-image bg-fixed bg-center bg-no-repeat   bg-base-200">
        <div className='bg-opacity-40 hero-overlay'></div>
    <div className="hero-content  text-center">
      <div className="max-w-md">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-mywhite">Early <span className='text-myorange z-0'>Access</span> Sale</h1>
        <p className="py-6  scroll-m-20 text-   xl font-semibold tracking-tight  text-mywhite">SS23 styles at 50% off for Falconeri Club loyalty members only.</p>
        <Button className='text-mywhite outline outline-offset-2 outline-1 group hover:rounded-3xl duration-300 hover:outline-myorange '>
      <AiFillShopping className="mr-2 h-6 w-6 group-hover:text-myorange group-hover:animate-bounce" /> Shop Now
    </Button>
      </div>
    </div>
  </div></div>
  )
}

export default Hero