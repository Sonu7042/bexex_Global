import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Clients from './Clients'
import Communities from './Communities'
import CompareConsulting from './CompareConsulting'
import LetsConnect from './LetsConnect'
import Services from './Services'
import TeamList from './TeamList'
import AnimatedScrollSection from '../animation/AnimationScrolling'
import About from './About'




const HeroSectionLayout = () => {
  return (
    <>
   <Home />
    <Services/>
    <AnimatedScrollSection/>
    <TeamList/>
    <Clients/>
    <CompareConsulting/> 
    <LetsConnect/>    
    <About/>
    </>
  )
}

export default HeroSectionLayout
