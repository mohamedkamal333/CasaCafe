import React from 'react';
import Header from './Header/header'
import About from './about-us/about';
import Features from './features/features';
import Testimonial from './testimonial/testimonial';
import Services from './services/services';
import RateUs from './rate-us/rate_us';
import OurBrands from './our-brands/our_brands';
import OurInfluence from './ou- influence/our_influence';

export default function Home() {
  return (
      <>
      <Header/>
      <About/>
      <Features/>
      <Testimonial/>
      <Services/>
      <RateUs/>
      <OurBrands/>
      <OurInfluence/>
      </>    
  )
}
