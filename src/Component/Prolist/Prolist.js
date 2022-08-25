import React from 'react'
import "./Prolist.scss"
// import {popularProducts} from "./Data.js"
import { 
  Link
} from "react-router-dom";

const Prolist = (props) => {
  return (


    <div className='prolist'>
        <div className="prolistwrapper">
            <div className="circle"></div>
            {/* <img className="imglist"></img> */}
            <img src={props.im} alt="" className="imglist" />
            {/* <img src="/assests/girl2.png" alt="" className="imglist" /> */}
            <div className="icon">
                <div className="iconwrap">
            <Link to="/singlecart" class="fa-solid fa-cart-arrow-down procart c cscal"></Link>
            <Link to="/dracess" class="fa-solid fa-magnifying-glass prosearch c cscal"></Link>
            {/* <i class="fa-thin fa-heart c"></i> */}
            {/* <i class="fa-light fa-heart c cscal"></i> */}
            <i class="fa-solid fa-heart c cscal"></i>
            </div>
            

            </div>
            
        </div>
      
    </div>
  )
}

export default Prolist
