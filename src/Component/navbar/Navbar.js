import React from 'react'
import "./Navbar.css"
import { 
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navabr'>

        <div className="leftnav">

      <div className="optionnav">
     <select class="option">
        <option selected>language</option>
        <option value="1">Hindi</option>
        <option value="2">English</option>
      <option value="3">Hinglish</option>
      </select>
      </div>

     <div className="searchdiv">
            <input placeholder='search' type="text" className="search" />
            <i class="fa-solid fa-magnifying-glass sicon"></i>
     </div>

        </div>
        <div className="centernav">
            <h1 className="name">Prasth</h1>
        </div>

        <div className="rightnav">
            <Link to="/" className="rgst">Home</Link>
            {/* <Link to="/dracess" className="singin">Sign In</Link> */}
            <span className="singin">Sign In</span>
            <Link to="/singlecart"  class="fa-solid fa-cart-arrow-down cart"></Link>
        </div>
      
    </div>
  )
}

export default Navbar
