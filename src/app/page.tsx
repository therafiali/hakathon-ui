import Image from 'next/image'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Promotions from '../components/Promotions'
import Categories from '../components/Categories'
import BestSellingProducts from '../components/BestSellingProducts'
import FeaturedProducts from '../components/FeaturedProducts'

export default function Home() {
  return (
  <>
  <Hero/>
  <FeaturedProducts/>
  <Services/>
  <Promotions/>
  <Categories/>
  <BestSellingProducts/>
  </>
  )
}
