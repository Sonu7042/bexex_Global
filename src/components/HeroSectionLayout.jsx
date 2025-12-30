import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Clients from './Clients'
import Communities from './Communities'
import CompareConsulting from './CompareConsulting'
import LetsConnect from './LetsConnect'
import Services from './Services'
import TeamList from './TeamList'
import AnimationScrolling from '../animation/AnimationScrolling'
import Footer from './Footer'
import CardScrollCenter from './Resources'
import TeamApartCarousel from './TeamApartCarousel'
import StatsMarquee from './StatsMarquee'





const HeroSectionLayout = () => {
  return (
    <>
    <main className='px-4 md:px-16 lg:px-12'>
    <Home />
    <StatsMarquee />
    </main>


    <main className='px-4 md:px-16 lg:px-12'>
    <Services/>
    <AnimationScrolling />
    {/* <CardScrollCenter /> */}
    <TeamList/>
    {/* <TeamApartCarousel /> */}
    <Clients/>
    <CompareConsulting/> 
    </main>
      <LetsConnect/>   
      <Footer />
    </>
  )
}

export default HeroSectionLayout
