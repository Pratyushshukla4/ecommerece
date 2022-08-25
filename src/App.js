import React from 'react'
import Shoppingcart from './Component/shoppingcart/Shoppingcart'
// import Slider from './Component/Slider/Slider'
// import Navbar from './Component/navbar/Navbar'
// import Category from './Component/category/Category'
// import Product from './Component/product/Product'
// import Newslater from './Component/newslater/Newslater'
import Dresses from './Component/dresses/Dresses'
import Singleproduct from './Component/singleproduct/Singleproduct'

import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from "react-router-dom";
import Home from './Component/home/Home'

const App = () => {
  return (
    <>

<Router>
  
      <Routes>
        
        <Route exact path="/" element={<Home/>}>  </Route>
        <Route exact path="/singlecart" element={<Shoppingcart/>}>

        </Route>
        <Route exact path="/singleproduct" element={<Singleproduct/>}>

        </Route>
        <Route exact path="/dracess" element={<Dresses/>}>

        </Route>

       
      </Routes>
    </Router>



    
      
      {/* <Dresses/> */}
      {/* <Singleproduct/> */}
      {/* <Shoppingcart/> */}

    </>
  )
}

export default App
