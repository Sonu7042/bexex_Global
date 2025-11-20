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




const HeroSectionLayout = () => {
  return (
    <>
    <main className='px-4 md:px-16 lg:px-12'>
    <Home />
    <Services/>
    <AnimationScrolling />
    <TeamList/>
    <Clients/>
    <CompareConsulting/> 
    </main>
    <LetsConnect/>    
    </>
  )
}

export default HeroSectionLayout
