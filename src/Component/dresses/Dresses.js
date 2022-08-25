import React from 'react'
import Navbar from '../navbar/Navbar'
import Newslater from '../newslater/Newslater'
import Prolist from '../Prolist/Prolist'
import "./Dresses.css"

const Dresses = () => {
  return (
    <div className='dresses'>
    <Navbar/>
      <div className="dresseswrapper">
        <h1 className="headdress">Drasses</h1>
        <div className="filter">
            <div className="filterleft">
                <span className="filpro filproduct">Filter Product :</span>

                {/* <span className="filtercolor"> */}
             <select class="colorbtn">
             <option className='filclr' selected>Color</option>
             <option  className='filclr'  value="1">Red</option>
             <option className='filclr'  value="2">White</option>
            <option className='filclr'  value="3">Blue</option>
             </select>
          {/* </span> */}

                {/* <span className="filtersize colorbtn" > */}
             <select class="sizebtn colorbtn" >
             <option className='filsze' selected>Size</option>
             <option  className='filsze'  value="1">S</option>
             <option className='filsze'  value="2">M</option>
            <option className='filsze'  value="3">L</option>
            <option className='filsze'  value="3">XL</option>
             </select>
          {/* </span> */}
          
            </div>


            <div className="filterright">
                <span className="filproduct">Filter Product :</span>

                {/* <span className="filterpro"> */}
             <select class="filprobtn colorbtn ">
             <option className='filpro' selected>Newsest</option>
             <option  className='filpro'  value="1">PriceUP</option>
             <option className='filpro'  value="2">Pricedown</option>
            {/* <option className='filpro'  value="3">bblue</option> */}
             </select>
          {/* </span> */}
            </div>
        </div>
 
 <div className="drassescenter">
    {/* <Prolist/>
    <Prolist/>
    <Prolist/>
    <Prolist/>
    <Prolist/>
    <Prolist/> */}
    <Prolist im={"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"}/>
        <Prolist im={"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"}/>
        <Prolist im={"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png"}/>
        <Prolist im={"https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png"}/>
        <Prolist im={"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png"}/>
        <Prolist im={"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png"}/>
 </div>

 <Newslater/>
 

      </div>
    </div>
  )
}

export default Dresses
