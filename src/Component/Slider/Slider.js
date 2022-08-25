import React, {  useState } from 'react'
import "./Slider.css"
// import {sliderItems} from "./data/Data"
// import {sliderItems} from '../data/Data'


const Slider = () => {
  // const [sld , setsld] = useState(false)
  const [sldindex , setsldijdex] = useState(0)

  const clickhandle = ()=>{
    
    // setsldijdex(sldindex+1)
    if(sldindex<2){
    setsldijdex(sldindex+1)
    }
  }
  const clickhandle2 = ()=>{
    
    if(sldindex >0){
    setsldijdex(sldindex-1)
    }
  }
 
  return (

    

    <div className="container">
    {/* <div className="sliiderwrapper " > */}
    <div className="sliiderwrapper " style={{transform: `translateX(${-(sldindex*100)}vw)`}}>
    
  


    <div className='slider slider1' >
   
        <div className="leftslider" >
          <div className="slidebtn"  onClick={()=>{clickhandle2()}}><i class="fa-solid fa-chevron-left"></i></div>
          <img src="/assests/slimg1.png" alt="" className="sliderimg" />
        </div>
        <div className="rightslider">

          <div className="rightwrapper">
          <h1 className='summer'>SUMMER SALE</h1>
          <p className='summerdesc'>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>

          <span className="shopbtn">
          <select class="optionshop">
             <option className='optin' selected>language</option>
             <option  className='optin'  value="1">Hindi</option>
             <option className='optin'  value="2">English</option>
            <option className='optin'  value="3">Hinglish</option>
             </select>
          </span>

          <div className="slidebtnruight" onClick={()=>{clickhandle()}}><i class="fa-solid fa-angle-right"></i></div>
          </div>
        </div>
         
    </div>


   <div className='slider slider2'>
        <div className="leftslider">
        <div className="slidebtn"  onClick={()=>{clickhandle2()}}><i class="fa-solid fa-chevron-left"></i></div>
          <img src="/assests/sl4.png" alt="" className="sliderimg slimg" />
        </div>
        <div className="rightslider">

          <div className="rightwrapper">
          <h1 className='summer'>AUTUMN COLLECTION</h1>
          <p className='summerdesc'>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>

          <span className="shopbtn">
          <select class="optionshop">
             <option className='optin' selected>language</option>
             <option  className='optin'  value="1">Hindi</option>
             <option className='optin'  value="2">English</option>
            <option className='optin'  value="3">Hinglish</option>
             </select>
          </span>

          <div className="slidebtnruight" onClick={()=>{clickhandle()}}><i class="fz fa-solid fa-angle-right"></i></div>
          </div>
        </div>
         
    </div> 


    * <div className='slider slider3'>
        <div className="leftslider">
        <div className="slidebtn"  onClick={()=>{clickhandle2()}}><i class="fz fa-solid fa-chevron-left"></i></div>
          <img src="/assests/sl5.png" alt="" className="sliderimg" />
        </div>
        <div className="rightslider">

          <div className="rightwrapper">
          <h1 className='summer'>LOUNGEWEAR LOVE</h1>
          <p className='summerdesc'>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>

          <span className="shopbtn">
          <select class="optionshop">
             <option className='optin' selected>language</option>
             <option  className='optin'  value="1">Hindi</option>
             <option className='optin'  value="2">English</option>
            <option className='optin'  value="3">Hinglish</option>
             </select>
          </span>

          <div className="slidebtnruight" onClick={()=>{clickhandle()}}><i class="fa-solid fa-angle-right"></i></div>
          </div>
        </div> 
         
    </div>
    </div>

    </div>
  )
}

export default Slider
