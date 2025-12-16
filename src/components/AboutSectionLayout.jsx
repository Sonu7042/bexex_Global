import React from 'react'
import About from './About'
import Footer from './Footer'
      
import LetsConnect  from './LetsConnect'
import OnScrollingAnimation from './OnScrollingAnimation'

const AboutSectionLayout = () => {
  return (
    <>
    <main className="px-4 md:px-16 lg:px-12" >
     <About /> 
    </main>
      <LetsConnect />

      <OnScrollingAnimation />

    <Footer />
    </>
  )
}

export default AboutSectionLayout
