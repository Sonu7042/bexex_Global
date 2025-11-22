import React from 'react'
import Blogs from './Blogs'
import BlogsGrid from './BlogsGrid'
import LetsConnect from './LetsConnect'
import  Footer from './Footer'
 

const blogSectionLayout = () => {
  return (
    <>
    <main className='px-4 md:px-16 lg:px-12'>
      <Blogs />
      <BlogsGrid />
    </main>
     <LetsConnect />
     <Footer />

    </>
  )
}

export default blogSectionLayout
