import React from 'react'
import Navbar from '../navbar/Navbar'
import Slider from '../Slider/Slider'
// import Navbar from '../navbar/Navbar'/
import Category from '../category/Category'
import Product from '../product/Product'
import Newslater from '../newslater/Newslater'

const Home = () => {
  return (
    <>
<Navbar/>

      {/* <Navbar/> */}
      <Slider/>
      <Category/>
      <Product/>
      <Newslater/>
    </>
  )
}

export default Home
