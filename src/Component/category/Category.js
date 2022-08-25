import React from 'react'
import "./Category.css"
// import {categories} from '../data/Data'
import { 
    Link
} from "react-router-dom";
 
const Category = () => {
  return (
    <div className='category'>
        <div className="categorywrapper">
            <div className="categoryrow1">
                <div className="colom1">
                    {/* <div className="cc1"> */}
                    <span className="shirt">SHIRT STYLE</span>
                    <Link to="/singleproduct"  className="now">SHOPE NOW</Link>
                    {/* </div> */}
                </div>
                <div className="colom2">
                <span className="shirt">LONGEWEAR LOVE</span>
                    <Link to="/singleproduct" className="now">SHOPE NOW</Link>
                </div>
                <div className="colom3">
                <span className="shirt">LIGHT JACKET</span>
                    <Link to="/singleproduct" className="now">SHOPE NOW</Link>
                </div>

            </div>

            <div className="categoryrow2">
                <div className="colom11 ccc"></div>
                <div className="colom12 ccc"></div>

            </div>

        </div>
      
    </div>
  )
}

export default Category
